<script setup></script>

<template>
	<div class="container">
		<div class="techs">
			<Tech v-for="(tech, i) in techs" :key="i" :tech="tech" />
		</div>
	</div>
</template>

<style scoped>
.container {
	display: flex;
	gap: 1.3rem;
}

.techs {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 3rem;
}


</style>
