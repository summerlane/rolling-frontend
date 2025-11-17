import { useState, useEffect } from "react";

import img1 from "@/assets/images/profile-img-01.webp";
import img2 from "@/assets/images/profile-img-02.webp";

export const DEFAULT_IMAGE_ID = 0;

/* 프로필 이미지 선택 상태와 로직 및 API 통신을 관리하는 커스텀 훅 */
export const useProfileImage = () => {
  const [selectedProfileImageId, setSelectedProfileImageId] =
    useState(DEFAULT_IMAGE_ID);

  const [selectableImages, setSelectableImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleImageSelect = (id) => {
    setSelectedProfileImageId(id);
  };

  useEffect(() => {
    const API_ENDPOINT = "/api/profile-images";

    async function fetchImages() {
      try {
        const MOCK_IMAGES = [
          { id: 1, url: img2 },
          { id: 2, url: img1 },
          { id: 3, url: img2 },
          { id: 4, url: img1 },
          { id: 5, url: img2 },
          { id: 6, url: img1 },
          { id: 7, url: img2 },
          { id: 8, url: img1 },
          { id: 9, url: img2 },
          { id: 10, url: img1 },
        ];

        setSelectableImages(MOCK_IMAGES);
        setError(null);
      } catch (err) {
        setError(err.message);
        console.error("Failed to fetch profile images:", err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchImages();
  }, []);

  return {
    selectedProfileImageId,
    handleImageSelect,
    selectableImages,
    DEFAULT_IMAGE_ID,
    isLoading,
    error,
  };
};
