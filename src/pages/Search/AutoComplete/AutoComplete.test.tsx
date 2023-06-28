import { shallow } from 'enzyme';
import Autocomplete from '@mui/material/Autocomplete';
import AutoComplete from './AutoComplete';

describe('AutoComplete', () => {
  const cities = [
    { name: 'Berlin', country_code: 'DE', admin1: 'Berlin State', latitude: 52.40001, longitude: 13.600006 },
    { name: 'Berlin MaryLand', country_code: 'GB', admin1: 'State 2', latitude: 38.40001, longitude: -75.2 },
  ];

  const handleOnInputChange = jest.fn();
  const handleOnChange = jest.fn();

  it('renders Autocomplete component with correct props', () => {
    const wrapper = shallow(
      <AutoComplete cities={cities} handleOnInputChange={handleOnInputChange} handleOnChange={handleOnChange} />
    );

    const autoCompleteComponent = wrapper.find(Autocomplete);
    expect(autoCompleteComponent).toHaveLength(1);
    expect(autoCompleteComponent.prop('options')).toEqual(cities);
    expect(autoCompleteComponent.prop('onInputChange')).toEqual(handleOnInputChange);
    expect(autoCompleteComponent.prop('onChange')).toEqual(handleOnChange);
  });
});
