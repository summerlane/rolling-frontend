import React from 'react';
import { RollingHeaderUserPeopleState } from '@/styles/rolling-page-styles';

/**
 * 참여자 통계 컴포넌트
 * 책임: 참여자 수 텍스트 표시
 */
export default function ParticipantStats({ count }) {
    if (count === 0) {
        return (
            <RollingHeaderUserPeopleState>
                아직 작성한 사람이 없어요
            </RollingHeaderUserPeopleState>
        );
    }

    return (
        <RollingHeaderUserPeopleState>
            <strong>{count}</strong>명이 작성했어요!
        </RollingHeaderUserPeopleState>
    );
}

