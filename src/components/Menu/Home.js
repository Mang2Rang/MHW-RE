import ReactPlayer from "react-player";
import styled from "styled-components";
import mainImg from "../Img/title.png";
import { MenuBar } from "./MenuBar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
`;

const PlayerWrapper = styled.div`
  pointer-events: none;
  width: 100%;
  height: 100%;
`;

const Img = styled.img`
  display: flex;
  position: absolute;
  width: 35%;
  height: auto;
  top: 18%;
  left: 35%;
`;

export function Home() {
  function onClick(e) {
    const a = 1;
    console.log(a);
  }
  return (
    <>
      <Container>
        <div onClick={() => console.log("click")}>
          <MenuBar />
        </div>
        <Img src={mainImg}></Img>
        <PlayerWrapper>
          <ReactPlayer
            url={"//youtu.be/SSZV5ma5PvQ"}
            width="100%"
            height="100%"
            loop={true}
            playing={true}
            muted={true}
            controls={false}
          />
        </PlayerWrapper>
      </Container>
    </>
  );
}
