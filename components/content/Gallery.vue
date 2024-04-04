<script setup>
const currentSlide = ref(1);
</script>

<template>
	<div class="gallery">
		<button
			v-show="currentSlide > 1"
			class="button"
			@click="currentSlide--"
		>
			<Icon name="material-symbols:arrow-back-rounded" />
		</button>
		<img :src="`/gallery/${currentSlide}.jpg`" alt="" class="photo" />
		<button
			v-show="currentSlide < 26"
			class="button"
			@click="currentSlide++"
		>
			<Icon name="material-symbols:arrow-forward-rounded" />
		</button>
	</div>
</template>

<style lang="scss">
.gallery {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 90vh;

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
</style>
