import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import EmojiDisplayList from "@/components/rolling/emoji-display-list";
import {
  CardImgWrapper,
  CardListLayout,
  SwiperWrapper,
  CardWrapper,
  CustomH3,
  EmojiWrapper,
} from "@/styles/list-page-styles";

export function CardList({ title, userList }) {
  return (
    <>
      <CardListLayout>
        <CustomH3>{title}</CustomH3>
        {userList.length === 0 ? (
          <div>작성된 롤링페이퍼가 없습니다! 직접 만들어 보세요.</div>
        ) : (
          <SwiperWrapper>
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={4}
              slidesPerGroup={4}
              navigation
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 10,
                },
                640: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                  spaceBetween: 20,
                },
              }}
            >
              {userList.map((it) => {
                return (
                  <SwiperSlide key={it.id}>
                    <CardWrapper
                      bg={it.backgroundColor}
                      bgImg={it.backgroundImageURL}
                    >
                      <CustomH3>To. {it.name}</CustomH3>
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
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </SwiperWrapper>
        )}
      </CardListLayout>
    </>
  );
}
