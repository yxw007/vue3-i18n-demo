import "./assets/main.css";
import { setupI18n } from "./locales/setupI18n";
import { createApp } from "vue";
import App from "./App.vue";

async function bootstrap() {
	const app = createApp(App);
	await setupI18n(app);
	app.mount("#app");
}

bootstrap();
