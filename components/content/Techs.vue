<script setup lang="ts"></script>

<template>
	<div class="techs">
		<Tech
			v-for="(techs, i) in data.techs"
			:key="i"
			:tech="{ ...techs, idx: i }"
		/>
	</div>
</template>

<style lang="scss">
.techs {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
}
</style>
