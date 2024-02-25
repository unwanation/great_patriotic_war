<script setup></script>

<template>
	<aside class="aside">
		<Logo />
		<Navbar
			:items="[
				{
					label: 'Полководцы',
					icon: 'material-symbols:military-tech-rounded',
				},
				{
					label: 'Карты',
					icon: 'material-symbols:map-rounded',
				},
				{
					label: 'Оружие Победы',
					icon: 'mingcute:tank-fill',
				},
			]"
		/>
	</aside>
</template>

<style scoped>
.aside {
	background-color: var(--accent);
	position: fixed;
	width: 22%;
	height: 100vh;
}
</style>
