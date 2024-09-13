import axios from "@/utils/axios";

/**
 * useSWRで使用するデータ取得用のfetcher関数。
 * @param url - データを取得するURL。
 * @returns APIレスポンスのデータ。
 */
export const fetcher = (url: string) => axios.get(url).then((res) => res.data);
