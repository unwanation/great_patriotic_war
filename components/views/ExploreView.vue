<script setup lang="ts">
const getContent = (data: any) => {
	if (store.currentTab() == 1) return data.leaders;
	if (store.currentTab() == 2) return data.maps;
	if (store.currentTab() == 3) return data.techs;
};

const prefix = computed(() => {
	if (store.currentTab() == 1) return 'leader';
	if (store.currentTab() == 2) return 'map';
	if (store.currentTab() == 3) return 'tech';
	else return '';
});
</script>

<template>
	<Sidebar :content="getContent(data)" :prefix="prefix" />
	<div class="container">
		<Leaders v-if="store.currentTab() == 1" />
		<Maps v-else-if="store.currentTab() == 2" />
		<Techs v-else-if="store.currentTab() == 3" />
		<Gallery v-else />
	</div>
</template>

<style lang="scss">
.container {
	margin-left: 20%;
	padding: 2%;
}
</style>
