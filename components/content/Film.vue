<script setup lang="ts">
interface Film {
	name: string;
	author: string;
	producer: string;
	remark: string;
	year: string;
	img: string;
}

defineProps<{
	film: Film;
}>();
</script>

<template>
	<div class="film">
		<div class="img" :style="`background-image: url('${film.img}');`"></div>
		<div class="content">
			<h3 class="name">{{ film.name }}</h3>
			<ul class="info">
				<li>автор плаката - {{ film.author }};</li>
				<li>режиссёр - {{ film.producer }};</li>
				<li>{{ film.remark }};</li>
				<li>{{ film.year }} год.</li>
			</ul>
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

.film {
	background-color: var(--alt);
	border-radius: 12px;
	height: fit-content;
	animation: fade-up 0.7s ease;

	.img {
		background-position-x: center;
		background-position-y: top;
		background-repeat: no-repeat;
		background-size: contain;
		border-radius: 12px;
		width: 100%;
		min-height: 20rem;
		height: 50%;
	}
	.content {
		padding: 2rem;
		.info {
			margin-left: -1rem;
		}
	}
}
</style>
