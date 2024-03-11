import React from 'react';
import Select from 'react-select';

const supplies = [
  'SH002: Shipping - Return Box iPad',
  'SH005: Shipping - Scheduled Pickup',
  'SH011: Shipping - Return Label iPad - Physical in Box',
  'SH203: Cable - Lightning USB-A',
  'SH204: Cable - Lightning USB-C',
  'SH205: Cable - Lightning USB-C to USB-C',
  'SH301: iPad Accessory - Car Charger',
  'SH302: iPad Accessory - Wall Charger',
  'SH303: iPad Accessory - iPad Case/Keyboard',
  'SH303: iPad - iPad Only',
];
const options = supplies.map((supply) => ({ value: supply, label: supply }));

const matchSupplies = (arr) => {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  for (let i of arr) {
    if (i === 'Car Charger') {
      newArr.push({ value: 'SH301: iPad Accessory - Car Charger' });
    }
    if (i === 'iPad Lightning USB Cable') {
      newArr.push({ value: 'SH203: Cable - Lightning USB-c' });
    }
    if (i === 'Wall Charger Adapter') {
      newArr.push({ value: 'SH302: iPad Accessory - Wall Charger' });
    }
    if (i === 'iPad Case' || i === 'Bluetooth Keyboard') {
      newArr.push({ value: 'SH303: iPad Accessory - iPad Case/Keyboard' });
    }
    if (i === 'Keyboard Micro USB Charging Cable') {
      newArr.push({ value: 'SH205: Cable - Lightning USB-C to USB-C' });
    }
    if (i === 'iPad Return Label') {
      newArr.push(
        { value: 'SH002: Shipping - Return Box iPad' },
        { value: 'SH011: Shipping - Return Label iPad - Physical in Box' }
      );
    }
  }
  return newArr;
};
const handleChange1 = (newValue) => {
  console.log(newValue);
};
function providerSupplies({ name, onChange, defaultValue }) {
  const defaultSupplies = matchSupplies(defaultValue);
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isFocused ? 'white' : 'black',
      backgroundColor: state.isFocused ? 'rgb(100, 89, 245)' : 'white',
      padding: 20,
    }),
  };
  console.log('defaultValue');
  console.log(defaultSupplies);

  const handleChange = (selectedOptions) => {
    const event = {
      target: {
        name: name,
        value: selectedOptions
          ? selectedOptions.map((option) => ({ value: option.value }))
          : [],
      },
    };
    onChange(event);
  };
  return (
    <Select
      options={options}
      isMulti
      styles={customStyles}
      defaultValue={defaultSupplies}
      onChange={handleChange}
    />
  );
}

export default providerSupplies;
