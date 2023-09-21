import styled from "styled-components";

const BTNAVI = styled.div`
  background: url("http://monsterhunterworld.com/images/common/bg_gnavi_btn.png")
    no-repeat 0 0;
  /* background: url("./Img/navi_btn.png") no-repeat 0 0; */
  background-size: 80px 86px;
  width: 80px;
  height: 86px;
  position: fixed;
  bottom: 10px;
  left: 50%;
  z-index: 998;
  display: flex;
  cursor: pointer;
`;
const Title = styled.div`
  position: absolute;
  display: flex;
  font-size: 12px;
  top: 13px;
  left: 50%;
  margin-left: -15px;
  color: white;
`;
const Border1 = styled.span`
  display: inline-block;
  position: absolute;
  top: 33px;
  left: 50%;
  margin-left: -16px;
  width: 32px;
  height: 2px;
  background-color: #fff;
  border-radius: 4px;
  transition: all 0.4s;
  &active {
    transform: translateY(-2px) rotate() (-45deg);
    top: 29px;
  }
`;
const Border2 = styled.span`
  display: inline-block;
  position: absolute;
  top: 39px;
  left: 50%;
  margin-left: -16px;
  width: 32px;
  height: 2px;
  background-color: #fff;
  border-radius: 4px;
  transition: all 0.4s;
  &active {
    transform: translateY(-7px) rotate(45deg);
    top: 34px;
  }
`;

export function MenuBar() {
  function onClick() {
    const a = 1;
    console.log(a);
  }
  return (
    <>
      <BTNAVI>
        <div onClick={onClick}></div>
        <Title>Menu</Title>
        <Border1 />
        <Border2 />
      </BTNAVI>
    </>
  );
}
