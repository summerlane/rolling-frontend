// 카드 리스트 유저 GET
import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export async function getRecipients({ limit, offset, sort }) {
  const res = await axios.get(
    `${baseURL}/recipients/?limit=${limit}&offset=${offset}&sort=${sort}`
  );
  return res.data;
}
