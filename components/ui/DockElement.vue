<script setup lang="ts">
const props = defineProps<{
	tab: number;
	label: string;
	subtabs: string[];
	icon: string;
}>();

const onClick = () => {
	if (store.currentTab() != props.tab) store.setCurrentTab(props.tab);
	else if (props.subtabs.length > 0)
		if (store.currentSubtab() < props.subtabs.length - 1)
			store.setCurrentSubtab(store.currentSubtab() + 1);
		else store.setCurrentSubtab(0);
};
</script>

<template>
	<button
		@click="onClick"
		:disabled="store.currentTab() == tab && subtabs.length == 0"
		:class="{
			'dock-element': true,
			'dock-element_active': tab == store.currentTab(),
		}"
	>
		<Icon :name="'material-symbols:' + icon" />
		<span class="label">{{ label }}</span>
	</button>
</template>

<style lang="scss">
.dock-element {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: 1.5rem;
	width: 100%;
	height: 100%;
	background: none;
	border: none;
	color: var(--accented);
	opacity: 0.5;
	transition: opacity 0.5s;

	&_active {
		opacity: 1;
	}

	.label {
		font-size: 30%;
		font-weight: bold;
	}
}
</style>
