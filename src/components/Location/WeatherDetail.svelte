<script>
  import { Card, CardBody } from "sveltestrap/src";
  import { selectedWeather } from '../../routes/locations/_stores.js';
</script>

<style>
  :global(.weather-detail) {
    color: white;
    background: #6c757d;
    padding: 1em;
  }

  .weather-wrapper {
    text-align: center;
  }

  .weather-image {
    width: 50px;
    height: 50px;
    text-align: center;
  }

  .weather-detail-left {
    text-align: right;
  }

  h6 {
    text-align: center;
  }

  p {
    font-size: 12px;
    margin-bottom: 5px;
  }
</style>

<Card class="weather-detail">
  <h6>
    {$selectedWeather.applicable_date}
  </h6>
  <div class="weather-wrapper">
    <img
      class="weather-image"
      src={`https://www.metaweather.com/static/img/weather/${$selectedWeather.weather_state_abbr}.svg`}
      alt="weather"
    >
  </div>
  <div class="mt-4">
    <div class="row">
      <div class="col-6">
        <p class="weather-detail-left">Max: {$selectedWeather.max_temp.toFixed(2)}°C</p>
        <p class="weather-detail-left">Min: {$selectedWeather.min_temp.toFixed(2)}°C</p>
        <p class="weather-detail-left">Humidity: {$selectedWeather.humidity}</p>
      </div>

      <div class="col-6">
        <p>Visibility: {$selectedWeather.visibility.toFixed(2)}</p>
        <p>Confidence: {$selectedWeather.predictability}%</p>
        <p>Weather State: {$selectedWeather.weather_state_name}</p>
      </div>
    </div>
  </div>
</Card>