import axios from "axios";

// 기수-팀 번호 설정 (환경변수로 관리 가능)
const TEAM_CODE = "2-1"; // 추후 환경변수로 변경 가능

// API 기본 설정
const BASE_URL = `https://rolling-api.vercel.app/${TEAM_CODE}`;

/**
 * API 클라이언트
 * 책임: axios 인스턴스 생성 및 기본 설정
 */
const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;
export { TEAM_CODE };
