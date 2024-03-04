<script setup lang="ts">
defineProps<{
	content: { name: string }[];
	prefix: string;
}>();
</script>

<template>
	<aside class="sidebar">
		<a class="return" href="#" @click="store.setCurrentTab(0)">
			<Icon name="material-symbols:arrow-back-rounded" />
			вернуться
		</a>
		<h1 class="title">{{ tabs[store.currentTab() - 1].label }}</h1>
		<div class="elements">
			<SidebarElement
				v-for="(e, i) in content"
				:href="`#${prefix}-${i}`"
				:label="e.name"
			/>
		</div>
	</aside>
</template>

<style lang="scss">
@keyframes enter {
	0% {
		opacity: 0;
		transform: translateX(-2rem);
	}
	100% {
		opacity: 1;
		transform: translateX(0);
	}
}

.sidebar {
	position: fixed;
	width: 20vw;
	height: 100%;
	background-color: var(--alt);
	padding: 2rem 1.5rem;
	animation: enter 0.5s;

	.return {
		color: var(--secondary);
		transition: all 0.5s;

		&:hover {
			filter: brightness(1.4);
			cursor: pointer;
		}
		&:focus {
			outline: none;
			filter: brightness(1.4);
		}
	}
	.title {
		margin: 0.5rem 0;
	}
}
</style>
