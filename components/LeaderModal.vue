<script setup>
defineProps(['content']);
</script>

<template>
	<div class="background">
		<div class="modal">
			<div class="content">
				<span class="name">{{ content?.name }}</span>
				<span class="date">{{ content?.date }}</span>
			</div>
			<div
				class="portrait"
				:style="`background-image: linear-gradient(to left, transparent, var(--alt)), url('${content?.portrait}');`"
			/>
		</div>
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
	display: flex;
	width: 50%;
	height: 80%;
	border-radius: 12px;
	box-shadow: 0 0 14px rgba(0, 0, 0, 0.5);
	background-color: var(--alt);
	z-index: 999;
	animation: fade-in 0.5s ease-out;
}

.content {
	padding: 2rem;
	width: 70%;
}

.name {
	display: block;
	font-size: 1.5rem;
	font-weight: bold;
}

.portrait {
	width: 100%;
	height: 100%;
	opacity: 0.4;
	border-radius: 12px;
	background-size: cover;
	background-repeat: no-repeat;
	background-clip: padding-box;
}
</style>
