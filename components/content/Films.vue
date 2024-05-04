<script setup lang="ts"></script>

<template>
	<div class="films">
		<Film v-for="(film, i) in data.films" :key="i" :film="film" />
	</div>
</template>

<style lang="scss">
.films {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	gap: 1.5rem;
}
</style>
