import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import * as S from "../Styles/SignUpPageStyle";
import formRequirements from "../Constants/formRequirements";

interface userInformationProps {
  nickname: string;
  introduce: string;
}

const { nicknameRequirements, introduceRequirements } = formRequirements;

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<userInformationProps>({});
  const navigate = useNavigate();
  const { nickname, introduce } = watch();
  const onSubmitHandler: SubmitHandler<userInformationProps> = (data) => {
    console.log(data);
    navigate("/");
  };

  return (
    <>
      <S.LoginContainer>
        <S.MainContainer>
          <h2>함플리에서 사용할 닉네임과 소개글을 입력해주세요</h2>
          <S.Form onSubmit={handleSubmit(onSubmitHandler)}>
            <label>
              <span>닉네임</span>
              <input
                type="text"
                {...register("nickname", nicknameRequirements)}
                placeholder="닉네임을 입력하세요."
              />
            </label>
            {errors.nickname && <p>{errors.nickname.message}</p>}
            <label>
              <span>자기소개</span>
              <input
                type="text"
                {...register("introduce", introduceRequirements)}
                placeholder="자기소개를 입력하세요."
              />
            </label>
            {errors.introduce && <p>{errors.introduce.message}</p>}
            {nickname && introduce ? (
              <button type="submit">다음</button>
            ) : (
              <></>
            )}
          </S.Form>
        </S.MainContainer>
      </S.LoginContainer>
    </>
  );
};

export default SignUpPage;
