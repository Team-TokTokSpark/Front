import { useState } from "react";

import SignupForm from "../Components/SignUp/SignupForm";
import SpotifyLink from "../Components/SignUp/SpotifyLink";
import * as S from "../Styles/SignUpPageStyle";

const SignUpPage = () => {
  const [step, setStep] = useState<number>(1);

  const spotifyLinkStep = <SpotifyLink />;
  const stepHandler = () => {
    setStep(2);
  };
  let stepByView = <SignupForm onStepHandler={stepHandler} />;
  if (step === 2) {
    stepByView = spotifyLinkStep;
  }

  return (
    <>
      <S.LoginContainer>
        <S.MainContainer>{stepByView}</S.MainContainer>
      </S.LoginContainer>
    </>
  );
};

export default SignUpPage;
