<script setup lang="ts"></script>

<template>
	<div class="leaders">
		<Leader
			v-for="(leader, i) in data.leaders"
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
