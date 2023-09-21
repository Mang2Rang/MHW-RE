import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { NavItem } from "./NavItem";
import bgImg from "../Img/bg_page.jpg";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: beige;
  display: flex;
  position: relative;
  /* background: url("http://monsterhunterworld.com/images/common/bg_gnavi.jpg")
    no-repeat 0 0; */
  background: url(${bgImg}) no-repeat 0 0;
  background-size: cover;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-size: 0.8rem;
  line-height: 1.5;
  letter-spacing: 0.1rem;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
`;

const Inner = styled.div`
  border-bottom: 1px solid #565353;
  padding-top: 10px;
  margin-left: 42px;
`;

const Ul = styled.ul`
  list-style: none;
`;
const Li = styled.li`
  transform: translate(0px, 0px);
  opacity: 1;
  transition: all 400ms;
  margin-bottom: 0.5rem;
`;

export function NavPage() {
  return (
    <>
      <Container>
        <Content>
          <Inner>
            <Ul>
              <Li>
                <h1>메인 페이지</h1>
              </Li>
              <Li></Li>
            </Ul>
          </Inner>
          <Inner>
            <Ul>
              <Li>
                <h1>미디어</h1>
              </Li>
              <Li></Li>
            </Ul>
          </Inner>
          <Inner>
            <Ul>
              <Li>
                <h1>소개</h1>
              </Li>
              <Li>
                <h1>생태계</h1>
              </Li>
              <Li>
                <h1>헌팅</h1>
              </Li>
              <Li>
                <h1>조사거점</h1>
              </Li>
            </Ul>
          </Inner>
          <Inner>
            <Ul>
              <Li>
                <h1>콜라보레이션</h1>
              </Li>
              <Li>
                <h1>이벤트 퀘스트 스케쥴</h1>
              </Li>
            </Ul>
          </Inner>
          <Inner>
            <Ul>
              <Li>
                <h1>제품 정보</h1>
              </Li>
            </Ul>
          </Inner>
        </Content>
      </Container>
    </>
  );
}
