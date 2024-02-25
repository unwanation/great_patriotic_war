<script setup>
defineProps({
	mapName: String,
	map: String,
});
</script>

<template>
	<div class="map">
		<div class="map-img" :style="{ backgroundImage: `url(${map})` }" />
		<div class="name">{{ mapName }}</div>
	</div>
</template>

<style scoped>
.map {
	background-color: var(--alt);
	border-radius: 16px;
	width: 15rem;
	transition: transform 0.5s;
	animation: fade-in 0.4s ease-in;
}

.map:hover {
	transform: scale(1.05);
}

.map-img {
	background-size: cover;
	border-radius: 16px 16px 0 0;
	height: 15rem;
	width: 15rem;
}

.name {
	font-weight: bold;
	font-size: 1.2rem;
	padding: 1rem;
}

@keyframes fade-in {
	0% {
		opacity: 0;
		transform: translateX(1rem);
	}
	100% {
		opacity: 1;
		transform: translateX(0);
	}
}
</style>
