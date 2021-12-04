import React, { useEffect, useState } from 'react'
import Article from './Article';

const url = 'https://fakestoreapi.com/products';
const DataFetching = () => {
    const [articles, setArticles] = useState([]);

    const getData = async () => {
        const response = await fetch(url);
        const articles = await response.json();
        setArticles(articles);
    };

    useEffect(() => { getData(); })
    return (
        <div className="grid grid-cols-3 gap-4">
            {
                articles.map(article => <Article
                    key={article.id}
                    article={article}
                />)
            }
        </div>
    )
}

export default DataFetching
