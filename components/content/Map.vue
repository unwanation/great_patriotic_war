<script setup lang="ts">
interface Map {
	idx: number;
	name: string;
	map: string;
}

defineProps<{
	map: Map;
}>();
</script>

<template>
	<div class="map" :id="`map-${map.idx}`">
		<div class="img" :style="`background-image: url('${map.map}');`"></div>
		<div class="name">{{ map.name }}</div>
	</div>
</template>

<style lang="scss">
.map {
	background-color: var(--alt);
	border-radius: 16px;
	width: 22%;
	height: 20rem;
	transition: transform 0.5s;
	animation: fade-in 0.4s ease-in;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	&:hover {
		transform: scale(1.05);
	}

	.img {
		display: block;
		width: 100%;
		height: 100%;
		background-repeat: no-repeat;
		background-size: cover;
		border-radius: 16px 16px 0 0;
	}

	.name {
		font-weight: bold;
		font-size: 1.2rem;
		padding: 1rem;
	}
}
</style>
