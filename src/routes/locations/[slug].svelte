<!-- <script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`locations/${params.slug}.json`);
    const data = await res.json();

    return { location: data };
  }
</script> -->

<script>
  import { data } from './_data';
  import WeatherCard from '../../components/Location/WeatherCard.svelte';
  let location = data;
  // export let location;
</script>

<div>
  {console.log(location)}
  <h1>{location.title}</h1>

  <div class="row mt-2">
    {#each location.consolidated_weather as weather}
      <div class="col-2">
        <WeatherCard weather={weather} /> 
      </div>
    {/each}
  </div>
</div>