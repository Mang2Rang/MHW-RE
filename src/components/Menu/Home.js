import styled from "styled-components";

const Video = styled.video`
  width: 100%;
  height: 100%;
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export function Home() {
  return (
    <>
      <Container>
        <Video src="//youtu.be/SSZV5ma5PvQ" />
        <Img src="./public/bg_page.png" />
        <h1>Home</h1>
      </Container>
    </>
  );
}
