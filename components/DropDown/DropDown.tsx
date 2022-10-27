import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const DropDown = ({
  options,
  label,
  onChangeHandler,
  preSelectedOption,
  width,
}) => {
  const [selectedOption, setSelectedOption] = useState({});

  useEffect(() => {
    // if there are no options
    if (!options || options.length === 0) {
      setSelectedOption('');
    }
    // if there are not any preSelected option then select first option by default.
    if (!preSelectedOption && options.length) {
      setSelectedOption(options[0]);
    }
    // if there are preSelected option.
    if (options.length && preSelectedOption) {
      const filteredOption = options.filter((data: any) => {
        return data.id === preSelectedOption.id;
      });
      setSelectedOption(filteredOption[0]);
    }
  }, [options, preSelectedOption]);

  useEffect(() => {
    // Every time selected option changes this function runs
    onChangeHandler(selectedOption);
  }, [selectedOption]);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, width: width ? width : 100 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          {label ? label : 'Label'}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedOption}
          defaultValue={selectedOption}
          label={label ? label : 'Label'}
          onChange={handleChange}
        >
          {options && options.length ? (
            options.map((data: any, index: number) => (
              <MenuItem key={index} value={data}>
                {data.name}
              </MenuItem>
            ))
          ) : (
            <MenuItem>No Data!</MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  );
};
export default DropDown;
