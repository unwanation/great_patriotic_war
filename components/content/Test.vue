<script setup>
import { data } from '#imports';

const question = ref(0);
const selected = ref(0);

const test = computed(() => {
	return data.tests[0].questions
		.map(value => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);
});
</script>

<template>
	<div class="test">
		<template v-if="question == 0">
			<h1>Тест по Великой Отечественной войне</h1>
			<button
				@click="
					question = 1;
					store.state.correctAnswers = 0;
				"
				class="start-button"
			>
				Пройти
			</button>
		</template>
		<div class="question" v-else-if="question <= test.length">
			<h1>{{ question }} / {{ test.length }}</h1>
			<h2>{{ test[question - 1].question }}</h2>
			<div class="inputs" v-for="(e, i) in test[question - 1].answers">
				<input
					:key="i"
					type="radio"
					name="answer"
					:id="'radio' + i"
					:value="i"
					@click="selected = i"
				/>
				<label :for="'radio' + i">{{ e.answer }}</label>
			</div>
			<button
				@click="
					if (test[question - 1].answers[selected].correct) {
						store.state.correctAnswers++;
					}
					question++;
				"
				class="start-button"
			>
				Продолжить
			</button>
		</div>
		<div class="result" v-else>
			<h1>
				Ваш результат: {{ store.state.correctAnswers }} /
				{{ test.length }} ({{
					Math.round(
						(store.state.correctAnswers / test.length) * 100
					)
				}}%)
			</h1>
			<button
				@click="
					question = 1;
					store.state.correctAnswers = 0;
				"
				class="start-button"
			>
				Пройти ещё раз
			</button>
		</div>
	</div>
</template>

<style lang="scss">
@keyframes fade-up {
	0% {
		opacity: 0;
		transform: translateY(10rem);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
}

.test {
	background-color: var(--alt);
	color: var(--text);
	border-radius: 12px;
	padding: 3%;
	height: 89vh;
	animation: fade-up 0.7s ease;

	.start-button {
		background-color: var(--accented);
		border: none;
		border-radius: 12px;
		padding: 0.5rem 2rem;
		margin-top: 0.5rem;
		transition: all 0.5s;

		&:active,
		&:focus,
		&:hover {
			cursor: pointer;
			outline: none;
		}

		&:hover {
			background-color: var(--accent);
			color: var(--accented);
		}
	}

	.inputs {
		margin: 1.5rem 0;
		input[type='radio'] {
			appearance: none;
			background-color: var(--alt);
			outline: var(--accent) 3px solid;
			border-radius: 50%;
			padding: 0.5rem;
			margin: 0 1rem;
			transition: 0.2s all;

			&:checked {
				background-color: var(--accent);
				outline: none;
			}
		}
	}
}
</style>
