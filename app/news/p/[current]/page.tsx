import NewsList from "@/app/_components/NewsList/NewsList";
import { getNewsList } from "@/app/_libs/microcms"
import { notFound } from "next/navigation";
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import Pagination from "@/app/_components/Pagination/Pagination";


type Props = {
    params: Promise<{
        current: string;
    }>;
};

export default async function Page({ params }: Props) {
    // const current = parseInt(params.current, 10); //文字列の先頭から解析を開始し、整数部分を抽出して返す 10進数の10

    // if (Number.isNaN(current) || current < 1) {
    //     notFound();
    // }

    const { current } = await params;

    const page = parseInt(current, 10);

    const { contents: news, totalCount } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
        offset: NEWS_LIST_LIMIT * (page - 1), // 最新11-20件
    });

    if (news.length === 0) {
        notFound();
    }

    return (
        <div>
            {/* {JSON.stringify(news)} */}
            <NewsList news={news} />
            <Pagination totalCount={totalCount} current={page} />
        </div>
    )
}
