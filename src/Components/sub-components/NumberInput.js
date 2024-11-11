import React from "react";
import clsx from "clsx";


const Input = (props) => {

  const [isInputFocused, setIsInputFoucused] = React.useState(false);


  const inputInfoClassName = props.inputName === "Mortgage Amount"  
    ? 'amount-info' 
    : 'term-rate-info';
 
  const isEmpty = props.emptyValues.includes(props.name);



  const handleFocus = () => {
    setIsInputFoucused(true);
  }

  const handleBlur = () => {
    setIsInputFoucused(false);
  }




  return (
    <div className="input-container">
      <span className="input-name">{props.inputName}</span> 

      <div  className={clsx('input-div', {
        'focus': isInputFocused,
        'input-div-error': isEmpty
      })}> 
      
        <span className={clsx('input-info', inputInfoClassName, {
          'focus': isInputFocused,
          'input-info-error': isEmpty
        })}>{props.inputInfo}</span>  

        <input 
          type='number' 
          className='input-type-number' 
          id={props.id} 
          name={props.name}
          value={props.formData[props.name]}
          onChange={props.onChangeFunction}
          onFocus={handleFocus}
          onBlur={handleBlur}
        ></input>
      </div>

      { isEmpty && <p className='error-message'>This field is required</p>}
    </div>
  ); 
}

export default Input;




