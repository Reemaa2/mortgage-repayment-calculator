import React from 'react';
import calculatorImage from '../assets/images/icon-calculator.svg';
import NumberInput from './input-components/NumberInput';
import RadioInput from './input-components/RadioInput';



const Calculate = (props) => {

  const initialFormState = {
    mortgageAmount: '',
    mortgageTerm: '',
    intrestRate: '',
    mortgageType: ''
  };

  const [formData, setFormData] = React.useState(initialFormState);
  const [emptyValues, setEmptyValues] = React.useState([]);





  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormData(prevFormData => ({...prevFormData, [name]: value}));

    if (emptyValues.includes(name) && value) {
      setEmptyValues((prev) => prev.filter((item) => item !== name));
    }
    
    props.setShowResult(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const emptyFields = Object.keys(formData).filter(key => !formData[key]);
    setEmptyValues(emptyFields);
   
    if(emptyFields.length === 0) {
      props.setShowResult(true);
      calculateRepayments();
    }
  }

  const handleReset = () => {
    setFormData(initialFormState);
    props.setShowResult(false);
  }

  const calculateRepayments = () => {
    const mortgageAmount = Number(formData.mortgageAmount);
    const mortgageTerm = Number(formData.mortgageTerm);
    const interestRate = Number(formData.intrestRate);

    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = mortgageTerm * 12;

    const monthlyPayment = 
    mortgageAmount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const monthlyIntrestPayment = mortgageAmount * monthlyRate;


    const totalPayment = monthlyPayment * numberOfPayments;
    const totalIntrest = totalPayment - mortgageAmount;


    props.setCalculation({
      monthly: {
        repayment: monthlyPayment.toFixed(2),
        intrest: monthlyIntrestPayment.toFixed(2),
      },
      total: {
        repayment: totalPayment.toFixed(2),
        intrest: totalIntrest.toFixed(2)
      }
    });
  }

 

  return (
    <section className='lg:w-1/2'>
      <div className='bg-white py-[2em] px-[1.3em] sm:p-[2.3em] lg:rounded-l-[1.4em] lg:px-[1.5em] xl:px-[2.5em]'>
        <div className='md:flex md:justify-between md:items-center md:mb-[1.5em]'>
          <h1 className='text-[1.5em] font-bold text-slate-900 mb-[.5em] md:mb-0'>Mortgage Calculator</h1>
          <button className='reset-btn' onClick={handleReset}>Clear All</button>
        </div>
      
        <form onSubmit={handleSubmit}>
          <div className='md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-[25px]'>
            <NumberInput 
              inputName='Mortgage Amount' 
              inputInfo='$'  
              name='mortgageAmount'
              onChangeFunction={handleChange}
              emptyValues={emptyValues}
              formData={formData}
              isFirst={true}
            />
            <NumberInput
              inputName='Mortgage Term' 
              inputInfo='years'  
              name='mortgageTerm'
              onChangeFunction={handleChange}
              emptyValues={emptyValues}
              formData={formData}
            />
            <NumberInput  
              inputName='Intrest Rate' 
              inputInfo='%' 
              name='intrestRate'
              onChangeFunction={handleChange}
              emptyValues={emptyValues}
              formData={formData}
            />
          </div>
          
          <div>
            <label className="input-name">Mortgage Type</label>
            
            <div>
              <RadioInput 
                radioName='Repayment'
                onChangeFunction={handleChange}
                formData={formData}
                setFormData={setFormData}
                setRadioOption={props.setRadioOption} 
                setShowResult={props.setShowResult}
              />
              <RadioInput 
                radioName='Interest Only'
                onChangeFunction={handleChange}
                formData={formData}
                setFormData={setFormData}
                setRadioOption={props.setRadioOption}
                setShowResult={props.setShowResult}
              />
            </div>
            
            {emptyValues.includes('mortgageType') && 
            <div className='text-red text-[.9rem] font-medium'>This field is required</div>}
          </div>

          <button className='calculate-btn'>
            <img src={calculatorImage} className='mr-[.6em]' alt='calculator'></img>
            Calculate Repayments
          </button>
        </form>

      </div>
    </section>
  );
}



export default Calculate;


