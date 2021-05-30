import { useState } from 'react';

const SubmitKYCThirdStep = ({ onNext }) => {
  const [isDisplayText, setIsDisplayText] = useState(false);

  return (
    <div className="pt-8">
      <p className="text-2.5xl">
        Next, you will need to submit documents through our embedded upload
        system.
      </p>
      <p className="text-sm text-dark1 mt-1">
        You will need a clear picture of a government issued identification
        document (passport recommended) and a proof of address document such as
        a utility or phone bill, or bank statement. Your identification document{' '}
        <strong>must</strong> match the name and DOB you entered on theprior
        step, and your address document <strong>must</strong> match the address
        entered on the prior step. You may go back and update your information
        if needed by clicking Back.
        <br />
        <br />
        If you have your documents ready to upload and all information matches,
        press the Start KYC button below.
      </p>
      <div className="md:flex md:space-x-8 md:items-center mt-12">
        {isDisplayText ? (
          <>
            <p className="text-sm text-primary">
              Thank you for submitting your KYC. It will be reviewed by admin
              and a response given within 3 business days. Please continue.
            </p>
            <button
              type="button"
              className="md:hidden my-5 text-lg text-white w-full md:w-64 h-16 rounded-full bg-primary shadow-md focus:outline-none hover:opacity-40"
              onClick={onNext}
            >
              Continue
            </button>
          </>
        ) : (
          <button
            type="button"
            className="text-lg text-white w-full md:w-64 h-16 rounded-full bg-primary shadow-md focus:outline-none hover:opacity-40"
            onClick={() => setIsDisplayText(true)}
          >
            Begin KYC
          </button>
        )}
      </div>
    </div>
  );
};

export default SubmitKYCThirdStep;
