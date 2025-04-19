// components/SelectBox2.tsx
import React from 'react';
import Select from 'react-select';

type OptionType = {
  label: string;
  value: string;
};

interface SelectBoxProps {
  options: OptionType[];
  placeholder?: string;
  onChange: (option: OptionType | null) => void;
  shape?: 'pill' | 'rounded';
  size?: 'sm' | 'md' | 'lg';
}

const SelectBox: React.FC<SelectBoxProps> = ({
  options,
  placeholder = 'Select...',
  onChange,
  shape = 'rounded',
  size = 'md',
}) => {
  return (
    <Select
      options={options}
      placeholder={placeholder}
      onChange={onChange}
      className="text-black"
      styles={{
        control: (base) => ({
          ...base,
          borderRadius: shape === 'pill' ? 9999 : 6,
          padding: size === 'lg' ? '0.75rem' : size === 'sm' ? '0.25rem' : '0.5rem',
          backgroundColor: "#000000",
          outline: "none"
        }),
      }}
      
    />
  );
};

export default SelectBox;
