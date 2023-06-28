import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { IAutoCompleteProps } from '../../../types';

const AutoComplete = ({cities, handleOnInputChange, handleOnChange} : IAutoCompleteProps) => {
  return (
    <Autocomplete
      id="city-select"
      onInputChange={handleOnInputChange}
      onChange={handleOnChange}
      sx={{ width: 300 }}
      options={cities || []}
      isOptionEqualToValue={(option, value) => option.country_code === value.country_code}
      autoHighlight
      getOptionLabel={(option) => option.name || ''}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props} key={`${option}-${Math.random()}`}>
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.country_code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.country_code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.name} {option.admin1} ({option.latitude}, {option.longitude})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a city"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', 
          }}
        />
      )}
    />
  );
}

export default AutoComplete;