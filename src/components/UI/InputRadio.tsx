import { forwardRef } from 'react';

type Props = {
  id: string;
  name: string;
  colorRadio?: boolean;
  fontRadio?: boolean;
  fontFamily?: string;
  colorHex?: string;
  checked: boolean;
  onChangeChecked: () => void;
};

const InputRadio = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const {
    id,
    name,
    colorRadio,
    fontRadio,
    fontFamily,
    colorHex,
    checked,
    onChangeChecked,
  } = props;

  return (
    <label htmlFor={id} className='inputRadioContainer'>
      <input
        id={id}
        name={name}
        className="inputRadio"
        type='radio'
        checked={checked}
        onChange={onChangeChecked}
        ref={checked ? ref : undefined}
      />
      <span
        className={`${"inputRadioCustom"} ${
          colorRadio ? "inputRadioColor" : ''
        } ${fontRadio ? "inputRadioFont" : ''}`}
        style={{
          fontFamily: fontFamily ? fontFamily : '',
          backgroundColor: colorHex ? colorHex : '',
        }}
      ></span>
    </label>
  );
});

export default InputRadio;
