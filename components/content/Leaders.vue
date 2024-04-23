<script setup lang="ts">
defineProps<{
	source: Array;
}>();
</script>

<template>
	<div class="leaders">
		<Leader
			v-for="(leader, i) in source"
			:key="i"
			:leader="{ ...leader, idx: i }"
		/>
	</div>
</template>

<style lang="scss">
.leaders {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
}
</style>
