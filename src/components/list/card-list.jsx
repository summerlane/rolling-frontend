import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router";
import "swiper/css";
import "swiper/css/navigation";
import EmojiDisplayList from "@/components/rolling/emoji-display-list";
import {
  CardImgWrapper,
  CardListLayout,
  SwiperWrapper,
  CardWrapper,
  EmojiWrapper,
  WriterCountText,
  ProfileCount,
  EmptySection,
  Title,
  ReceiverName,
} from "@/styles/list-page-styles";

export function CardList({ title, userList, onLoadMore, nextCheck }) {
  const isDesktop = window.innerWidth >= 1024;
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/rolling/${id}`);
  };

  const handleLoadMore = async () => {
    if (!onLoadMore || !nextCheck) return;
    await onLoadMore();
  };

  return (
    <>
      <CardListLayout>
        <Title>{title}</Title>
        {userList.length === 0 ? (
          <EmptySection>
            아직 작성된 롤링 페이퍼가 없습니다.
            <br />
            새로운 롤링 페이퍼를 만들어 보세요!
          </EmptySection>
        ) : (
          <SwiperWrapper className={nextCheck ? "" : "end-of-list"}>
            <Swiper
              modules={[Navigation]}
              onReachEnd={() => {
                if (!isDesktop) return;
                handleLoadMore();
              }}
              onSlideChange={(swiper) => {
                if (isDesktop) return;
                const current = swiper.activeIndex;
                const last = swiper.slides.length - 1;
                if (current >= last - 2) {
                  handleLoadMore();
                }
              }}
              navigation={true}
              allowTouchMove={!isDesktop}
              slidesPerView="auto"
              slidesPerGroup={1}
              spaceBetween={12}
              slidesOffsetBefore={20}
              slidesOffsetAfter={20}
              breakpoints={{
                600: {
                  slidesOffsetBefore: 24,
                  slidesOffsetAfter: 24,
                },
                1024: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                  spaceBetween: 20,
                  allowTouchMove: false,
                  slidesOffsetBefore: 0,
                  slidesOffsetAfter: 0,
                },
                1200: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                  spaceBetween: 20,
                  allowTouchMove: false,
                  slidesOffsetBefore: 0,
                  slidesOffsetAfter: 0,
                },
              }}
            >
              {userList.map((it) => {
                return (
                  <SwiperSlide
                    key={it.id}
                    onClick={() => handleCardClick(it.id)}
                  >
                    <CardWrapper
                      $bg={it.backgroundColor}
                      $bgImg={it.backgroundImageURL}
                    >
                      <div>
                        <ReceiverName $bgImg={it.backgroundImageURL}>
                          To. {it.name}
                        </ReceiverName>
                        <CardImgWrapper>
                          {/* 프로필 이미지 map */}
                          {it.recentMessages.slice(0, 3).map((it) => (
                            <img src={it.profileImageURL} key={it.id} />
                          ))}
                          {it.messageCount > 3 && (
                            <ProfileCount>+{it.messageCount - 3}</ProfileCount>
                          )}
                          {/* -------------- */}
                        </CardImgWrapper>
                        <WriterCountText $bgImg={it.backgroundImageURL}>
                          <span>{it.messageCount}</span>명이 작성했어요!
                        </WriterCountText>
                      </div>
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
