import { set } from "lodash-es";
import { i18n } from "./setupI18n";

export const loadLocalePool = [];

export function setHtmlPageLang(locale) {
	document.querySelector("html")?.setAttribute("lang", locale);
}

export function setLoadLocalePool(cb) {
	cb(loadLocalePool);
}

export function genMessage(langs, prefix = "lang") {
	const obj = {};

	Object.keys(langs).forEach((key) => {
		const langFileModule = langs[key].default;
		let fileName = key.replace(`./${prefix}/`, "").replace(/^\.\//, "");
		const lastIndex = fileName.lastIndexOf(".");
		fileName = fileName.substring(0, lastIndex);
		const keyList = fileName.split("/");
		const moduleName = keyList.shift();
		const objKey = keyList.join(".");

		if (moduleName) {
			if (objKey) {
				set(obj, moduleName, obj[moduleName] || {});
				set(obj[moduleName], objKey, langFileModule);
			} else {
				set(obj, moduleName, langFileModule || {});
			}
		}
	});
	return obj;
}

function getKey(namespace, key) {
	if (!namespace) {
		return key;
	}
	if (key.startsWith(namespace)) {
		return key;
	}
	return `${namespace}.${key}`;
}

export function useI18n(namespace) {
	const normalFn = {
		t: (key) => {
			return getKey(namespace, key);
		},
	};

	if (!i18n) {
		return normalFn;
	}

	const { t, ...methods } = i18n.global;

	const tFn = (key, ...arg) => {
		if (!key) return "";
		if (!key.includes(".") && !namespace) return key;
		return t(getKey(namespace, key), ...arg);
	};
	return {
		...methods,
		t: tFn,
	};
}
