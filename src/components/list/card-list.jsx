import EmojiDisplayList from "@/components/rolling/emoji-display-list";
import {
  CardImgWrapper,
  CardListLayout,
  CardListWrapper,
  CardWrapper,
  EmojiWrapper,
} from "@/styles/list-page-styles";

export function CardList({ title, userList }) {
  return (
    <>
      <CardListLayout>
        <div>{title}</div>
        <CardListWrapper>
          {userList.length === 0 ? (
            <div>작성된 롤링페이퍼가 없습니다! 직접 만들어 보세요.</div>
          ) : (
            userList.map((it) => {
              return (
                <CardWrapper
                  key={it.id}
                  bg={it.backgroundColor}
                  bgImg={it.backgroundImageURL}
                >
                  <h3>To. {it.name}</h3>
                  <CardImgWrapper>
                    {it.recentMessages.map((it) => (
                      <img src={it.profileImageURL} key={it.id} />
                    ))}
                  </CardImgWrapper>
                  <p>{it.messageCount}명이 작성했어요!</p>
                  <EmojiWrapper>
                    <EmojiDisplayList emojis={it.topReactions} />
                  </EmojiWrapper>
                </CardWrapper>
              );
            })
          )}
        </CardListWrapper>
      </CardListLayout>
    </>
  );
}
