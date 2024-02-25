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
		<div class="leaders">
			<Leader
				@click="showModal(leader)"
				v-for="(leader, i) in leaders"
				:key="i"
				:leader-name="leader.name"
				:date="leader.date"
				:portrait="leader.portrait"
			/>
		</div>
	</div>
	<LeaderModal @click="hideModal" v-show="modal" :content="modal" />
</template>

<style scoped>
.container {
	display: flex;
	gap: 1.3rem;
}

.leaders {
	width: 100%;
	display: flex;
	flex-flow: wrap;
	gap: 2rem;
}
</style>
