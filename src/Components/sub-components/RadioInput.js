import React from 'react';
import '../calculate/calculate.css';
import clsx from 'clsx';

const RadioInput = (props) => {

  const divRef = React.useRef(null);

  function handleClick() {
    const div = divRef.current;
    const isChecked = div.classList.contains('checked-div');

    div.classList.toggle('checked-div');

    props.setFormData(prevForm => (
      {...prevForm, mortgageType: isChecked ? '' : props.radioName}
    ));
    props.setRadioOption(isChecked ? '' : props.radioName);
    props.setShowResult(false);
  }


  
  return (
    <div className={clsx('input-div', 'input-div-radio', {
      'checked-div': props.formData.mortgageType === props.radioName,
    })}
      ref={divRef} onClick={handleClick}> 

      <input 
        type='radio' 
        className='input-type-radio' 
        name='mortgageType'
        value={props.radioName}
        checked={props.formData['mortgageType'] === props.radioName}
        onChange={props.onChangeFunction}
      ></input>
      <label>{props.radioName}</label>

    </div>
  )
}

export default RadioInput;