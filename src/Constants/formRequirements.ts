export const nicknameRequirements = {
  required: {
    value: true,
    message: "닉네임을 입력해 주세요!",
  },
  minLength: {
    value: 5,
    message: "닉네임을 5자이상 입력해 주세요!",
  },
};

export const introduceRequirements = {
  required: {
    value: true,
    message: "자기소개를 입력해 주세요!",
  },
};

const formRequirements = {
  nicknameRequirements,
  introduceRequirements,
};

export default formRequirements;
