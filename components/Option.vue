<script setup>
defineProps({
	label: String,
	idx: Number,
	active: Boolean,
	icon: String,
});
</script>

<template>
	<div :class="{ option: true, active: active }">
		<span class="icon">
			<Icon :name="icon" />
		</span>

		{{ label }}
	</div>
</template>

<style scoped>
.icon {
	font-size: 1.5rem;
	margin-right: 0.1rem;
}

.option {
	font-size: 1.2rem;
	font-weight: 600;
	padding: 0.75rem;
	margin-bottom: 0.75rem;
	border-radius: 12px;
	transition: all 0.3s ease-in-out;
}

.option:hover {
	background-color: var(--bg);
}

.option.active {
	background-color: var(--accented);
}
</style>
