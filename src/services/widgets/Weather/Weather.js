import { Component } from '../../../core/Component';
import { ApiService } from '../../ApiService';

class Weather extends Component {
  constructor() {
    super();
    this.api = new ApiService('https://api.open-meteo.com/v1');
    this.state = {
      isLoading: false,
      weather: {},
    };
  }

  setIsLoading(isLoading) {
    this.setState((state) => {
      return {
        ...state,
        isLoading,
      };
    });
  }

  getWeather() {
    this.setIsLoading(true);
    this.api
      .get('/forecast', {
        latitude: '52.52',
        longitude: '13.41',
        current_weather: 'true',
        hourly: 'temperature_2m,relativehumidity_2m,windspeed_10m',
      })
      .then((data) => {
        this.setState((state) => {
          return {
            ...state,
            isLoading: false,
            weather: data,
          };
        });
      });
  }
  componentDidMount() {
    this.getWeather();
  }

  render() {
    const { weather, isLoading } = this.state;
    console.log(weather);

    return isLoading
      ? `
        <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>`
      : `
      <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Температура ${weather?.current_weather?.temperature}</h5>
    <p class="card-text">Время ${weather?.current_weather?.time}</p>
    <a href="#" class="btn btn-primary"></a>
  </div>
</div>
      `;
  }
}

customElements.define('it-weather', Weather);
