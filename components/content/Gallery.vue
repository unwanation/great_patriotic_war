<script setup>
const currentSlide = ref(1);

const moveToPreviousSlide = () => {
	if (currentSlide.value == 1) {
		currentSlide.value = 29;
		return;
	}
	currentSlide.value--;
};

const moveToNextSlide = () => {
	if (currentSlide.value == 29) {
		currentSlide.value = 1;
		return;
	}
	currentSlide.value++;
};
</script>

<template>
	<div class="gallery">
		<button class="button" @click="moveToPreviousSlide">
			<Icon name="material-symbols:arrow-back-rounded" />
		</button>
		<img :src="`/gallery/${currentSlide}.jpg`" alt="" class="photo" />
		<button class="button" @click="moveToNextSlide">
			<Icon name="material-symbols:arrow-forward-rounded" />
		</button>
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

.gallery {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 90vh;
	animation: fade-up 0.7s ease;

	.photo {
		display: block;
		width: 75%;
		height: 90%;
		object-fit: cover;
		border-radius: 18px;
		z-index: 1;
		transition: all 0.5s;
		&:hover {
			transform: scale(1.05);
		}
	}

	.button {
		background-color: var(--alt);
		color: var(--text);
		padding-bottom: 0.5rem;
		margin: 1.75rem;
		font-size: 2.5rem;
		border: none;
		border-radius: 17px;
		cursor: pointer;
		transition: all 0.5s;
		&:hover {
			transform: scale(1.1);
			color: var(--accent);
		}
	}
}

@media screen and (max-width: 800px) {
	.gallery {
		.photo {
			width: 80%;
		}
	}
	.button {
		opacity: 0;
	}
}
</style>
