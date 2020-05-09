<script>
  import { Button } from 'sveltestrap/src';
  import { selectedWeather } from '../../routes/locations/_stores.js';

  function onDateClick(weather) {
    selectedWeather.set(weather)
  }
  export let weather;
</script>

<style>
  .weather-card {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .weather-image {
    width: 50px;
    height: 50px;
  }

  .min-max-weather {
    font-size: 12px;
    margin-bottom: 5px;
  }
</style>

<div class="weather-card">
  <Button size="sm" outline="secondary" class="mb-4" on:click={() => onDateClick(weather)}>
    {weather.applicable_date}
  </Button>

  <div class="mb-3">
    <img
      class="weather-image"
      src={`https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`}
      alt="weather"
    >
  </div>

  <h6>{weather.weather_state_name}</h6>

  <div>
    <p class="min-max-weather">Max: {weather.max_temp.toFixed(2)}°C</p>
    <p class="min-max-weather">Min: {weather.min_temp.toFixed(2)}°C</p>
  </div>
</div>