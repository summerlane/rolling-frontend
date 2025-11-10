import React from 'react';
import {
    RollingHeaderImojiIconContainer,
    RollingHeaderImojiText,
    RollingHeaderImojiIcon,
} from '@/styles/rolling-page-styles';

/**
 * 이모지 표시 리스트 컴포넌트
 * 책임: 상위 N개의 이모지를 화면에 표시
 */
export default function EmojiDisplayList({ emojis }) {
    return (
        <>
            {emojis.map((emojiData, index) => (
                <RollingHeaderImojiIconContainer key={index}>
                    <RollingHeaderImojiIcon>{emojiData.emoji}</RollingHeaderImojiIcon>
                    <RollingHeaderImojiText>{emojiData.count}</RollingHeaderImojiText>
                </RollingHeaderImojiIconContainer>
            ))}
        </>
    );
}

