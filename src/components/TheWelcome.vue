<script setup>
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
import { useI18n } from "@/locales/helper";

const { t } = useI18n();
</script>

<template>
	<WelcomeItem>
		<template #icon>
			<DocumentationIcon />
		</template>
		<template #heading>{{ t("index.items[0].name") }}</template>
		{{ t("index.items[0].desc") }}
	</WelcomeItem>

	<WelcomeItem>
		<template #icon>
			<ToolingIcon />
		</template>
		<template #heading>{{ t("index.items[1].name") }}</template>
		{{ t("index.items[1].desc") }}
	</WelcomeItem>

	<WelcomeItem>
		<template #icon>
			<EcosystemIcon />
		</template>
		<template #heading>{{ t("index.items[2].name") }}</template>
		{{ t("index.items[2].desc") }}
	</WelcomeItem>

	<WelcomeItem>
		<template #icon>
			<CommunityIcon />
		</template>
		<template #heading>{{ t("index.items[3].name") }}</template>
		{{ t("index.items[3].desc") }}
	</WelcomeItem>

	<WelcomeItem>
		<template #icon>
			<SupportIcon />
		</template>
		<template #heading>{{ t("index.items[4].name") }}</template>
		{{ t("index.items[4].desc") }}
	</WelcomeItem>
</template>
