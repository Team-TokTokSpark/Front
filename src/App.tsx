import router from "./Router";
import { GlobalStyle } from "./Css/GlobalStyle";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
