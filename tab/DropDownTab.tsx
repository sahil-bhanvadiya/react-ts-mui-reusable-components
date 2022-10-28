import * as React from 'react';
import DropDown from '../components/DropDown/DropDown';
export default function DropDownTab() {
  const options: { id: number; name: any; value: any }[] = [
    { id: 1, name: 'First', value: 'first' },
    { id: 2, name: 'Second', value: 'second' },
    { id: 3, name: 'Third', value: 'Third' },
    { id: 4, name: 'Fourth', value: 'Fourth' },
  ];
  return (
    <div>
      <h3> DropDown-Options : First, Second, Third, Fourth </h3>
      <p>
        If we dosen't provide any selected option then take first option from
        data.
      </p>
      <DropDown
        options={options}
        label="First Example"
        onChangeHandler={(data: any) => console.log(data)}
      />
      <br />
      <p>
        If we provides selected option then.(In this case we provide third
        option as default selected option.)
      </p>
      <DropDown
        options={options}
        label="Second Example"
        onChangeHandler={(data: any) => console.log(data)}
        preSelectedOption={options[2]}
      />
      <br />
      <p>Customized width if provides in props else take default width.</p>
      <DropDown
        options={options}
        label="Third Example"
        onChangeHandler={(data: any) => console.log(data)}
        width={350}
      />
    </div>
  );
}
