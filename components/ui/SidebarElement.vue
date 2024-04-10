<script setup lang="ts">
defineProps<{
	tab: number;
	label: string;
}>();
</script>

<template>
	<button
		@click="store.setCurrentTab(tab)"
		:disabled="store.currentTab() == tab"
		:class="{
			'sidebar-element': true,
			'sidebar-element_active': tab == store.currentTab(),
		}"
	>
		{{ label }}
	</button>
</template>

<style lang="scss">
.sidebar-element {
	display: block;
	width: 100%;
	padding: 0.5rem;
	margin: 0.5rem 0;
	border-radius: 12px;
	font-weight: 500;
	text-align: left;
	background: none;
	border: none;
	color: var(--text);
	transition: all 0.5s;

	&:active,
	&:focus,
	&:hover {
		color: var(--accent);
		cursor: pointer;
		outline: none;
	}

	&_active {
		background-color: var(--accent);
		&:hover {
			color: var(--text);
		}
	}
}

@media (prefers-color-scheme: light) {
	.sidebar-element {
		&_active {
			color: var(--bg);
			&:active,
			&:focus,
			&:hover {
				color: var(--bg);
			}
		}
	}
}
</style>
