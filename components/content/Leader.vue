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
	<div
		class="leader"
		:id="`leader-${leader.idx}`"
		:style="`background-image: url('${leader.portrait}');`"
	>
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
	max-height: 90vh;
	background-color: var(--alt);
	background-position-x: left;
	background-repeat: no-repeat;
	background-size: 25%;
	background-position-y: center;
	border-radius: 12px;
	padding: 2rem;
	animation: fade-up 0.7s ease;

	.content {
		margin-left: 25%;
		.date {
			font-weight: 500;
		}
	}
}
</style>
