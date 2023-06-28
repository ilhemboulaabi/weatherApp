import React, { ChangeEvent, useEffect, useState } from 'react';
import { useHookSelector, useHookDispatch } from '../../hooks'
import { useNavigate } from 'react-router-dom';
import { ICity, IRootState } from '../../types';
import { loadCity, loadCityDetails } from '../../store/actions/weather';
import Autocomplete from './AutoComplete/AutoComplete';

const SearchPage: React.FC = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [selectedCity, setSelectedCity] = useState<ICity>();
  const dispatch = useHookDispatch()
  const cities = useHookSelector((state: IRootState) => state.weather.cities);
  const handleOnCityInputChange = (_: ChangeEvent<{}>, value: string) => {
    setInputValue(value);
  };
  const handleOnCityChange = (_: ChangeEvent<{}>, value: ICity | null) => {
    value && setSelectedCity(value);
  };

  useEffect(() => {
    if (inputValue) {
      dispatch(loadCity(inputValue));
    };
    if (selectedCity) {
      dispatch(loadCityDetails(selectedCity.latitude, selectedCity.longitude));
      navigate('/details');
    }

  }, [inputValue, selectedCity, dispatch, navigate]);
  return (
    <div className="p-8 flex items-center flex-col">
      <div className="mb-2 text-2xl font-medium">Type and Select City Name</div>
      <Autocomplete cities={cities} handleOnInputChange={handleOnCityInputChange} handleOnChange={handleOnCityChange} />
    </div>
  );
};

export default SearchPage;
