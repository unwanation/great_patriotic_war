<script setup>
defineProps(['content']);
</script>

<template>
	<div class="background">
		<img :src="content?.map" alt="" class="modal" />
	</div>
</template>

<style scoped>
@keyframes blur-in {
	0% {
		backdrop-filter: blur(0);
	}
	100% {
		backdrop-filter: blur(10px);
	}
}

@keyframes fade-in {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

.background {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 998;
	backdrop-filter: blur(10px);
	animation: blur-in 0.5s ease-out;
}

.modal {
	max-height: 98%;
	border-radius: 12px;
	box-shadow: 0 0 14px rgba(0, 0, 0, 0.5);
	background-color: var(--alt);
	z-index: 999;
	animation: fade-in 0.5s ease-out;
}
</style>
