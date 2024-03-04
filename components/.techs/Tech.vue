<script setup>
defineProps({
	tech: Object,
});
</script>

<template>
	<div class="tech">
		<img :src="tech?.photo" alt="" class="photo" />
		<h2>{{ tech.name }}</h2>
		<p>{{ tech.desc }}</p>
	</div>
</template>

<style scoped>
.tech {
	background-color: var(--alt);
	padding: 1rem;
	border-radius: 12px;
	transition: transform 0.5s;
	animation: fade-in 0.4s ease-in;
}
.tech:hover {
	transform: scale(1.01);
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
