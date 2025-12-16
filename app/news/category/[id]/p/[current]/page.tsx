import { notFound } from 'next/navigation';
import { getCategoryDetail, getNewsList } from '@/app/_libs/microcms';
import NewsList from '@/app/_components/NewsList/NewsList';
import Pagination from '@/app/_components/Pagination/Pagination';
import { NEWS_LIST_LIMIT } from '@/app/_constants';

type Props = {
    params: Promise<{
        current: string;
        id: string;
    }>;
};

export default async function Page({ params }: Props) {
    const { current, id } = await params; // 👈 ここが重要

    const page = parseInt(current, 10);

    // const current = parseInt(params.current as string, 10);

    // if (Number.isNaN(current) || current < 1) {
    //     notFound();
    // }

    if (Number.isNaN(page) || page < 1) {
        notFound();
    }

    const category = await getCategoryDetail(id).catch(notFound);

    const { contents: news, totalCount } = await getNewsList({
        filters: `category[equals]${category.id}`,
        limit: NEWS_LIST_LIMIT,
        offset: NEWS_LIST_LIMIT * (page - 1),
    });

    if (news.length === 0) {
        notFound();
    }

    return (
        <>
            <NewsList news={news} />
            <Pagination
                totalCount={totalCount}
                current={page}
                basePath={`/news/category/${category.id}`}
            />
        </>
    );
}