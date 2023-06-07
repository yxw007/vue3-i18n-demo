import { genMessage } from "../helper";

//! 加载语言目录下的各个模块配置
const modules = import.meta.globEager("./zh-CN/**/*.js");
export default {
	message: {
		...genMessage(modules, "zh-CN"),
	},
};
