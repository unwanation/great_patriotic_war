<template>
	<Title>Великая Отечественная Война</Title>
	<main>
		<MainView v-if="!store.currentTab()" />
		<ExploreView v-else />
	</main>
</template>
