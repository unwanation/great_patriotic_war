<script setup>
defineProps({
	leaderName: String,
	date: String,
	portrait: String,
});
</script>

<template>
	<div class="leader">
		<div
			class="portrait"
			:style="{ backgroundImage: `url(${portrait})` }"
		/>
		<div class="content">
			<span class="name">{{ leaderName }}</span>
			<span class="date">{{ date }}</span>
		</div>
	</div>
</template>

<style scoped>
.leader {
	background-color: var(--alt);
	border-radius: 16px;
	width: 11rem;
	transition: transform 0.5s;
	animation: fade-in 0.4s ease-in;
}

.leader:hover {
	transform: scale(1.05);
}

.portrait {
	background-size: cover;
	border-radius: 16px 16px 0 0;
	height: 12rem;
}

.content {
	display: flex;
	flex-direction: column;
	padding: 1.5rem 1rem;
	padding-top: 1rem;
	width: fit-content;
}

.name {
	font-weight: bold;
	font-size: 1.2rem;
}

.date {
	font-weight: bold;
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
