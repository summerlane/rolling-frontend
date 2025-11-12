import { Link } from "react-router";
import { useEffect, useState } from "react";
import { getRecipients } from "@/api/list-user-api";

import {
  BottomWrapper,
  CustomButton,
  PageContainer,
} from "@/styles/list-page-styles";
import { CardList } from "@/components/list/card-list";

const UI_PAGE_SIZE = 4;

export default function ListPage() {
  const [likePaper, setLikePaper] = useState([]);
  const [recentPaper, setRecentPaper] = useState([]);

  useEffect(() => {
    const fetchRecipients = async () => {
      try {
        const likeData = await getRecipients({
          limit: 4,
          offset: 0,
          sort: "like",
        });
        const recentData = await getRecipients({
          limit: 4,
          offset: 0,
          sort: "",
        });
        console.log("likeData:", likeData);
        setLikePaper(likeData.results);
        setRecentPaper(recentData.results);
      } catch (error) {
        console.error("recipients 가져오기 실패:", error);
      }
    };

    fetchRecipients();
  }, []);

  return (
    <PageContainer>
      <CardList title="인기 롤링 페이퍼 🔥" userList={likePaper} />
      <CardList title="최근에 만든 롤링 페이퍼 ⭐️" userList={recentPaper} />
      <BottomWrapper>
        <Link to="/post">
          <CustomButton size="large">나도 만들어보기</CustomButton>
        </Link>
      </BottomWrapper>
    </PageContainer>
  );
}
