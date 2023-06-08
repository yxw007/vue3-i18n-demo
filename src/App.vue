<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import { computed, ref, watchEffect, unref } from "vue";
import { useLocale } from "@/locales/useLocale";
import { LOCALE, localeList } from "./setttings/localeSetting";
import { useI18n } from "./locales/helper";

const { t } = useI18n();
const { changeLocale, getLocale } = useLocale();

const selectedKeys = ref([]);
watchEffect(() => {
	selectedKeys.value = [unref(getLocale)];
});

const getLocaleText = computed(() => {
	const key = selectedKeys.value[0];
	if (!key) {
		return "";
	}
	return localeList.find((item) => item.event === key)?.text;
});

async function toggleLocale() {
	let lang =
		getLocaleText.value == localeList[0].text ? LOCALE.EN_US : LOCALE.ZH_CN;
	await changeLocale(lang);
	selectedKeys.value = [lang];
}
</script>

<template>
	<header>
		<img
			alt="Vue logo"
			class="logo"
			src="./assets/logo.svg"
			width="125"
			height="125" />
		<button class="changeLang" @click.stop="toggleLocale">
			language : {{ getLocaleText }}
		</button>
		<div class="wrapper">
			<HelloWorld :msg="t('index.tips')" />
		</div>
	</header>

	<main>
		<TheWelcome />
	</main>
</template>

<style scoped>
header {
	line-height: 1.5;
}

.logo {
	display: block;
	margin: 0 auto 2rem;
}

.changeLang {
	position: fixed;
	top: 20px;
	right: 20px;
}

@media (min-width: 1024px) {
	header {
		display: flex;
		place-items: center;
		padding-right: calc(var(--section-gap) / 2);
	}

	.logo {
		margin: 0 2rem 0 0;
	}

	header .wrapper {
		display: flex;
		place-items: flex-start;
		flex-wrap: wrap;
	}
}
</style>
