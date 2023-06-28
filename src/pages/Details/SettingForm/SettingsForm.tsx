import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Alert, Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { loadCityDetails } from '../../../store/actions/weather';
import { ISelectedUnites } from '../../../types';
import { useHookDispatch } from '../../../hooks';
import Button from '../../../components/Button/Button';

const SettingsForm = ({ latitude, longitude }: { latitude: number, longitude: number }) => {
  const dispatch = useHookDispatch()
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [selectedVariables, setSelectedVariables] = useState<string[]>(['temperature_2m']);
  const [selectedUnites, setSelectedUnites] = useState<ISelectedUnites>({
    tempetureUnit: '',
    windSpeedUnit: '',
    precipitationUnit: ''
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedVariables((prevSelectedValues) => {
      if (prevSelectedValues.includes(value)) {
        return prevSelectedValues.filter((v) => v !== value);
      } else {
        return [...prevSelectedValues, value];
      }
    });
  };
  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    setSelectedUnites((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };
  const handleOnFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formattedStartDate = startDate !== null ? dayjs(startDate).format('YYYY-MM-DD') : undefined;
    const formattedEndDate = endDate !== null ? dayjs(endDate).format('YYYY-MM-DD') : undefined;
    dispatch(loadCityDetails(latitude, longitude, selectedVariables, selectedUnites, formattedStartDate, formattedEndDate));
  }

  return (
    <form className="w-full" onSubmit={handleOnFormSubmit}>
      <div className="mb-2 text-2xl font-medium text-black">Weather Variables</div>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              value="temperature_2m"
              checked={selectedVariables.includes('temperature_2m')}
              onChange={handleCheckboxChange}
            />
          }
          label="temperature(2m)"
        />
        <FormControlLabel
          control={
            <Checkbox
              value="windspeed_10m"
              checked={selectedVariables.includes('windspeed_10m')}
              onChange={handleCheckboxChange}
            />
          }
          label="wind-speed(10m)"
        />
        <FormControlLabel
          control={
            <Checkbox
              value="precipitation"
              checked={selectedVariables.includes('precipitation')}
              onChange={handleCheckboxChange}
            />
          }
          label="Precipitation (rain + showers + snow)"
        />
      </FormGroup>
      <div className="mb-2 text-2xl font-medium text-black">Weather Settings</div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className="w-1/2"
          label="Start Date"
          value={startDate}
          onChange={(newValue) => setStartDate(newValue)}
        />
        <DatePicker
          className="w-1/2"
          label="End Date"
          value={endDate}
          onChange={(newValue) => setEndDate(newValue)}
        />
      </LocalizationProvider>
      {((startDate && endDate === null) || (startDate === null && endDate)) && <Alert severity="error">Both 'start_date' and 'end_date' must be set!</Alert>}
      <FormControl fullWidth>
        <InputLabel id="tempetureUnit">Temperature units</InputLabel>
        <Select
          className="mt-2"
          labelId="tempetureUnit"
          name="tempetureUnit"
          label="Temperature units"
          value={selectedUnites.tempetureUnit}
          onChange={handleSelectChange}>
          <MenuItem value="celsius">Celsius C</MenuItem>
          <MenuItem value="fahrenheit">Fahrenheit F</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="windSpeedUnit">wind speed units</InputLabel>
        <Select
          className="mt-2"
          name="windSpeedUnit"
          labelId="windSpeedUnit"
          label="wind speed units"
          value={selectedUnites.windSpeedUnit}
          onChange={handleSelectChange}>
          <MenuItem value="kmh">Km/h</MenuItem>
          <MenuItem value="ms">m/s</MenuItem>
          <MenuItem value="mph">Mph</MenuItem>
          <MenuItem value="kn">Knots</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="precipitationUnit">precipitation units</InputLabel>
        <Select
          className="mt-2 mb-2"
          name="precipitationUnit"
          labelId="precipitationUnit"
          label="precipitation units"
          value={selectedUnites.precipitationUnit}
          onChange={handleSelectChange}>
          <MenuItem value="mm">Millimeter</MenuItem>
          <MenuItem value="inch">Inch</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={handleOnFormSubmit} label="Update Chart" style={{ float: "right"}} />
    </form>
  );
};

export default SettingsForm;
