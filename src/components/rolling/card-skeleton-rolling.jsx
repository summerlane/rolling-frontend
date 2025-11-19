import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
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
  width: 56px;
  height: 56px;
  border-radius: 50%;
`;

const SkeletonWrapper = styled.div`
  margin-top: 120px;
`;

const SkeletonScrollArea = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const SkeletonCard = styled.div`
  width: 384px;
  height: 280px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 30px 24px 20px;
  background: white;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.07);

  ${media.medium`
    width: 360px;
    height: 280px;
  `}

  ${media.small`
    width: 360px;
    height: 280px;
  `}
`;

export default function CardSkeletonRolling() {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const updateCount = () => {
      const width = window.innerWidth;

      if (width >= 1024) {
        setCount(3);
      } else if (width >= 600) {
        setCount(2);
      } else {
        setCount(1);
      }
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  return (
    <SkeletonWrapper>
      <SkeletonScrollArea>
        {Array.from({ length: count }).map((_, i) => (
          <SkeletonCard key={i}>
            <SkeletonCircle />
            <SkeletonText $width="100%" $marginTop="20px" />
            <SkeletonText $width="100%" $marginTop="20px" />
            <SkeletonText $width="100%" $marginTop="20px" />
          </SkeletonCard>
        ))}
      </SkeletonScrollArea>
    </SkeletonWrapper>
  );
}
