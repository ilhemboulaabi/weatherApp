import { Dispatch } from 'redux';
import { fetchCities, fetchCityDetails } from '../../api/weather';
import { ICity, ICityDetails, ISelectedUnites } from '../../types';
import WEATHER_ACTIONS from '../actionTypes/weather';

const initCity = () => ({
  type: WEATHER_ACTIONS.INIT_CITIES
});

const initCitySuccess = (cities: ICity[]) => ({
  type: WEATHER_ACTIONS.INIT_CITIES_SUCCESS,
  cities
});

const initCityFailure = (error: string) => ({
  type: WEATHER_ACTIONS.INIT_CITIES_FAILED,
  error
});

const initCityDetails = () => ({
  type: WEATHER_ACTIONS.INIT_CITY_DETAILS
});

const initCityDetailsSuccess = (cityDetails: ICityDetails) => ({
  type: WEATHER_ACTIONS.INIT_CITY_DETAILS_SUCCESS,
  cityDetails
});

const initCityDetailsFailure = (error: string) => ({
  type: WEATHER_ACTIONS.INIT_CITY_DETAILS_FAILED,
  error
});

export const loadCity = (inputValue: string) => {
  return async (dispatch: Dispatch) => {

    try {
      dispatch(initCity());
      const response = await fetchCities(inputValue);
      dispatch(initCitySuccess(response.results));
    } catch (error) {
      dispatch(initCityFailure(error as string));
    }
  };
};

export const loadCityDetails = (
  latitude: number,
  longitude: number,
  selectedVariables?: string[],
  selectedUnites?: ISelectedUnites,
  startDate?: string,
  endDate?: string
) => {
  return async (dispatch: Dispatch) => {

    try {
      dispatch(initCityDetails());
      const response = await fetchCityDetails(
        latitude,
        longitude,
        selectedVariables,
        selectedUnites,
        startDate,
        endDate
      );
      dispatch(initCityDetailsSuccess(response));
    } catch (error) {
      dispatch(initCityDetailsFailure(error as string));
    }
  };
};