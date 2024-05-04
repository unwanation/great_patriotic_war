<script setup lang="ts">
interface Tech {
	idx: number;
	name: string;
	desc: string;
	photo: string;
}

defineProps<{
	tech: Tech;
}>();
</script>

<template>
	<div class="tech" :id="`tech-${tech.idx}`">
		<img :src="tech.photo" alt="" class="photo" />
		<div class="content">
			<h1 class="name">{{ tech.name }}</h1>
			<p class="desc">{{ tech.desc }}</p>
		</div>
	</div>
</template>

<style lang="scss">
@keyframes fade-up {
	0% {
		opacity: 0;
		transform: translateY(10rem);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
}

.tech {
	background-color: var(--alt);
	background-position-x: left;
	background-repeat: no-repeat;
	background-size: 25%;
	background-position-y: center;
	border-radius: 12px;
	padding: 2rem;
	animation: fade-up 0.7s ease;

	.photo {
		position: relative;
		top: -2rem;
		margin-bottom: -1.25rem;
		border-radius: 12px;
		box-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
	}
}
</style>
