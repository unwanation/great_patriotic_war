<script setup lang="ts"></script>

<template>
	<div class="terms">
		<div v-for="(term, i) in data.terms" :key="i" class="term">
			<h1>{{ term.name }}</h1>
			<p>{{ term.desc }}</p>
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

.term {
	display: block;
	margin-bottom: 1rem;
	color: inherit;
	background-color: var(--alt);
	padding: 1rem;
	border-radius: 16px;
	animation: fade-up 0.7s ease;
}
</style>
