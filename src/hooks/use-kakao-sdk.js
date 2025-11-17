import { useEffect } from "react";

const KAKAO_KEY = import.meta.env.VITE_KAKAO_KEY;

/**
 * 카카오 SDK 초기화 커스텀 훅
 * 책임: 카카오 SDK 스크립트 로드 및 초기화
 */
export default function useKakaoSdk() {
  useEffect(() => {
    // 이미 SDK가 로드되어 있으면 초기화만 수행
    if (window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(KAKAO_KEY);
      }
      return;
    }

    // SDK 스크립트 동적 로드
    const script = document.createElement("script");
    script.src = "https://t1.kakaocdn.net/kakao_js_sdk/2.7.7/kakao.min.js";
    script.integrity =
      "sha384-tJkjbtDbvoxO+diRuDtwRO9JXR7pjWnfjfRn5ePUpl7e7RJCxKCwwnfqUAdXh53p";
    script.crossOrigin = "anonymous";
    script.async = true;

    script.onload = () => {
      if (window.Kakao && !window.Kakao.isInitialized()) {
        window.Kakao.init(KAKAO_KEY);
      }
    };

    document.head.appendChild(script);
  }, []);

  return {
    isKakaoReady: window.Kakao?.isInitialized() || false,
  };
}
