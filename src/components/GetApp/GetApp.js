import React from "react";
import "./GetApp.scss";
import android from "../../images/android.svg";
import ios from "../../images/ios.svg";

const GetApp = () => {
   return (
      <div className="get-app-section">
         <div className="container">
            <div className="header-text text-center">
               <h3>get our app on</h3>
               <p>Download the app from both play and app store</p>
            </div>
            <div className="app-box text-center">
               <img src={android} alt="" />
               <img src={ios} alt="" />
            </div>
         </div>
      </div>
   );
};

export default GetApp;
