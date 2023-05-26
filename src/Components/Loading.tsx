import React from "react";
import { Audio } from "react-loader-spinner";
import { LoadingContainer } from "../Styles/LoadingStyle";

const Loading = () => {
  return (
    <LoadingContainer>
      <Audio
        height="60"
        width="60"
        color="#FFF"
        ariaLabel="audio-loading"
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
        visible={true}
      />
    </LoadingContainer>
  );
};
export default Loading;
