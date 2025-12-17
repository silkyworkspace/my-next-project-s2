import NewsList from "@/app/_components/NewsList/NewsList";
import Pagination from "@/app/_components/Pagination/Pagination";
import SearchField from "@/app/_components/SearchField/SearchField";

import { NEWS_LIST_LIMIT } from "@/app/_constants";
import { getNewsList } from "@/app/_libs/microcms";

type Props = {
    searchParams: Promise<{
        q?: string;
    }>;
};

export default async function Page({ searchParams }: Props) {

    const { q } = await searchParams;

    const { contents: news, totalCount } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
        q: q,
    })

    return (
        <>
            <SearchField />
            <NewsList news={news} />
            <Pagination totalCount={totalCount}/>
        </>
    )
}
