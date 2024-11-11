import './calculate.css';
import React from 'react';
import calculatorImage from '../../assets/images/icon-calculator.svg';
import NumberInput from '../sub-components/NumberInput';
import RadioInput from '../sub-components/RadioInput';



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
    console.log('run handle change func')
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
    <section>
      <div className="calculate-container">
        <div className='calculate-title'>
          <h1>Mortgage Calculator</h1>
          <button className='reset-btn' onClick={handleReset}>Clear All</button>
        </div>
      
        <form className='form' onSubmit={handleSubmit}>
          <div className='number-inputs'>
            <NumberInput 
              inputName='Mortgage Amount' 
              inputInfo='$'  
              id='amount'
              name='mortgageAmount'
              onChangeFunction={handleChange}
              emptyValues={emptyValues}
              formData={formData}
            />

            <NumberInput
              inputName='Mortgage Term' 
              inputInfo='years'  
              id='term' 
              name='mortgageTerm'
              onChangeFunction={handleChange}
              emptyValues={emptyValues}
              formData={formData}
            />

            <NumberInput  
              inputName='Intrest Rate' 
              inputInfo='%' 
              id='rate' 
              name='intrestRate'
              onChangeFunction={handleChange}
              emptyValues={emptyValues}
              formData={formData}
            />
          </div>
          

          <div>
            <span className="input-name">Mortgage Type</span>
            
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
            
            {emptyValues.includes('mortgageType') && <div className='error-message'>This field is required</div>}
          </div>

          <button>
            <img src={calculatorImage} className='calculator-image' alt='calculator'></img>
            Calculate Repayments
          </button>
        </form>

      </div>
    </section>
  );
}



export default Calculate;


