export const nicknameRequirements = {
  required: {
    value: true,
    message: "닉네임을 입력해 주세요!",
  },
  minLength: {
    value: 2,
    message: "닉네임을 2자이상 입력해 주세요!",
  },
  maxLength: {
    value: 8,
    message: "닉네임을 8자이하로 입력해 주세요!",
  },
};

export const introduceRequirements = {
  required: {
    value: true,
    message: "자기소개를 입력해 주세요!",
  },
  maxLength: {
    value: 30,
    message: "닉네임을 30자이하로 입력해 주세요!",
  },
};

const formRequirements = {
  nicknameRequirements,
  introduceRequirements,
};

export default formRequirements;
