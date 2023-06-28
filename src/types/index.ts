import { ChangeEvent } from "react"

export interface ICity {
  latitude: number,
  longitude: number,
  name: string,
  admin1: string,
  country_code: string
}

export interface ICityDetails {
  latitude: number,
  longitude: number,
  hourly: IHourlyData,
  hourly_units: IHourlyUnits
}

export interface IHourlyUnits {
  time: string,
  temperature_2m: string,
  windspeed_10m?: string,
  precipitation?: string
}

export interface IHourlyData {
  temperature_2m: number[],
  windspeed_10m?: number[],
  precipitation?: number[],
  time: string[]
}

export interface IWeatherState {
  cities: ICity[],
  isCitiesLoading: boolean,
  isCityDetailsLoading: boolean,
  cityDetails: ICityDetails
}

export interface IRootState {
  weather: IWeatherState
}

export interface ISelectedUnites {
  tempetureUnit: string,
  windSpeedUnit: string,
  precipitationUnit: string
}

export type IAutoCompleteProps = {
  cities: ICity[];
  handleOnInputChange: (event: ChangeEvent<{}>, value: string) => void;
  handleOnChange: (event: ChangeEvent<{}>, value: ICity | null) => void;
};