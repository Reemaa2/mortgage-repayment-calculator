import ilustrationImage from '../assets/images/illustration-empty.svg';


function Result(props) {

  const infoComponent = (
    <div className="flex flex-col items-center text-center lg:p-0 lg:h-full lg:justify-center">
      <img src={ilustrationImage} alt='ilustration' className='mb-[1em]'></img>
      <h2 className='text-white mb-[.8em] text-[1.5em] font-bold'>Results shown here</h2>
      <p className='text-slate-300 text-[1.1rem] md:px-[4em] lg:px-0 leading-6'>
        Complete the from and click "calculate repayments" to see what your monthly repayments would be.
      </p>
    </div>
  );

  const resultComponent = (
    <div>
      <div className='mb-[1.2em]'>
        <h2 className='text-white mb-[.8em] text-[1.5em] font-bold'>Your results</h2>
        <p className='text-slate-300 text-[1.1rem] leading-6'>
          Your results are shown below based on the information you provided.
          To adjust the results, edit the from and click "calculate repayments" again.
        </p>
      </div>

      <div className='bg-slate-1000 py-[1.3em] px-[.7em] rounded-lg border-t-4 border-lime lg:mt-[2.6em]'>
        <div>
          <h4 className='text-slate-300 mb-[.6em]'>Your monthly repayments</h4>
          <span className='text-lime text-[2.5em] font-bold'>
            ${props.radioOption === 'Repayment' ? props.calculation.monthly.repayment : props.calculation.monthly.intrest}
          </span>
        </div>

        <div className='border-b border-slate-700 my-[.8em] lg:my-[1.4em]'></div>

        <div>
          <h4 className='text-slate-300 mb-[.6em]'>Total you'll repay over the term</h4>
          <span className='text-white text-[1.3rem] font-semibold'>
            ${props.radioOption === 'Repayment' ? props.calculation.total.repayment : props.calculation.total.intrest}
          </span>
        </div>
      </div>
    </div>
  );

 

  return (
    <section className='lg:w-1/2 lg:bg-white rounded-r-[1.4em]'>
      <div className='bg-slate-900 py-[2em] px-[1.3em] sm:p-[2.3em] lg:h-full lg:rounded-r-[1.4em] lg:rounded-bl-[4em]'>
        {props.showResult ? resultComponent : infoComponent}
      </div>
    </section>
  );
}

export default Result;