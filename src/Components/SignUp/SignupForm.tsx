import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import formRequirements from "../../Constants/formRequirements";
import type { userInformationProps } from "../../Constants/interfaces";
import * as S from "../../Styles/SignUpPageStyle";
import { patchUserProfile } from "../../Services/Profile/api";

const { nicknameRequirements, introduceRequirements } = formRequirements;

const SignupForm = (props: any) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<userInformationProps>({});
  const navigate = useNavigate();

  const { nickname, introduce } = watch();

  const onSubmitHandler: SubmitHandler<userInformationProps> = async (data) => {
    await patchUserProfile(data.nickname, data.introduce);
    navigate("/main");
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
