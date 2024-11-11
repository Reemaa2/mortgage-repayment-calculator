import './App.css';
import React from 'react';
import Calculate from './Components/calculate/Calculate';
import Result from './Components/result/Result';

function App() {

  const [showResult, setShowResult] = React.useState(false);
  const [calculation, setCalculation] = React.useState({
    monthly: {},
    total: {}
  });
  const [radioOption, setRadioOption] = React.useState('');


  return (
    <main>
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
