<script setup lang="js">
const modal = ref(null);

const showModal = m => {
	if (modal.value) return;
	modal.value = m;
};

const hideModal = event => {
	if ((event.target.class = 'background')) modal.value = null;
};
</script>

<template>
	<div class="maps">
		<Map
			@click="showModal(map)"
			v-for="(map, i) in data.maps"
			:key="i"
			:map="{ ...map, idx: i }"
		/>
	</div>
	<MapModal @click="hideModal" v-show="modal" :content="modal" />
</template>

<style lang="scss">
.maps {
	display: flex;
	flex-flow: wrap;
	gap: 1.5rem;
}
</style>
