<script setup lang="ts"></script>

<template>
	<div class="links">
		<a
			v-for="(link, i) in data.links"
			:key="i"
			:href="link.link"
			target="_blank"
			class="link"
			>{{ link.name }}</a
		>
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

.link {
	display: block;
	margin-bottom: 1rem;
	color: inherit;
	text-decoration: underline;
	text-decoration-thickness: 2px;
	text-decoration-color: var(--accent);
	text-decoration-skip-ink: none;
	background-color: var(--alt);
	padding: 1rem;
	border-radius: 16px;
	animation: fade-up 0.7s ease;
}
</style>
