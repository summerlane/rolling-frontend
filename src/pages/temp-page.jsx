import Button from "@/components/common/button";
import { Link } from "react-router";
import styled from "styled-components";

const Contain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 5% auto;
`;

const CustomButton = styled(Button)`
  width: 200px;
  padding: 10%;
`;
export default function TempPage() {
  return (
    <Contain>
      <Link to="/main">
        <CustomButton size="large">메인 페이지</CustomButton>
      </Link>
      <Link to="/list">
        <CustomButton size="large">리스트 페이지</CustomButton>
      </Link>
      <Link to="/post-user">
        <CustomButton size="large">롤페 페이지</CustomButton>
      </Link>
      <Link to="/post">
        <CustomButton size="large">롤페 생성 페이지</CustomButton>
      </Link>
      <Link to="/message-page">
        <CustomButton size="large">롤페 메시지 페이지</CustomButton>
      </Link>
      <Link to="/test-page">
        <CustomButton variant="secondary" size="large">
          테스트 페이지
        </CustomButton>
      </Link>
      <Link to="/toast-test-page">
        <CustomButton variant="secondary" size="large">
          toast 테스트 페이지
        </CustomButton>
      </Link>
    </Contain>
  );
}
