<script setup lang="ts">
defineProps<{
	tab: number;
	label: string;
}>();
</script>

<template>
	<div
		@click="store.setCurrentTab(tab)"
		:class="{
			'sidebar-element': true,
			'sidebar-element_active': tab == store.currentTab(),
		}"
	>
		{{ label }}
	</div>
</template>

<style lang="scss">
.sidebar-element {
	display: block;
	padding: 0.5rem;
	margin: 0.5rem 0;
	border-radius: 12px;
	font-weight: 500;
	transition: all 0.5s;

	&:active,
	&:focus,
	&:hover {
		color: var(--accent);
		outline: none;
	}

	&_active {
		background-color: var(--accent);
		&:hover {
			color: var(--text);
		}
	}
}
</style>
