import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { IRootState } from '../../types';
import Chart from './Chart/Chart';
import SettingsForm from './SettingForm/SettingsForm';
import { useHookSelector } from '../../hooks';

const DetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const cityDetails = useHookSelector((state: IRootState) => state.weather.cityDetails);
  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <>
      <Button color="primary" onClick={handleGoBack}>
        Go Back to Search Page
      </Button>
      <div className="flex flex-col items-center ml-48 mr-48">
        <div className="mb-2 text-2xl font-medium text-black">City Coordinates</div>
        <span>Latitude: {cityDetails.latitude}</span>
        <span>Longitude: {cityDetails.longitude}</span>
        <SettingsForm latitude={cityDetails.latitude} longitude={cityDetails.longitude} />
        <div className="mb-2 text-2xl font-medium text-black">Weather Chart</div>
        <Chart hourlyData={cityDetails.hourly} hourlyUnits={cityDetails.hourly_units} />
      </div>
    </>
  );
};

export default DetailsPage;
