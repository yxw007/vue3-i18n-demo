import { createI18n } from "vue-i18n";
import { setHtmlPageLang, setLoadLocalePool } from "./helper";
import { localeSetting } from "../setttings/localeSetting";
import { LOCALE } from "../setttings/localeSetting";

const { fallback, availableLocales } = localeSetting;

async function createI18nOptions() {
	//! zh_CN
	const locale = localStorage.getItem("locale") ?? LOCALE.EN_US;
	//! 加载语言配置文件
	const defaultLocal = await import(`./lang/${locale}.js`);
	const message = defaultLocal.default?.message ?? {};

	setHtmlPageLang(locale);
	setLoadLocalePool((loadLocalePool) => {
		loadLocalePool.push(locale);
	});

	return {
		legacy: false,
		locale,
		fallbackLocale: fallback,
		messages: {
			[locale]: message,
		},
		availableLocales: availableLocales,
		sync: true, //If you don’t want to inherit locale from global scope, you need to set sync of i18n component option to false.
		silentTranslationWarn: true, // true - warning off
		missingWarn: false,
		silentFallbackWarn: true,
	};
}

export let i18n = null;

// setup i18n instance with glob
export async function setupI18n(app) {
	const options = await createI18nOptions();
	//! 通过i18n来获取语言信息，内部提供了各种获取信息的接口，比如：t、rt、d、n、tm、te
	//! app.config.globalProperties.$i18n 可拿到此对象
	i18n = createI18n(options);

	app.use(i18n);
}
