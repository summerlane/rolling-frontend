import { useState, useMemo, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

// API 호스트 루트
const BASE_URL = "https://rolling-api.vercel.app";

const FONT_OPTIONS = [{ value: "Noto Sans", label: "Noto Sans" }];

const RELATIONSHIP_OPTIONS = [
  { value: "지인", label: "지인" },
  { value: "친구", label: "친구" },
  { value: "가족", label: "가족" },
  { value: "동료", label: "동료" },
];

// 유효성 검사 훅 (이전과 동일)
const useInput = (initialValue, validate) => {
  const [value, setValue] = useState(initialValue);
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validate(value);
  const hasError = isTouched && !isValid;

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleBlur = () => {
    setIsTouched(true);
  };

  return { value, isValid, hasError, handleChange, handleBlur };
};

// 메시지 폼 및 Axios API 로직

export const useMessageForm = () => {
  // 상태 정의
  const { id } = useParams();
  const fromInput = useInput("", (val) => val.trim().length > 0);
  const relationshipDropdown = useInput(
    RELATIONSHIP_OPTIONS[0].value,
    (val) => val.trim().length > 0
  );
  const fontDropdown = useInput(
    FONT_OPTIONS[0].value,
    (val) => val.trim().length > 0
  );
  const [editorContent, setEditorContent] = useState("");

  const [selectedProfileImageId, setSelectedProfileImageId] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false); // POST 요청 상태

  // 이미지 GET 요청 상태
  const [selectableImages, setSelectableImages] = useState([]);
  const [isImagesLoading, setIsImagesLoading] = useState(true);
  const [imagesError, setImagesError] = useState(null);

  const isEditorContentValid = editorContent.trim().length > 0;

  const isFormValid = useMemo(
    () =>
      fromInput.isValid &&
      relationshipDropdown.isValid &&
      fontDropdown.isValid &&
      isEditorContentValid,
    [
      fromInput.isValid,
      relationshipDropdown.isValid,
      fontDropdown.isValid,
      isEditorContentValid,
    ]
  );

  // [GET 요청] 프로필 이미지 목록 가져오기

  useEffect(() => {
    const PROFILE_API_URL = `${BASE_URL}/profile-images/`;

    const fetchImages = async () => {
      setIsImagesLoading(true);
      setImagesError(null);

      try {
        // axios.get 사용
        const response = await axios.get(PROFILE_API_URL);
        const data = response.data;

        // 응답 데이터 (imageUrls 배열)를 변환하여 상태에 저장
        const images = data.imageUrls.map((url, index) => ({
          id: index + 1,
          url: url,
        }));

        setSelectableImages(images);
        // 첫 번째 이미지를 기본값으로 선택
        if (images.length > 0 && selectedProfileImageId === 0) {
          setSelectedProfileImageId(images[0].id);
        }
      } catch (err) {
        // Axios 에러 객체에서 메시지 추출
        const errorMessage = err.response?.data?.message || err.message;
        setImagesError(new Error(errorMessage));
        setSelectableImages([]);
      } finally {
        setIsImagesLoading(false);
      }
    };

    fetchImages();
  }, []);

  // [POST 요청] 폼 데이터 전송 (Axios 사용)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid || isSubmitting) {
      fromInput.handleBlur();
      return false;
    }

    // 프로필 이미지가 선택되었는지 확인
    if (selectedProfileImageId === 0) {
      alert("프로필 이미지를 선택해 주세요.");
      return false;
    }

    setIsSubmitting(true);

    // 선택된 이미지의 URL을 찾습니다.
    const selectedImage = selectableImages.find(
      (img) => img.id === selectedProfileImageId
    );

    const formData = {
      // API 요구사항에 맞춰 필드 이름을 구성합니다.
      sender: fromInput.value,
      relationship: relationshipDropdown.value,
      font: fontDropdown.value,
      content: editorContent,
      profileImageURL: selectedImage?.url || null,
      createdAt: new Date().toISOString(),
    };

    // 롤링페이퍼 ID가 필요하다면 이 훅을 사용하는 컴포넌트에서 recipientId를 주입해야 합니다.
    const POST_API_URL = `${BASE_URL}/20-1/recipients/${id}/messages/`;

    try {
      // axios.post 사용
      await axios.post(POST_API_URL, formData);
      navigate(`/post/${id}`);
      return true;
    } catch (error) {
      // Axios 에러 객체에서 메시지 추출
      const errorMessage = error.response?.data?.message || error.message;
      alert(`롤링페이퍼 생성에 실패했습니다: ${errorMessage}`);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  // 반환 값
  return {
    fromInput,
    relationshipDropdown,
    fontDropdown,
    editorContent,
    setEditorContent,
    isFormValid,
    handleSubmit,
    RELATIONSHIP_OPTIONS,
    FONT_OPTIONS,
    selectedProfileImageId,
    handleImageSelect: setSelectedProfileImageId,
    selectableImages,
    // 이미지 로딩 중이거나 제출 로딩 중이라면 true
    isLoading: isImagesLoading || isSubmitting,
    error: imagesError,
  };
};
