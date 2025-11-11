import styled from "styled-components";
import Button from "@/components/common/button";
import { useToast } from "@/hooks/use-toast";

const Container = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default function ToastTestPage() {
  const toast = useToast();

  return (
    <Container>
      <h1>Toast 테스트 페이지 (5초 후 자동 사라짐)</h1>
      <Button onClick={() => toast.success("URL이 복사 되었습니다.")}>
        Completed Toast
      </Button>
      <Button onClick={() => toast.delete("삭제 되었습니다.")}>
        Delete Toast
      </Button>
    </Container>
  );
}
