import { Link, useLocation } from "react-router";
import styled from "styled-components";
import logo from "@/assets/icons/logo.svg";
import Button from "@/components/common/button";
import media from "@/styles/media";

const ContainWrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  border-bottom: 1px solid #ededed;
  z-index: 1003;

  ${(props) =>
    props.$isRollingPage &&
    media.small`
    display: none;
  `}
`;

const Contain = styled.div`
  max-width: 1248px;
  margin: 0 auto;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
  margin: 0 24px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Title = styled.h3`
  padding: 20px 0;
`;

const ButtonWrapper = styled.div`
  margin-left: auto;
`;

export default function Header({ showButton }) {
  const location = useLocation();
  const isRollingPage = location.pathname.startsWith("/post/");

  return (
    <>
      <ContainWrapper $isRollingPage={isRollingPage}>
        <Contain>
          <HeaderWrapper>
            <Link to="/">
              <LogoWrapper>
                <img src={logo} alt="로고" />
                <Title>Rolling</Title>
              </LogoWrapper>
            </Link>
            {showButton && (
              <ButtonWrapper>
                <Link to="/post">
                  <Button variant="outlined" size="medium">
                    롤링 페이퍼 만들기
                  </Button>
                </Link>
              </ButtonWrapper>
            )}
          </HeaderWrapper>
        </Contain>
      </ContainWrapper>
    </>
  );
}
