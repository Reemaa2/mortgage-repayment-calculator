import './result.css';
import ilustrationImage from '../assets/images/illustration-empty.svg';


function Result(props) {

  const infoComponent = (
    <div className="info-component-contianer">
      <img src={ilustrationImage} alt=''></img>
      <h2>Results shown here</h2>
      <p>
        Complete the from and click "calculate repayments" to see what your monthly repayments would be.
      </p>
    </div>
  );

  const resultComponent = (
    <div>
      <div className='instruction-div'>
        <h2>Your results</h2>
        <p>
          Your results are shown below based on the information you provided.
          To adjust the results, edit the from and click "calculate repayments" again.
        </p>
      </div>

      <div className='results-div'>
        <div className='monthly-repayments'>
          <h4>Your monthly repayments</h4>
          <span>${props.radioOption === 'Repayment' ? props.calculation.monthly.repayment : props.calculation.monthly.intrest}</span>
        </div>

        <div className='line'></div>

        <div className='total-repayments'>
          <h4>Total you'll repay over the term</h4>
          <span>${props.radioOption === 'Repayment' ? props.calculation.total.repayment : props.calculation.total.intrest}</span>
        </div>
      </div>
    </div>
  );

 

  return (
    <section className='result-section'>
      <div className='result-container'>
        {props.showResult ? resultComponent : infoComponent}
      </div>
    </section>
  );
}

export default Result;