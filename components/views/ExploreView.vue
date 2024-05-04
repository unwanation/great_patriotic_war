<script setup lang="ts"></script>

<template>
	<Dock v-if="store.mobile()" />
	<Sidebar v-else />
	<div class="container">
		<Leaders
			:source="data.leaders"
			v-if="store.currentTab() == 1 && store.currentSubtab() == 0"
		/>
		<Leaders
			:source="data.heroes"
			v-if="store.currentTab() == 1 && store.currentSubtab() == 1"
		/>
		<Leaders
			:source="data.partisans"
			v-if="store.currentTab() == 1 && store.currentSubtab() == 2"
		/>
		<Maps v-else-if="store.currentTab() == 2" />
		<Techs v-else-if="store.currentTab() == 3" />
		<Gallery v-else-if="store.currentTab() == 4" />
		<Films
			v-else-if="store.currentTab() == 5 && store.currentSubtab() == 0"
		/>
		<Terms
			v-else-if="store.currentTab() == 5 && store.currentSubtab() == 1"
		/>
		<Links
			v-else-if="store.currentTab() == 5 && store.currentSubtab() == 2"
		/>
	</div>
</template>

<style lang="scss">
.container {
	margin-left: 20%;
	padding: 2%;
}

@media screen and (max-width: 1100px) {
	.container {
		margin: auto;
		margin-bottom: 10%;
	}
}
</style>
