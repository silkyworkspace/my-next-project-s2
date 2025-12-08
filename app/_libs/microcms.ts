// 各型を定義

export type Category = {
    name: string;
};

export type News = {
    id: string;
    title: string;
    category: {
        name: string;
    };
    publishedAt: string;
    createdAt: string;
};
