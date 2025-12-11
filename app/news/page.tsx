import NewsList from "../_components/NewsList/NewsList";
import { getNewsList } from "../_libs/microcms"

export default async function Page() {
    const { contents: news } = await getNewsList();
    return (
        <div>
            {/* {JSON.stringify(news)} */}
            <NewsList news={news} />
        </div>
    )
}
