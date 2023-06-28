import produce from 'immer';
import { Reducer } from 'redux';
import { IWeatherState } from '../../types';
import WEATHER_ACTIONS from '../actionTypes/weather';

const initialState: IWeatherState = {
  cities: [],
  isCitiesLoading: false,
  cityDetails: {
    latitude: 0,
    longitude: 0,
    hourly: {
      temperature_2m: [],
      time: []
    },
    hourly_units: {
      time: '',
      temperature_2m: ''
    }
  },
  isCityDetailsLoading: false
};

const WeatherReducer: Reducer<IWeatherState> = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case WEATHER_ACTIONS.INIT_CITIES:
      draft.isCitiesLoading = true;
      break;
    case WEATHER_ACTIONS.INIT_CITIES_SUCCESS:
      draft.cities = action.cities;
      draft.isCitiesLoading = false;

      break;
    case WEATHER_ACTIONS.INIT_CITIES_FAILED:
      draft.isCitiesLoading = false;
      break;
    case WEATHER_ACTIONS.INIT_CITY_DETAILS:
      draft.isCityDetailsLoading = true;
      break;
    case WEATHER_ACTIONS.INIT_CITY_DETAILS_SUCCESS:
      draft.cityDetails = action.cityDetails;
      draft.isCityDetailsLoading = false;
      break;

    case WEATHER_ACTIONS.INIT_CITY_DETAILS_FAILED:
      draft.isCityDetailsLoading = false;
      break;
    default:
      return state;
  }
});
export default WeatherReducer;