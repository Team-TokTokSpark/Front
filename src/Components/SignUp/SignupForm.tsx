import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import formRequirements from "../../Constants/formRequirements";
import type { userInformationProps } from "../../Constants/interfaces";
import * as S from "../../Styles/SignUpPageStyle";
import { postUserProfile } from "../../Services/Profile/api";
import { useRecoilState, useRecoilValue } from "recoil";
import { userInformationState, authTokenState } from "../../atom";
const { nicknameRequirements, introduceRequirements } = formRequirements;

const SignupForm = () => {
  const [userInformation, setUserInformation] =
    useRecoilState(userInformationState);
  const token = useRecoilValue(authTokenState);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<userInformationProps>({});
  const navigate = useNavigate();

  const { nickname, introduce } = watch();

  const onSubmitHandler: SubmitHandler<userInformationProps> = async (data) => {
    await postUserProfile(
      userInformation.userId,
      data.nickname,
      data.introduce,
      token
    );
    setUserInformation({
      userId: userInformation.userId,
      nickname: data.nickname,
      introduce: data.introduce,
    });
    navigate(`/main/${userInformation.userId}`);
  };

  return (
    <>
      <h2>
        함플리에서 사용할 <span>닉네임</span>과 <span>소개글</span>을
        입력해주세요
      </h2>
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
        {nickname && introduce ? <button type="submit">다음</button> : <></>}
      </S.Form>
    </>
  );
};

export default SignupForm;
