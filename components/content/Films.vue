<script setup lang="ts"></script>

<template>
	<div class="films">
		<Film v-for="(film, i) in data.films" :key="i" :film="film" />
	</div>
</template>

<style lang="scss">
.films {
	display: flex;
	flex-direction: row;
	gap: 1.5rem;
}
</style>
