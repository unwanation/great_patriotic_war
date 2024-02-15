<script setup></script>

<template>
	<div class="event">
		<div class="photo"></div>
		<div class="content">
			<span class="location">
				<MdiIcon
					style="display: inline"
					viewBox="0 0 24 24"
					icon="mdiMapMarker"
				/>
				Великобритания
			</span>
			<h2>Битва за Британию</h2>
			<span class="date">22.07.2022</span>
		</div>
	</div>
</template>

<style scoped>
.photo {
	border-radius: 20px 20px 0 0;
	height: 10rem;
	background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Battle_of_britain_air_observer.jpg/1024px-Battle_of_britain_air_observer.jpg');
}

.location {
	font-weight: 600;
	color: var(--accent);
}

.content {
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: 1.5rem;
	padding-bottom: 0;
	transition: all 0.2s;
}

.event {
	display: flex;
	justify-content: center;
	flex-direction: column;
	background-color: var(--alt);
	border-radius: 20px;
	width: 100%;
}

.event h2 {
	font-size: 2rem;
}

.event:hover .content {
	padding-bottom: 1.5rem;
}

.event:hover .date {
	font-size: 1.25rem;
	opacity: 100%;
}

.date {
	font-size: 1.25rem;
	font-weight: 600;
	color: var(--secondary);
	opacity: 0;
	transition: all 0.2s;
}
</style>
