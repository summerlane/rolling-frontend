import styled, { keyframes } from "styled-components";
import media from "@/styles/media";

const skeletonLoading = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const Skeleton = styled.div`
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 37%, #f0f0f0 63%);
  background-size: 400% 100%;
  animation: ${skeletonLoading} 1.4s ease infinite;
  border-radius: 8px;
`;

const SkeletonText = styled(Skeleton)`
  height: 16px;
  width: ${(props) => props.$width || "100%"};
  margin-bottom: 8px;
  margin-top: ${(props) => props.$marginTop || 0};
`;

const SkeletonCircle = styled(Skeleton)`
  width: 28px;
  height: 28px;
  margin-left: ${(props) => props.$marginLeft || 0};
  border-radius: 50%;
`;

const SkeletonWrapper = styled.div`
  margin-top: 50px;
`;

const SkeletonTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
  padding-left: 20px;
`;

const SkeletonScrollArea = styled.div`
  display: flex;
  gap: 12px;
  padding: 0 20px;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SkeletonCard = styled.div`
  flex: 0 0 275px;
  height: 260px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 30px 24px 20px;
  background: white;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);

  ${media.small`
    flex: 0 0 208px;
  `}
`;

const SkeletonProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 12px;
`;

export default function CardSkeletonList({ title }) {
  return (
    <SkeletonWrapper>
      <SkeletonTitle>{title}</SkeletonTitle>
      <SkeletonScrollArea>
        {[1, 2, 3, 4].map((n) => (
          <SkeletonCard key={n}>
            <div>
              <SkeletonText $width="60%" />
              <SkeletonProfileWrapper>
                <SkeletonCircle />
                <SkeletonCircle $marginLeft="-14px" />
                <SkeletonCircle $marginLeft="-14px" />
              </SkeletonProfileWrapper>
              <SkeletonText $width="40%" $marginTop="20px" />
            </div>
            <SkeletonText $width="70%" $marginTop="20px" />
          </SkeletonCard>
        ))}
      </SkeletonScrollArea>
    </SkeletonWrapper>
  );
}
