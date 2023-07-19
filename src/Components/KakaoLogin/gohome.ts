export const gohome = (token: string, information: string | object) => {
  if (token === "" || information === "") {
    alert("로그인을 해주세요");
    return false;
  } else return true;
};
