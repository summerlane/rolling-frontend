// 카드 리스트 유저 GET
import axios from "axios";

export async function getRecipients({ url }) {
  const res = await axios.get(url);
  return res.data;
}
