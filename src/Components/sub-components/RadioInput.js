import React from 'react';
import clsx from 'clsx';

const RadioInput = (props) => {

  const divRef = React.useRef(null);

  function handleClick() {
    const div = divRef.current;
    const isChecked = div.classList.contains('border-lime');

    div.classList.toggle('border-lime');
    div.classList.toggle('bg-lime-lightest');

    props.setFormData(prevForm => (
      {...prevForm, mortgageType: isChecked ? '' : props.radioName}
    ));
    props.setRadioOption(isChecked ? '' : props.radioName);
    props.setShowResult(false);
  }



  
  return (
    <div className={clsx('input-box', 'h-[45px] flex items-center cursor-pointer mt-[.5em]  hover:border-lime', {
      'bg-lime-lightest border-lime': props.formData.mortgageType === props.radioName,
      'border-slate-500': props.formData.mortgageType !== props.radioName,
      })} ref={divRef} onClick={handleClick}
    > 
      <div className='relative flex items-center'>
        <input 
        type='radio' 
        className='appearance-none bg-white w-[1.2em] h-[1.2em] border border-[#4e4e4e] rounded-[50%] mx-[1.2em] cursor-pointer checked:border-lime' 
        name='mortgageType'
        value={props.radioName}
        checked={props.formData['mortgageType'] === props.radioName}
        onChange={props.onChangeFunction}
      >
      </input>
      {props.formData.mortgageType === props.radioName && 
      <span className='bg-lime w-[.7em] h-[.7em] rounded-[50%] absolute left-[1.45em]'></span> }
      <label className='text-slate-900 text-[1em] font-bold'>{props.radioName}</label>
      </div>
    </div>
  )
}

export default RadioInput;