<script setup lang="ts"></script>

<template>
	<div class="techs">
		<Tech
			v-for="(test, i) in data.tests"
			:key="i"
			:tech="{ name: test.name, desc: '', photo: '', idx: i }"
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
