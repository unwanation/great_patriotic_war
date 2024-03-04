<script setup>
const currentSlide = ref(0);
</script>

<template>
	<div class="gallery">
		<Carousel
			id="gallery"
			:items-to-show="1"
			:wrap-around="false"
			v-model="currentSlide"
		>
			<Slide v-for="slide in 26" :key="slide">
				<div class="carousel__item">
					<img
						:src="`/gallery/(${slide}).jpg`"
						alt=""
						class="photo"
					/>
				</div>
			</Slide>
		</Carousel>

		<Carousel
			id="thumbnails"
			:items-to-show="4"
			:wrap-around="true"
			v-model="currentSlide"
			ref="carousel"
		>
			<Slide v-for="slide in 10" :key="slide">
				<div class="carousel__item" @click="currentSlide = slide - 1">
					<img
						:src="`/gallery/(${slide}).jpg`"
						alt=""
						class="miniphoto"
					/>
				</div>
			</Slide>
		</Carousel>
	</div>
</template>

<style lang="scss">
.gallery {
	max-width: 153vh;
	background-color: black;
}

.photo {
	width: 38vw;
}

.miniphoto {
	width: 80%;
	transition: transform 0.5s;
	&:hover {
		transform: scale(1.1);
	}
}
</style>
