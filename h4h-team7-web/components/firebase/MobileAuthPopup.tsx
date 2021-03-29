import React from "react";
import ReactDOM from "react-dom";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import * as firebaseui from "firebaseui";
import { config, firebase } from "../../store/firebase";

export type AuthResult = {
  additionalUserInfo: {
    providerId: string; // "phone"
    isNewUser: boolean;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  credential: any | undefined;
  operationType: string; // "signIn"
  user: {
    displayName?: string;
    phoneNumber?: string;
    uid: string;
  };
};

const uiConfig: firebaseui.auth.Config = {
  signInFlow: "popup", // Popup vs redirect
  callbacks: {
    signInSuccessWithAuthResult: () => false,
  },
  signInOptions: [firebase.auth.PhoneAuthProvider.PROVIDER_ID],
};

// const PopupBackground = styled.div`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   right: 0;
//   left: 0;
//   width: 100vw;
//   right: 100vh;
//   background-color: rgba(85, 85, 85, 0.5);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   z-index: 3;
// `;

const MobileAuthPopup: React.FC<{}> = () => {
  return (
    <div onClick={(e) => e.stopPropagation()}>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
};

export default MobileAuthPopup;
