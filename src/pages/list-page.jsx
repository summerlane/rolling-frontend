import { useEffect, useState } from "react";
import { getRecipients } from "@/api/list-user-api";
import {
  ButtonLink,
  CustomButton,
  PageContainer,
} from "@/styles/list-page-styles";
import { CardList } from "@/components/list/card-list";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export default function ListPage() {
  const [likePaper, setLikePaper] = useState([]);
  const [recentPaper, setRecentPaper] = useState([]);
  const [likeNextUrl, setLikeNextUrl] = useState(null);
  const [recentNextUrl, setRecentNextUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipients = async () => {
      try {
        setIsLoading(true);
        const likeData = await getRecipients({
          url: `${baseURL}/recipients/?sort=like`,
        });
        const recentData = await getRecipients({
          url: `${baseURL}/recipients/`,
        });
        setLikePaper(likeData.results);
        setLikeNextUrl(likeData.next);
        setRecentPaper(recentData.results);
        setRecentNextUrl(recentData.next);
      } catch (err) {
        console.error("recipients 가져오기 실패:", err);
        setError("데이터를 불러오는데 실패했습니다.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchRecipients();
  }, []);

  const fetchMoreLike = async () => {
    if (!likeNextUrl) return;
    try {
      const nextData = await getRecipients({ url: likeNextUrl });
      setLikePaper((prev) => [...prev, ...nextData.results]);
      setLikeNextUrl(nextData.next);
    } catch (err) {
      console.error("추가 데이터 로드 실패:", err);
    }
  };

  const fetchMoreRecent = async () => {
    if (!recentNextUrl) return;
    try {
      const nextData = await getRecipients({ url: recentNextUrl });
      setRecentPaper((prev) => [...prev, ...nextData.results]);
      setRecentNextUrl(nextData.next);
    } catch (err) {
      console.error("추가 데이터 로드 실패:", err);
    }
  };

  if (isLoading) {
    return <PageContainer>로딩 중...</PageContainer>;
  }

  if (error) {
    return <PageContainer>{error}</PageContainer>;
  }

  return (
    <PageContainer>
      <CardList
        title="인기 롤링 페이퍼 🔥"
        userList={likePaper}
        onLoadMore={fetchMoreLike}
        nextCheck={likeNextUrl}
      />
      <CardList
        title="최근에 만든 롤링 페이퍼 ⭐️"
        userList={recentPaper}
        onLoadMore={fetchMoreRecent}
        nextCheck={recentNextUrl}
      />
      <ButtonLink to="/post">
        <CustomButton size="large">나도 만들어보기</CustomButton>
      </ButtonLink>
    </PageContainer>
  );
}
