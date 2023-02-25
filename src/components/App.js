import React from "react";
import Header from "./Header";
import LandingPage from "./LandingPage";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function App() {
  return (
    <>
    <GoogleReCaptchaProvider siteKey="6LdHppIhAAAAACIgfG5VznVA_6V1aMpYJYZB2iRT">
    <div className="navbar">
      <Header />
    </div>
    <div>
      <LandingPage />
    </div>
    </GoogleReCaptchaProvider>
  </>
  );

}

export default App;
