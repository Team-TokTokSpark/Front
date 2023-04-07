import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerPage, ContainerWrapper } from "../Styles/HomePageStyle";

function PageShow() {
  const [test, setTest] = useState([
    "my1",
    "my2",
    "other3",
    "my4",
    "other3",
    "other5",
    "other7",
    "my8",
    "other9",
    "my10",
    "other11",
    "my12",
    "my13",
    "my14",
  ]);
  const navigate = useNavigate();
  return (
    <>
      <ContainerWrapper>
        {test.map((e) => {
          if (e.includes("my")) {
            return (
              <ContainerPage
                onClick={() => {
                  navigate(`page/myMusic/${e}`, {
                    state: {
                      userId: e,
                    },
                  });
                }}
              >
                {e}
              </ContainerPage>
            );
          } else {
            return (
              <ContainerPage
                onClick={() => {
                  navigate(`page/otherMusic/${e}`, {
                    state: {
                      userId: e,
                    },
                  });
                }}
              >
                {e}
              </ContainerPage>
            );
          }
        })}
      </ContainerWrapper>
    </>
  );
}

export default PageShow;
