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

  useEffect(() => {
    const fetchRecipients = async () => {
      try {
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
      } catch (error) {
        console.error("recipients 가져오기 실패:", error);
      }
    };
    fetchRecipients();
  }, []);

  const fetchMoreLink = async () => {
    if (!likeNextUrl) return;
    const nextData = await getRecipients({ url: likeNextUrl });
    setLikePaper((prev) => [...prev, ...nextData.results]);
    setLikeNextUrl(nextData.next);
  };

  const fetchMoreRecent = async () => {
    if (!recentNextUrl) return;
    const nextData = await getRecipients({ url: recentNextUrl });
    setRecentPaper((prev) => [...prev, ...nextData.results]);
    setRecentNextUrl(nextData.next);
  };

  return (
    <PageContainer>
      <CardList
        title="인기 롤링 페이퍼 🔥"
        userList={likePaper}
        onLoadMore={fetchMoreLink}
      />
      <CardList
        title="최근에 만든 롤링 페이퍼 ⭐️"
        userList={recentPaper}
        onLoadMore={fetchMoreRecent}
      />
      <ButtonLink to="/post">
        <CustomButton size="large">나도 만들어보기</CustomButton>
      </ButtonLink>
    </PageContainer>
  );
}
