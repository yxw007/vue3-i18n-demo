import { genMessage } from "../helper";

const modules = import.meta.globEager("./en/**/*.js");
export default {
	message: {
		...genMessage(modules, "en"),
	},
	dateLocale: null,
	dateLocaleName: "en",
};
