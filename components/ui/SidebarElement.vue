<script setup lang="ts">
defineProps<{
	label: string;
}>();
</script>

<template>
	<a class="sidebar-element">
		{{ label }}
	</a>
</template>

<style lang="scss">
.sidebar-element {
	display: block;
	padding: 0.5rem 0;
	font-weight: 500;
	transition: all 0.5s;

	&:active,
	&:focus,
	&:hover {
		color: var(--accent);
		outline: none;
	}
}
</style>
