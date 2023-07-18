import styled from "styled-components";

export const MakeBodyWrapper = styled.div`
  width: 90%;
  height: 90%;
  margin: auto;
  position: relative;
  top: 5%;
`;

export const TitleMakeWrapper = styled.div`
  width: 310px;
  height: 105px;
  margin: 50px auto;
`;

export const Title = styled.div`
  background-color: transparent;
  border-bottom: solid 1px white;
  width: 300px;
  height: 24px;
  font-weight: 700;
  line-height: 24px;
  font-size: 20px;
  color: white;
  margin: 10px auto;
`;

export const UnableTitle = styled.div`
  background-color: transparent;
  border-bottom: solid 1px rgba(87, 87, 87, 0.2);
  width: 300px;
  height: 24px;
  font-weight: 700;
  line-height: 24px;
  font-size: 20px;
  color: rgba(87, 87, 87, 0.2);
  margin: 10px auto;
`;

export const TitleInput = styled.input`
  /* display: flex;
  align-items: center; */
  width: 290px;
  padding: 10px 15px;
  gap: 5px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 10px auto;
  border-color: transparent;
  color: rgba(87, 87, 87, 0.2);
  font-size: 18px;
  font-weight: 700;
`;

export const DateInput = styled.div`
  /* display: flex;
  align-items: center; */
  width: 290px;
  padding: 12px 15px;
  gap: 5px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  margin: 20px 0px;
  border-color: transparent;
  color: rgba(87, 87, 87, 0.2);
  font-size: 18px;
  font-weight: 700;
`;

export const ToggleWrapper = styled.div`
  width: 282px;
  height: 41px;
  margin: 40px auto;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const ToggleButtonClick = styled.button`
  width: 141px;
  height: 41px;
  padding: 10px;
  gap: 10px;
  border-radius: 20px;
  color: white;
  font-weight: 700;
  font-size: 18px;
  border-color: white;
  background-color: rgba(54, 70, 128, 0.8);
`;

export const ToggleButtonUnClick = styled.button`
  width: 141px;
  height: 41px;
  padding: 10px;
  gap: 10px;
  border-radius: 20px;
  color: rgba(77, 77, 77, 0.2);
  font-weight: 700;
  font-size: 18px;
  background-color: transparent;
  border-color: transparent;
`;
