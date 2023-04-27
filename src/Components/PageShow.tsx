import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerPage, ContainerWrapper } from "../Styles/HomePageStyle";

function PageShow() {
  const [test, setTest] = useState([
    ["hello", "mingle"],
    ["niceTo", "my"],
    ["music", "nina"],
    ["music", "emily"],
    ["music1", "emily"],
    ["music", "brandon"],
    ["great", "hailey"],
    ["music", "my"],
    ["wow", "sandy"],
    ["music", "nina"],
    ["Happy", "mike"],
    ["music", "my"],
    ["music", "mike"],
    ["music", "brandon"],
  ]);
  const navigate = useNavigate();
  return (
    <>
      <ContainerWrapper>
        {test.map((e) => {
          if (e[1].includes("my")) {
            return (
              <ContainerPage
                onClick={() => {
                  navigate(`page/myMusic/${e[0]}`, {
                    state: {
                      userId: e[1],
                      pageName: e[0],
                    },
                  });
                }}
              >
                {e[0]}
              </ContainerPage>
            );
          } else {
            return (
              <ContainerPage
                onClick={() => {
                  navigate(`page/otherMusic/${e[0]}`, {
                    state: {
                      userId: e[1],
                      pageName: e[0],
                    },
                  });
                }}
              >
                {e[0]}
              </ContainerPage>
            );
          }
        })}
      </ContainerWrapper>
    </>
  );
}

export default PageShow;
