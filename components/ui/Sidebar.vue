<script setup lang="ts"></script>

<template>
	<aside class="sidebar">
		<a class="return" href="#" @click="store.setCurrentTab(0)">
			<Icon name="material-symbols:arrow-back-rounded" />
			вернуться
		</a>
		<div class="elements">
			<SidebarElement :tab="1" label="Полководцы" />
			<SidebarElement :tab="2" label="Карты" />
			<SidebarElement :tab="3" label="Оружие победы" />
			<SidebarElement :tab="4" label="Галерея войны" />
		</div>
	</aside>
</template>

<style lang="scss">
@keyframes enter {
	0% {
		opacity: 0;
		transform: translateX(-2rem);
	}
	100% {
		opacity: 1;
		transform: translateX(0);
	}
}

.sidebar {
	position: fixed;
	width: 20vw;
	height: 100%;
	background-color: var(--alt);
	padding: 2rem 1.5rem;
	animation: enter 0.5s;

	.return {
		color: var(--secondary);
		transition: all 0.5s;
		&:hover {
			filter: brightness(1.4);
			cursor: pointer;
		}
		&:focus {
			outline: none;
			filter: brightness(1.4);
		}
	}

	.elements {
		margin-top: 1.5rem;
	}
}
</style>
