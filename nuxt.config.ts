import topLevelAwait from 'vite-plugin-top-level-await';

export default defineNuxtConfig({
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],
	ssr: false,
	css: ['~/assets/vars.css', '~/assets/fonts.css', '~/assets/main.css'],
	devtools: { enabled: true },
	modules: ['nuxt-icon', '@nuxt/image', 'vue3-carousel-nuxt'],
	vite: {
		plugins: [
			topLevelAwait({
				promiseExportName: '__tla',
				promiseImportName: i => `__tla_${i}`,
			}),
		],
	},
});
