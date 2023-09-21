import { createGlobalStyle } from "styled-components";
import { Home } from "./components/Menu/Home";
import { NavPage } from "./components/Menu/NavPage";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
`;
export default function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}
