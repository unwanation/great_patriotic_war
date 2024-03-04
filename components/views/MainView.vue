<template>
	<div class="blocks">
		<BlockButton
			v-for="(tab, i) in tabs"
			:key="i"
			@click="store.setCurrentTab(i + 1)"
			:block="tab"
			:style="`animation: fade-in ${0.3 * (i + 1)}s ease;`"
		/>
	</div>
</template>

<style lang="scss">
@keyframes fade-in {
	0% {
		opacity: 0;
		transform: translateX(-2rem);
	}
	100% {
		opacity: 1;
		transform: none;
	}
}

.blocks {
	width: 100%;
	height: 100vh;
	display: flex;
	flex-wrap: wrap;
}
</style>
