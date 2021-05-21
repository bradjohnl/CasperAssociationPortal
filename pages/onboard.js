import { useRouter } from 'next/router';
import { useState } from 'react';
import AppFooter from '../components/Layouts/app-footer';
import AppHeader from '../components/Layouts/app-header';

const Onboard = () => {
  const [onEsignHover, setOnEsignHover] = useState(false);
  const [onOwnershipHover, setOnOwnershipHover] = useState(false);
  const [onKYCHover, setOnKYCHover] = useState(false);

  const router = useRouter();

  return (
    <div className="flex justify-center min-h-screen">
      <div className="w-full md:max-w-screen-2xl md:p-9 p-4 flex flex-col">
        <AppHeader theme="dark" />
        <div className="flex-grow flex items-center justify-center mt-16 md:mt-0">
          <div className="w-full md:w-9/12">
            <div className="invisible md:visible flex space-x-5 border-b border-gray pb-1 h-0 md:h-auto">
              <p className="flex-1 text-gray">Esign Terms</p>
              <p className="flex-1 text-gray">Verify Node Ownership</p>
              <p className="flex-1 text-gray">Submit KYC</p>
            </div>
            <div className="md:flex md:space-x-5">
              <div
                className="md:flex-1 cursor-pointer"
                role="button"
                tabIndex="0"
                onMouseEnter={() => setOnEsignHover(true)}
                onMouseLeave={() => setOnEsignHover(false)}
                onClick={() => router.push('/onboard/esign-terms')}
                onKeyDown={() => router.push('/onboard/esign-terms')}
              >
                <div className="relative">
                  <img
                    src="/images/img_signature.png"
                    alt="esign terms"
                    className="object-cover"
                  />
                  <div
                    className={`absolute left-0 right-0 top-0 bottom-0 ${
                      onEsignHover ? 'opacity-100' : 'opacity-0'
                    } bg-white`}
                    style={{
                      backgroundImage: `url('/images/img_signature_blur.png')`,
                    }}
                  >
                    <div className="absolute bottom-0 mx-5 my-10">
                      <p className="text-2xl">Esign Terms</p>
                      <p className="text-sm text-dark1 mt-2">
                        You must read and agree to the terms of service before
                        continuing to the portal
                      </p>
                    </div>
                  </div>
                </div>
                {onEsignHover && (
                  <button
                    type="button"
                    className="absolute ml-4 -mt-6 focus:outline-none"
                  >
                    <img
                      src="/images/ic_next_circle_gradient_large.svg"
                      alt="next"
                    />
                  </button>
                )}
                <div
                  className={`md:mx-4 md:my-6 ${
                    onEsignHover ? 'invisible' : 'visible'
                  }`}
                >
                  <p className="text-2xl">Esign Terms</p>
                  <p className="text-sm text-dark1 mt-2">
                    You must read and agree to the terms of service before
                    continuing to the portal
                  </p>
                </div>
              </div>
              <div
                className="md:flex-1 mt-10 md:mt-0 cursor-pointer"
                onMouseEnter={() => setOnOwnershipHover(true)}
                onMouseLeave={() => setOnOwnershipHover(false)}
              >
                <div className="relative">
                  <img
                    src="/images/img_ownership.png"
                    alt="veriy node ownership"
                    className="object-cover"
                  />
                  <div
                    className={`absolute left-0 right-0 top-0 bottom-0 ${
                      onOwnershipHover ? 'opacity-100' : 'opacity-0'
                    } bg-white`}
                    style={{
                      backgroundImage: `url('/images/img_ownership_blur.png')`,
                    }}
                  >
                    <div className="absolute bottom-0 mx-5 my-10">
                      <p className="text-2xl">Verify Node Ownership</p>
                      <p className="text-sm text-dark1 mt-2">
                        Please choose Sign In if you have an existing account or
                        Register if this is your first time here.
                      </p>
                    </div>
                  </div>
                </div>
                {onOwnershipHover && (
                  <button
                    type="button"
                    className="absolute ml-4 -mt-6 focus:outline-none"
                  >
                    <img
                      src="/images/ic_next_circle_gradient_large.svg"
                      alt="next"
                    />
                  </button>
                )}
                <div
                  className={`md:mx-4 md:my-6 ${
                    onOwnershipHover ? 'invisible' : 'visible'
                  }`}
                >
                  <p className="text-2xl">Verify Node Ownership</p>
                  <p className="text-sm text-dark1 mt-2">
                    Please choose Sign In if you have an existing account or
                    Register if this is your first time here.
                  </p>
                </div>
              </div>
              <div
                className="md:flex-1 mt-10 md:mt-0 cursor-pointer"
                onMouseEnter={() => setOnKYCHover(true)}
                onMouseLeave={() => setOnKYCHover(false)}
              >
                <div className="relative">
                  <img
                    src="/images/img_kyc.png"
                    alt="submit kyc"
                    className="object-cover"
                  />
                  <div
                    className={`absolute left-0 right-0 top-0 bottom-0 ${
                      onKYCHover ? 'opacity-100' : 'opacity-0'
                    } bg-white`}
                    style={{
                      backgroundImage: `url('/images/img_ownership_blur.png')`,
                    }}
                  >
                    <div className="absolute bottom-0 mx-5 my-10">
                      <p className="text-2xl">Submit KYC</p>
                      <p className="text-sm text-dark1 mt-2">
                        Upload your passport and utility bill here for identity
                        and address verification.
                      </p>
                    </div>
                  </div>
                </div>
                {onKYCHover && (
                  <button
                    type="button"
                    className="absolute ml-4 -mt-6 focus:outline-none"
                  >
                    <img
                      src="/images/ic_next_circle_gradient_large.svg"
                      alt="next"
                    />
                  </button>
                )}
                <div
                  className={`md:mx-4 md:my-6 ${
                    onKYCHover ? 'invisible' : 'visible'
                  }`}
                >
                  <p className="text-2xl">Submit KYC</p>
                  <p className="text-sm text-dark1 mt-2">
                    Upload your passport and utility bill here for identity and
                    address verification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AppFooter theme="dark" />
      </div>
    </div>
  );
};

export default Onboard;
