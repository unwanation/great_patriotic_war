<script setup>
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
	<div class="container">
		<div class="maps">
			<Map
				@click="showModal(map)"
				v-for="(map, i) in maps"
				:key="i"
				:map-name="map.name"
				:map="map.map"
			/>
		</div>
	</div>
	<MapModal @click="hideModal" v-show="modal" :content="modal" />
</template>

<style scoped>
.container {
	display: flex;
	gap: 1.3rem;
}

.maps {
	width: 100%;
	display: flex;
	flex-flow: wrap;
	gap: 2rem;
}
</style>
