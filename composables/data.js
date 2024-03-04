export const tabs = [
	{
		label: 'Полководцы',
		image: 'https://avatars.dzeninfra.ru/get-zen_doc/1596193/pub_64de6012e4ad755a460a6375_64de60af8d937001cb445d0d/scale_1200',
	},
	{
		label: 'Карты',
		image: '',
	},
	{
		label: 'Оружие Победы',
		image: '',
	},
	{
		label: 'Галерея Войны',
		image: '',
	},
];

export const data = reactive({
	leaders: await $fetch('/content/leaders.json'),
	maps: await $fetch('/content/maps.json'),
	techs: await $fetch('/content/techs.json'),
});
