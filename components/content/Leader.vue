<script setup lang="ts">
interface Leader {
	idx: number;
	name: string;
	desc: string;
	date?: string;
	portrait?: string;
}

defineProps<{
	leader: Leader;
}>();
</script>

<template>
	<div class="leader">
		<img
			class="portrait"
			:src="leader.portrait"
		></img>
		<div class="content">
			<h1 class="name">{{ leader.name }}</h1>
			<span class="date">{{ leader.date }}</span>
			<p class="desc">{{ leader.desc }}</p>
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

.leader {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	background-color: var(--alt);
	background-position-x: left;
	background-repeat: no-repeat;
	background-size: 25%;
	background-size: 25% auto;
	background-position-y: center;
	border-radius: 16px;
	padding: 1.5rem;
	animation: fade-up 0.7s ease;

	.portrait {
		height: inherit;
		max-width: 20%;
		border-radius: 16px;
		margin-right: 1.5rem;
	}
	.content {
		.date {
			font-weight: 500;
		}
	}
}

@media screen and (max-width: 740px) {
	.leader {
		flex-direction: column;
		justify-content: center;


		.portrait {
			max-width: 45%;
			margin-bottom: 1rem;
		}
	}
}
</style>
