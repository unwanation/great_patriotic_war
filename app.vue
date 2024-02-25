<template>
	<div class="container">
		<Sidebar />
		<main class="main">
			<LeadersView v-if="store.currentTab() == 0" />
			<MapsView v-if="store.currentTab() == 1" />
			<TechView v-if="store.currentTab() == 2" />
		</main>
	</div>
</template>

<style>
.container {
	display: flex;
}

.main {
	margin: 3%;
	margin-left: 27%;
}
</style>
