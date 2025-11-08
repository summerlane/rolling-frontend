import { Link } from "react-router";
import styled from "styled-components";
import logo from "@/assets/icons/logo.svg";
import Button from "@/components/common/button";

const ContainWrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: white;
  border-bottom: 1px solid #ededed;
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

const ButtonWrapper = styled.div`
  margin-left: auto;
`;

export default function Header({ showButton }) {
  return (
    <>
      <ContainWrapper>
        <Contain>
          <HeaderWrapper showButton={showButton}>
            <Link to="/">
              <LogoWrapper>
                <img src={logo} alt="로고" />
                <h3>Rolling</h3>
              </LogoWrapper>
            </Link>
            {showButton && (
              <ButtonWrapper>
                <Link to="/post-page">
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
