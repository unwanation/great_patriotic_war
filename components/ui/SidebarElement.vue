<script setup lang="ts">
defineProps<{
	tab: number;
	label: string;
	subtabs: string[];
}>();
</script>

<template>
	<div class="container">
		<button
			@click="store.setCurrentTab(tab)"
			:disabled="store.currentTab() == tab"
			:class="{
				'sidebar-element': true,
				'sidebar-element_active': tab == store.currentTab(),
			}"
		>
			{{ label }}
		</button>

		<div v-show="store.currentTab() == tab" class="subelements">
			<button
				v-for="(label, i) in subtabs"
				@click="store.setCurrentSubtab(i)"
				:disabled="store.currentSubtab() == i"
				:class="{
					'sidebar-subelement': true,
					'sidebar-subelement_active': i == store.currentSubtab(),
				}"
			>
				{{ label }}
			</button>
		</div>
	</div>
</template>

<style lang="scss">
.sidebar-element {
	display: block;
	width: 100%;
	padding: 0.5rem;
	margin: 0.5rem 0;
	border-radius: 12px;
	font-weight: 500;
	text-align: left;
	background: none;
	border: none;
	color: var(--text);
	transition: all 0.5s;

	&:active,
	&:focus,
	&:hover {
		color: var(--accent);
		cursor: pointer;
		outline: none;
	}

	&_active {
		background-color: var(--accent);
		&:hover {
			color: var(--text);
		}
	}
}

.subelements {
	margin-left: 1.5rem;
}

.sidebar-subelement {
	display: block;
	width: 100%;
	padding: 0.5rem;
	margin: 0.5rem 0;
	border-radius: 12px;
	font-weight: 500;
	text-align: left;
	background: none;
	border: none;
	color: var(--text);
	transition: all 0.5s;

	&:active,
	&:focus,
	&:hover {
		color: var(--accent);
		cursor: pointer;
		outline: none;
	}

	&_active {
		color: var(--accent);
	}
}

@media (prefers-color-scheme: light) {
	.sidebar-element {
		&_active {
			color: var(--bg);
			&:active,
			&:focus,
			&:hover {
				color: var(--bg);
			}
		}
	}
}
</style>
