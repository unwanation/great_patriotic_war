export const tabs = [
	{
		label: 'Полководцы',
		image: 'https://avatars.dzeninfra.ru/get-zen_doc/1596193/pub_64de6012e4ad755a460a6375_64de60af8d937001cb445d0d/scale_1200',
	},
	{
		label: 'Карты',
		image: '/maps/endsieg.jpg',
	},
	{
		label: 'Оружие Победы',
		image: 'https://as2.ftcdn.net/v2/jpg/01/44/75/49/1000_F_144754982_c781mdMu0NxWrZDQqlwCIoL2Nv0OKynm.jpg',
	},
	{
		label: 'Галерея Войны',
		image: '/gallery/15.jpg',
	},
	{
		label: 'Тесты',
	},
];

export const data = reactive({
	leaders: await $fetch('/content/leaders.json'),
	maps: await $fetch('/content/maps.json'),
	techs: await $fetch('/content/techs.json'),
	tests: await $fetch('/content/tests.json'),
});
