<script setup>
defineProps({
	items: Array[Object],
});

const handleClick = event => {
	if (event.target.hasAttribute('data-idx')) {
		const idx = event.target.getAttribute('data-idx');
		store.setCurrentTab(idx);
	}
};
</script>

<template>
	<nav @click="handleClick" class="nav">
		<Option
			v-for="(item, idx) in items"
			:key="idx"
			:data-idx="idx"
			:label="item.label"
			:icon="item.icon"
			:active="idx == store.currentTab()"
		/>
	</nav>
</template>

<style scoped>
.nav {
	background-color: var(--alt);
	padding: 1rem 1.2rem;
	height: 100%;
	border-radius: 12px 12px 0 0;
	position: relative;
	z-index: 2;
}

@media screen and (max-width: 1210px) {
	.nav {
		display: flex;
	}
}
</style>
