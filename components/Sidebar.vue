<script setup></script>

<template>
	<aside class="sidebar">
		<slot></slot>
	</aside>
</template>

<style scoped>
.sidebar {
	background-color: var(--alt);
	border-radius: 20px;
	padding: 0.5rem;
	width: 28%;
	height: fit-content;
}
</style>
