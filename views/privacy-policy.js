import React, { useEffect } from 'react';
import AppHeader from '../components/layouts/app-header';
import { LoadingScreen } from '../components/hoc/loading-screen';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.body.classList.add('bg-landing');
    return () => {
      document.body.classList.remove('bg-landing');
    };
  }, []);

  return (
    <div className="flex justify-center h-screen">
      <div
        className="
          flex flex-col w-full
          p-4
          lg:max-w-380 lg:p-9
          xl:max-w-screen-xl xl:p-9
          2xl:max-w-screen-2xl
        "
      >
        <AppHeader theme="light" />
        <div className="flex-grow flex items-center justify-center">
          <div className="bg-white w-full lg:w-2/3 px-14 py-14">
            <h2>
              <b>PRIVACY POLICY</b>
            </h2>
            <p className="mt-3 mb-3">
              <i>Last updated March 16, 2022</i>
              <br />
              Thank you for choosing to be part of our community at Casper
              Association ("Company", "we", "us", or "our"). We are committed to
              protecting your personal information and your right to privacy. If
              you have any questions or concerns about our policy, or our
              practices with regards to your personal information, please
              contact us at help@casper.network.
              <br />
              When you visit our website members.casper.network, and use our
              services, you trust us with your personal information. We take
              your privacy very seriously. In this privacy notice, we describe
              our privacy policy. We seek to explain to you in the clearest way
              possible what information we collect, how we use it and what
              rights you have in relation to it. We hope you take some time to
              read through it carefully, as it is important. If there are any
              terms in this privacy policy that you do not agree with, please
              discontinue use of our Sites and our services.
              <br />
              This privacy policy applies to all information collected through
              our website (such as members.casper.network), and/or any related
              services, sales, marketing or events (we refer to them
              collectively in this privacy policy as the "Sites").
              <br />
              Please read this privacy policy carefully as it will help you make
              informed decisions about sharing your personal information with
              us.
            </p>
            <h3 className="mt-5">
              <b>TABLE OF CONTENTS</b>
            </h3>
            <p className="mt-3 text-sm">
              WHAT INFORMATION DO WE COLLECT?
              <br />
              <br />
              WILL YOUR INFORMATION BE SHARED WITH ANYONE?
              <br />
              <br />
              DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
              <br />
              <br />
              HOW LONG DO WE KEEP YOUR INFORMATION?
              <br />
              <br />
              HOW DO WE KEEP YOUR INFORMATION SAFE?
              <br />
              <br />
              DO WE COLLECT INFORMATION FROM MINORS?
              <br />
              <br />
              WHAT ARE YOUR PRIVACY RIGHTS?
              <br />
              <br />
              CONTROLS FOR DO-NOT-TRACK FEATURES
              <br />
              <br />
              DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
              <br />
              <br />
              DO WE MAKE UPDATES TO THIS POLICY?
              <br />
              <br />
              HOW CAN YOU CONTACT US ABOUT THIS POLICY?
            </p>
            <h3 className="mt-5 mb-2">
              <b>1. WHAT INFORMATION DO WE COLLECT?</b>
            </h3>
            <p>
              Information collected from other sources
              <br />
              In Short: We may collect limited data from public databases,
              marketing partners, and other outside sources. We may obtain
              information about you from other sources, such as public
              databases, joint marketing partners, as well as from other third
              parties. Examples of the information we receive from other sources
              include: social media profile information; marketing leads and
              search results and links, including paid listings (such as
              sponsored links).
            </p>
            <h3 className="mt-5 mb-2">
              <b>2. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</b>
            </h3>
            <p>
              In Short:
              <br />
              We only share information with your consent, to comply with laws,
              to protect your rights, or to fulfill business Consent We may
              process your data if you have given us specific consent to use
              your personal information in a specific purpose.
              <br />
              <br />
              Legitimate Interests:
              <br />
              We may process your data when it is reasonably necessary to
              achieve our legitimate business interests.
              <br />
              <br />
              Performance of a Contract:
              <br />
              Where we have entered into a contract with you, we may process
              your personal information to fulfill the terms of our contract.
              <br />
              <br />
              Legal Obligations:
              <br />
              We may disclose your information where we are legally required to
              do so in order to comply with applicable law, governmental
              requests, a judicial proceeding, court order, or legal process,
              such as in response to a court order or a subpoena (including in
              response to public authorities to meet national security or law
              enforcement requirements).
              <br />
              <br />
              Vital Interests:
              <br />
              We may disclose your information where we believe it is necessary
              to investigate, prevent, or take action regarding potential
              violations of our policies, suspected fraud, situations involving
              potential threats to the safety of any person and illegal
              activities, or as evidence in litigation in which we are involved.
            </p>
            <p>
              More specifically, we may need to process your data or share your
              personal information in the following situations: Business
              Business Transfers. We may share or transfer your information in
              connection with, or during negotiations of, any merger, sale of
              company assets, financing, or acquisition of all or a portion of
              our business to another company. Third-Party Advertisers. We may
              use third-party advertising companies to serve ads when you visit
              the Sites. These companies may use information about your visits
              to our Website(s) and other websites that are contained in web
              cookies and other tracking technologies in order to provide
              advertisements about goods and services of interest to you.
            </p>

            <h3 className="mt-5 mb-2">
              <b>3. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</b>
            </h3>
            <p>
              In Short: We may use cookies and other tracking technologies to
              collect and store your information. We may use cookies and similar
              tracking technologies (like web beacons and pixels) to access or
              store information. Specific information about how we use such
              technologies and how you can refuse certain cookies is set out in
              our Cookie Policy.
            </p>
            <h3 className="mt-5 mb-2">
              <b>4. HOW LONG DO WE KEEP YOUR INFORMATION?</b>
            </h3>
            <p>
              In Short: We keep your information for as long as necessary to
              fulfill the purposes outlined in this privacy policy unless
              otherwise required by law. We will only keep your personal
              information for as long as it is necessary for the purposes set
              out in this privacy policy, unless a longer retention period is
              required or permitted by law (such as tax, accounting or other
              legal requirements). No purpose in this policy will require us
              keeping your personal information for longer than When we have no
              ongoing legitimate business need to process your personal
              information, we will either delete or anonymize it, or, if this is
              not possible (for example, because your personal information has
              been stored in backup archives), then we will securely store your
              personal information and isolate it from any further processing
              until deletion is possible.
            </p>
            <h3 className="mt-5 mb-2">
              <b>5. HOW DO WE KEEP YOUR INFORMATION SAFE?</b>
            </h3>
            <p>
              In Short: We aim to protect your personal information through a
              system of organizational and technical security measures. We have
              implemented appropriate technical and organizational security
              measures designed to protect the security of any personal
              information we process. However, please also remember that we
              cannot guarantee that the internet itself is 100% secure. Although
              we will do our best to protect your personal information,
              transmission of personal information to and from our Sites is at
              your own risk. You should only access the services within a secure
              environment.
            </p>
            <h3 className="mt-5 mb-2">
              <b>6. DO WE COLLECT INFORMATION FROM MINORS?</b>
            </h3>
            <p>
              In Short: We do not knowingly collect data from or market to
              children under 18 years of age. We do not knowingly solicit data
              from or market to children under 18 years of age. By using the
              Sites, you represent that you are at least 18 or that you are the
              parent or guardian of such a minor and consent to such minor
              dependent's use of the Sites. If we learn that personal
              information from users less than 18 years of age has been
              collected, we will deactivate the account and take reasonable
              measures to promptly delete such data from our records. If you
              become aware of any data we have collected from children under age
              18, please contact us at help@casper.network
            </p>
            <h3 className="mt-5 mb-2">
              <b>7. WHAT ARE YOUR PRIVACY RIGHTS?</b>
            </h3>
            <p>
              In Short: In some regions, such as the European Economic Area, you
              have rights that allow you greater access to and control over your
              personal information. You may review, change, or terminate your
              account at any time. In some regions (like the European Economic
              Area), you have certain rights under applicable data protection
              laws. These may include the right (i) to request access and obtain
              a copy of your personal information, (ii) to request rectification
              or erasure; (iii) to restrict the processing of your personal
              information; and (iv) if applicable, to data portability. In
              certain circumstances, you may also have the right to object to
              the processing of your personal information. To make such a
              request, please use the contact details provided below. We will
              consider and act upon any request in accordance with applicable
              data protection laws. If we are relying on your consent to process
              your personal information, you have the right to withdraw your
              consent at any time. Please note however that this will not affect
              the lawfulness of the processing before its withdrawal. If you are
              resident in the European Economic Area and you believe we are
              unlawfully processing your personal information, you also have the
              right to complain to your local data protection supervisory
              authority. You can find their contact details here:
              http://ec.europa.eu/justice/data-protection/bodies/authorities/
              Cookies and similar technologies: Most Web browsers are set to
              accept cookies by default. If you prefer, you can usually choose
              to set your browser to remove cookies and to reject cookies. If
              you choose to remove cookies or reject cookies, this could affect
              certain features or services of our Sites. To opt-out of
              interest-based advertising by advertisers on our Sites visit
              http://www.aboutads.info/choices/
            </p>
            <h3 className="mt-5 mb-2">
              <b>8. CONTROLS FOR DO-NOT-TRACK FEATURES</b>
            </h3>
            <p>
              Most web browsers and some mobile operating systems and mobile
              applications include a Do-Not-Track ("DNT") feature or setting you
              can activate to signal your privacy preference not to have data
              about your online browsing activities monitored and collected. No
              uniform technology standard for recognizing and implementing DNT
              signals has been finalized. As such, we do not currently respond
              to DNT browser signals or any other mechanism that automatically
              communicates your choice not to be tracked online. If a standard
              for online tracking is adopted that we must follow in the future,
              we will inform you about that practice in a revised version of
              this Privacy Policy.
            </p>
            <h3 className="mt-5 mb-2">
              <b>9. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</b>
            </h3>
            <p>
              In Short: Yes, if you are a resident of California, you are
              granted specific rights regarding access to your personal
              information. California Civil Code Section 1798.83, also known as
              the "Shine The Light" law, permits our users who are California
              residents to request and obtain from us, once a year and free of
              charge, information about categories of personal information (if
              any) we disclosed to third parties for direct marketing purposes
              and the names and addresses of all third parties with which we
              shared personal information in the immediately preceding calendar
              year. If you are a California resident and would like to make such
              a request, please submit your request in writing to us using the
              contact information provided below. If you are under 18 years of
              age, reside in California, and have a registered account with the
              Sites, you have the right to request removal of unwanted data that
              you publicly post on the Sites. To request removal of such data,
              please contact us using the contact information provided below,
              and include the email address associated with your account and a
              statement that you reside in California. We will make sure the
              data is not publicly displayed on the Sit not be completely or
              comprehensively removed from our systems.
            </p>
            <h3 className="mt-5 mb-2">
              <b>10. DO WE MAKE UPDATES TO THIS POLICY?</b>
            </h3>
            <p>
              In Short: Yes, we will update this policy as necessary to stay
              compliant with relevant laws. We may update this privacy policy
              from time to time. The updated version will be indicated by an
              updated "Revised" date and the updated version will be effective
              as soon as it is accessible. If we make material changes to this
              privacy policy, we may notify you either by prominently posting a
              notice of such changes or by directly sending you a notification.
              We encourage you to review this privacy policy frequently to be
              informed of how we are protecting your information. 11. HOW CAN
              YOU CONTACT US ABOUT THIS POLICY? If you have questions or
              comments about this policy, you may email us at
              help@casper.network.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen(PrivacyPolicy, 'public');
