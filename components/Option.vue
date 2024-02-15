<script setup>
defineProps({
	active: Boolean,
});
</script>

<template>
	<div :class="'option' + (active ? ' active' : '')">
		<slot></slot>
	</div>
</template>

<style scoped>
.option {
	font-weight: 500;
	padding: 0.5rem;
	border-radius: 12px;
	transition: all 0.2s;
}

.option:hover {
	background-color: var(--bg);
}

.active {
	background-color: var(--accented);
}
</style>
