import React from 'react';
import { RollingHeaderUserPeopleImage } from '@/styles/rolling-page-styles';

/**
 * 프로필 이미지 리스트 컴포넌트
 * 책임: 프로필 이미지들을 렌더링 (래퍼 없이 순수 이미지만)
 */
export default function ProfileImageList({ profiles }) {
    if (!profiles || profiles.length === 0) {
        return null;
    }

    return (
        <>
            {profiles.map((profile, index) => (
                <RollingHeaderUserPeopleImage
                    key={profile.id || index}
                    src={profile.profileImageURL}
                    alt={profile.name || `프로필 ${index + 1}`}
                />
            ))}
        </>
    );
}

