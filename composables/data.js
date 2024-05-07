export const tabs = [
	{
		label: 'Личности',
		image: 'https://avatars.dzeninfra.ru/get-zen_doc/1596193/pub_64de6012e4ad755a460a6375_64de60af8d937001cb445d0d/scale_1200',
		subtabs: ['Полководцы', 'Герои ВОВ', 'Партизанское движение'],
		icon: 'account-box',
	},
	{
		label: 'Карты',
		image: '/maps/endsieg.jpg',
		subtabs: [],
		icon: 'file-map',
	},
	{
		label: 'Оружие Победы',
		image: 'https://as2.ftcdn.net/v2/jpg/01/44/75/49/1000_F_144754982_c781mdMu0NxWrZDQqlwCIoL2Nv0OKynm.jpg',
		subtabs: [],
		icon: 'military-tech-rounded',
	},
	{
		label: 'Галерея Войны',
		image: '/gallery/15.jpg',
		subtabs: [],
		icon: 'photo-frame-rounded',
	},
	{
		label: 'Дополнительно',
		image: '',
		subtabs: ['Кинематограф', 'Термины', 'Тест', 'Полезные ссылки'],
		icon: 'add-diamond-rounded',
	},
	// {
	// label: 'Тесты',
	// image: '',
	// subtabs: [],
	// },
];

export const data = reactive({
	leaders: await $fetch('/content/leaders.json'),
	heroes: await $fetch('/content/heroes.json'),
	partisans: await $fetch('/content/partisans.json'),
	films: await $fetch('/content/films.json'),
	maps: await $fetch('/content/maps.json'),
	techs: await $fetch('/content/techs.json'),
	tests: await $fetch('/content/tests.json'),
	links: await $fetch('/content/links.json'),
	terms: await $fetch('/content/terms.json'),
});
