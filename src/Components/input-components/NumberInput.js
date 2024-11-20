import React from "react";
import clsx from "clsx";


const Input = (props) => {

  const [isInputFocused, setIsInputFoucused] = React.useState(false);

  const isEmpty = props.emptyValues.includes(props.name);
  
  const inputBoxClasses = clsx('input-box', {
    'border-lime': isInputFocused,
    'border-red hover:border-slate-900': isEmpty && !isInputFocused,
    'border-slate-500 hover:border-slate-900': !isInputFocused && !isEmpty
  });
  const spanClasses = clsx('py-[9px] px-[18px] absolute top-0 bottom-0 font-semibold flex items-center', {
    'left-0': props.name === 'mortgageAmount' ,
    'right-0 lg:px-[14px]': ['mortgageTerm', 'intrestRate'].includes(props.name),
    'bg-lime text-slate-900': isInputFocused,
    'bg-red text-white': isEmpty && !isInputFocused,
    'bg-slate-100 text-slate-700': !isInputFocused && !isEmpty
  });
  const inputClasses = clsx('h-[45px] w-[80%] border-none font-jakarta text-[1.1rem] font-bold text-slate-900 pl-[0.7em] cursor-pointer focus:outline-none', {
    'ml-[48px] w-[calc(100%-48px)]': props.name === 'mortgageAmount' ,
    'w-[calc(100%-77px)]': props.name === 'mortgageTerm' ,
    'w-[calc(100%-56px)]': props.name === 'intrestRate' ,
  });



  const handleFocus = () => {
    setIsInputFoucused(true);
  }

  const handleBlur = () => {
    setIsInputFoucused(false);
  }


  return (
    <div className={`flex flex-col mb-[1.5em] ${props.isFirst && 'md:col-span-full'}`}>
      <label className="input-name">{props.inputName}</label> 

      <div  className={inputBoxClasses}> 
        <span className={spanClasses}>{props.inputInfo}</span>  

        <input 
          type='number' 
          className={inputClasses}
          name={props.name}
          value={props.formData[props.name]}
          onChange={props.onChangeFunction}
          onFocus={handleFocus}
          onBlur={handleBlur}
        ></input>
      </div>

      { isEmpty && <p className='text-red text-[0.9rem] font-medium'>This field is required</p>}
    </div>
  ); 
}

export default Input;




