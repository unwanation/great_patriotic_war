<script setup></script>

<template>
	<Heading>События</Heading>
	<!-- <EventModal /> -->
	<div class="container">
		<Sidebar>
			<Option active>Западный фронт</Option>
			<Option>Североафриканский фронт</Option>
			<Option>Западный фронт</Option>
		</Sidebar>
		<div class="events">
			<Event />
			<Event />
		</div>
	</div>
</template>

<style scoped>
.container {
	display: flex;
	gap: 1.3rem;
}

.events {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
}
</style>
