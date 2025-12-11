import { createClient } from "microcms-js-sdk";

// SDKから必要な関数や型情報をインポート
import type {
    MicroCMSQueries,
    MicroCMSImage,
    MicroCMSListContent,
} from 'microcms-js-sdk';

// microCMS内で定義されているメンバーAPIのスキーマ情報に合わせて型定義
export type Member = {
    name: string;
    position: string;
    profile: string;
    image: MicroCMSImage;
} & MicroCMSListContent;

// 各型を定義
export type Category = {
    name: string;
} & MicroCMSListContent;

export type News = {
    title: string;
    description: string;
    content: string;
    thumbnail?: MicroCMSImage; // この型が必須ではない
    category: Category;
} & MicroCMSListContent;

// MICROCMS_SERVICE_DOMAINの有無を確認
if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

// MICROCMS_API_KEYの有無を確認
if (!process.env.MICROCMS_API_KEY) {
    throw new Error('MICROCMS_API_KEY is required');
}

// 定数clientに MICROCMS_SERVICE_DOMAIN と MICROCMS_API_KEY の情報を保持
const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

// microCMS から “members” のリストを取得して返す関数
// 1. getMembersList は 非同期関数（async）
// 2. client.getList<Member> を実行
// 3. listData に取得結果が入る
// 4. 取得したデータをそのまま返す
export const getMembersList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Member>({
        endpoint: 'members',
        queries,
    });
    return listData;
};
export const getNewsList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<News>({
        endpoint: 'news',
        queries,
    });
    return listData;
};

export const getNewsDetail = async (
    contentId: string,
    queries?: MicroCMSQueries
) => {
    const detailData = await client.getListDetail<News>({
        endpoint: 'news',
        contentId,
        queries,
    });
    return detailData;
};
