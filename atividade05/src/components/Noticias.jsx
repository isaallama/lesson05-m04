import { useState, useEffect } from "react";
import "./noticias.css";

function News() {
    const [news, setNews] = useState(null);
    const [count, setCount] = useState(1);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${count}`);
                const data = await response.json();
                setNews(data);
            } catch (error) {
                console.error("Erro ao buscar as notícias:", error);
            }
        };

        fetchNews(); 

        const timer = setInterval(() => {
            setCount((prevCount) => {
                const newCount = prevCount + 1;
                fetchNews(newCount); 
                return newCount;
            });
        }, 10000);

        return () => {
            clearInterval(timer);
        };
    }, [count]);

    return (
        <div>
            {news ? (
                <div>
                    <h2>{news.title}</h2>
                    <p>{news.body}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default News;

