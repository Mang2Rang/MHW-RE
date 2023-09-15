import styled from "styled-components";
import { Home } from "./components/Menu/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
`;
const Content = styled.div``;

export function Router() {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Content></Content>
        </Container>
      </BrowserRouter>
    </>
  );
}
