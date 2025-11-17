import apiClient from "./client";

/**
 * Recipients API 함수들
 * 책임: Recipients 관련 API 호출
 */

// 유저 상세 조회

export const getRecipientById = async (recipientId) => {
    try {
        const response = await apiClient.get(`/recipients/${recipientId}/`);
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch recipient ${recipientId}:`, error);
        throw error;
    }
};

// 롤링 페이퍼 전체 삭제

export const deleteRecipient = async (recipientId) => {
    try {
        const response = await apiClient.delete(`/recipients/${recipientId}/`);
        return response.data;
    } catch (error) {
        console.error(`Failed to delete recipient ${recipientId}:`, error);
        throw error;
    }
};


// 유저의 모든 리액션 조회

export const getReactions = async (recipientId, params = {}) => {
    try {
        const response = await apiClient.get(`/recipients/${recipientId}/reactions/`, {
            params,
        });
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch reactions for recipient ${recipientId}:`, error);
        throw error;
    }
};


// 수신자에게 리액션 추가/감소

export const addReaction = async (recipientId, data) => {
    try {
        const response = await apiClient.post(`/recipients/${recipientId}/reactions/`, data);
        return response.data;
    } catch (error) {
        console.error(`Failed to add reaction to recipient ${recipientId}:`, error);
        throw error;
    }
};


// 수신자의 메시지 목록 조회

export const getRecipientMessages = async (recipientId, { limit = 6, offset = 0 } = {}) => {
    try {
        const response = await apiClient.get(`/recipients/${recipientId}/messages/`, {
            params: { limit, offset },
        });
        return response.data;
    } catch (error) {
        console.error(`Failed to fetch messages for recipient ${recipientId}:`, error);
        throw error;
    }
};

// 메시지 삭제

export const deleteMessage = async (messageId) => {
    try {
        const response = await apiClient.delete(`/messages/${messageId}/`);
        return response.data;
    } catch (error) {
        console.error(`Failed to delete message ${messageId}:`, error);
        throw error;
    }
};

