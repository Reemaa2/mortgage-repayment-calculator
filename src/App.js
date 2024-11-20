import './index.css';
import React from 'react';
import Calculate from './Components/Calculate';
import Result from './Components/Result';

function App() {

  const [showResult, setShowResult] = React.useState(false);
  const [calculation, setCalculation] = React.useState({
    monthly: {},
    total: {}
  });
  const [radioOption, setRadioOption] = React.useState('');


  return (
    <main className='flex flex-col lg:flex-row lg:m-[1.8em] lg:h-full xl:mx-[4em] 2xl:mx-[10em]'>
      <Calculate 
        setShowResult={setShowResult} 
        setCalculation={setCalculation} 
        setRadioOption={setRadioOption} 
      />
      
      <Result 
        showResult={showResult} 
        calculation={calculation} 
        radioOption={radioOption} 
      />
    </main>
  );
}

export default App;
