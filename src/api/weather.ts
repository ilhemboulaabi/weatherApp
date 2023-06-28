import { ISelectedUnites } from "../types";

const GEOCODING_URL = process.env.REACT_APP_GEOCODING_API_URL;
const OPEN_METEO_URL = process.env.REACT_APP_OPEN_METEO_API_URL;

export const fetchCities = (inputValue: string) =>
    fetch(`${GEOCODING_URL}/search?name=${inputValue}`).then((res) => res.json());

export const fetchCityDetails = (
    latitude: number,
    longitude: number,
    selectedVariables?: string[],
    selectedUnites?: ISelectedUnites,
    startDate?: string,
    endDate?: string
) =>
    fetch(`${OPEN_METEO_URL}/ecmwf?latitude=${latitude}&longitude=${longitude}&hourly=${selectedVariables ? selectedVariables : 'temperature_2m'}&temperature_unit=${selectedUnites?.tempetureUnit || 'celsius'}&windspeed_unit=${selectedUnites?.windSpeedUnit || 'kmh'}&precipitation_unit=${selectedUnites?.precipitationUnit || 'mm'}&${startDate ? `start_date=${startDate}` : ''}&${endDate ? `end_date=${endDate}` : ''}`).then((res) => res.json());