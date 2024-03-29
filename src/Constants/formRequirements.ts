export const nicknameRequirements = {
  required: {
    value: true,
    message: "닉네임을 입력해 주세요!",
  },
  minLength: {
    value: 1,
    message: "닉네임을 1자이상 입력해 주세요!",
  },
  maxLength: {
    value: 10,
    message: "닉네임을 10자이하로 입력해 주세요!",
  },
};

export const introduceRequirements = {
  required: {
    value: true,
    message: "자기소개를 입력해 주세요!",
  },
  maxLength: {
    value: 20,
    message: "자기소개를 30자이하로 입력해 주세요!",
  },
};

const formRequirements = {
  nicknameRequirements,
  introduceRequirements,
};

export default formRequirements;
