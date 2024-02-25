<script setup>
const year = new Date().getFullYear() - 1945;
</script>

<template>
	<div class="logo">
		ВОВ<span class="year">{{ year }}</span>
	</div>
</template>

<style scoped>
.logo {
	font-size: 2rem;
	font-weight: 1000;
	color: var(--alt);
	background-color: var(--accent);
	padding: 1.25rem 1.5rem 1.5rem 1.5rem;
	position: relative;
	top: 0.5rem;
	transition: text-shadow 0.5s;
}

.logo:hover {
	text-shadow: 0 0 50px rgba(255, 255, 255, 0.5);
}

.year {
	color: var(--alt);
	font-size: 1.5rem;
	vertical-align: super;
}
</style>
