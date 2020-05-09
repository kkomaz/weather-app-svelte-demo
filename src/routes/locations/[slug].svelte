<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`locations/${params.slug}.json`);
    const data = await res.json();

    return { location: data };
  }
</script>

<script>
  import { onMount } from 'svelte';
  import { selectedWeather } from './_stores';
  import WeatherCard from '../../components/Location/WeatherCard.svelte';
  import WeatherDetail from '../../components/Location/WeatherDetail.svelte';

  export let location;

  selectedWeather.update(() => {
    return location.consolidated_weather[0];
  });
</script>

<div>
  <h1>{location.title}</h1>

  <div class="row mt-2">
    {#each location.consolidated_weather as weather}
      <div class="col-2">
        <WeatherCard weather={weather} /> 
      </div>
    {/each}
  </div>
  <div class="col-12 mt-2">
    <WeatherDetail />
  </div>
</div>