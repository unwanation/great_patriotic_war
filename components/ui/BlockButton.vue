<script setup lang="ts">
interface Block {
	label: String;
	image?: String;
}

defineProps<{
	block: Block;
}>();
</script>

<template>
	<button
		:class="{ 'block-button': true, alt: !block.image }"
		:style="block.image && `background: var(--accent) url(${block.image});`"
	>
		{{ block.label }}
	</button>
</template>

<style lang="scss">
.block-button {
	font-family: 'Bebas Neue', sans-serif;
	font-weight: bold;
	font-size: 4rem;
	text-align: end;
	vertical-align: bottom;
	width: 100%;
	height: 100%;
	padding-top: 50%;
	padding-right: 2%;
	line-height: 80%;
	color: var(--accented);
	background-repeat: no-repeat;
	background-size: cover;
	background-blend-mode: multiply;
	background-position: center !important;
	background-repeat: no-repeat !important;
	background-size: cover !important;
	filter: grayscale(0.9);
	border: none;
	border-radius: 16px;
	transition: all 0.5s ease-in-out;

	&:hover {
		cursor: pointer;
	}

	&:focus {
		outline: none;
	}
	&:hover,
	&:focus {
		filter: none;
	}
}

.block-button.alt {
	background-color: var(--accented);
	color: var(--accent);

	&:nth-child(odd) {
		background-color: var(--accent);
		color: var(--accented);
	}
}
</style>
