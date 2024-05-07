<script setup></script>

<template>
	<div class="dock">
		<DockElement
			v-for="(tab, i) in tabs"
			:key="i"
			:tab="i + 1"
			:label="tab.label"
			:subtabs="tab.subtabs"
			:icon="tab.icon"
		/>
	</div>
</template>

<style scoped>
.dock {
	position: fixed;
	bottom: -2px;
	width: 100%;
	background-color: var(--accent);
	background-color: hsla(340, 75%, 49%, 0.35);
	border-radius: 12px 12px 0 0;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	padding: 2% 4%;
	z-index: 999;
	animation: fade-up 0.3s ease;
	backdrop-filter: blur(20px);
}
</style>
