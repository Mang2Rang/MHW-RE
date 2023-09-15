import { createGlobalStyle } from "styled-components";
import { Home } from "./components/Menu/Home";

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
