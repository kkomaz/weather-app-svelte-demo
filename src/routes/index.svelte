<script context="module">
	export function preload({ params, query }) {
		return this.fetch('./index.json').then(r => r.json()).then(locations => {
			return { locations };
		})
	}
</script>

<script>
	import { Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText } from "sveltestrap/src";
	import { goto } from '@sapper/app';

	async function navToLocation(selected) {
		await goto(`/locations/${selected.woeid}`);
	}
	
	export let locations;
</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<style>
	:global(.card) {
		cursor: pointer;
	}
</style>

<div>
	<h1>Welcome to the Weather App</h1>

	<div class="row">
		{#each locations as location}
			<div class="col-4 mb-2">
				<Card on:click={() => navToLocation(location)}>
					<CardHeader>
						<CardTitle>
							{location.title}
						</CardTitle>
					</CardHeader>
					<CardBody>
						<CardSubtitle>
							woeid - {location.woeid}
						</CardSubtitle>
						<CardText>
							Location Type - {location.location_type}
						</CardText>
					</CardBody>
				</Card>
			</div>
		{/each}
	</div>
</div>
