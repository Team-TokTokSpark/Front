import SignupForm from "../Components/SignUp/SignupForm";
import * as S from "../Styles/SignUpPageStyle";

const SignUpPage = () => {
  return (
    <>
      <S.LoginContainer>
        <S.MainContainer>
          <SignupForm />
        </S.MainContainer>
      </S.LoginContainer>
    </>
  );
};

export default SignUpPage;
