export default defineNuxtConfig({
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
	],
	ssr: false,
	css: ['~/assets/main.css'],
	devtools: { enabled: true },
	modules: ['nuxt-icon'],
});
