import * as React from 'react';
import './style.css';
import DropDown from './components/DropDown/DropDown';
export default function App() {
  const options: any = [
    { id: 1, name: 'First', value: 'first' },
    { id: 2, name: 'Second', value: 'second' },
    { id: 3, name: 'Third', value: 'Third' },
    { id: 4, name: 'Fourth', value: 'Fourth' },
  ];
  return (
    <div>
      <h1>React Material UI Re-usable components.</h1>
      <p>Dropdowns</p>
      <DropDown
        options={options}
        label="Example Label"
        onChangeHandler={(data: any) => console.log(data)}
        preSelectedOption={options[1]}
        width={200}
      />
    </div>
  );
}
