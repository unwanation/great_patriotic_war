<script setup lang="ts"></script>

<template>
	<Sidebar />
	<div class="container">
		<Leaders v-if="store.currentTab() == 1" />
		<Maps v-else-if="store.currentTab() == 2" />
		<Techs v-else-if="store.currentTab() == 3" />
		<Gallery v-else-if="store.currentTab() == 4" />
	</div>
</template>

<style lang="scss">
.container {
	margin-left: 20%;
	padding: 2%;
}
</style>
