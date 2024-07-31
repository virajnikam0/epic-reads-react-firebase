import React, { useEffect, useState } from 'react'
import ArticleList from './ArticleList';
import CategoryList from './CategoryList';
import { getAllCategories, getAllArticles } from "./../services/firebase-service";
import { CATEGORY_ALL_NAME } from "./../utils/app-constants";

let articleBkp = [];
const Home = () => {

    const [categories, setCategories] = useState([]);
    const [articles, setArticles] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(CATEGORY_ALL_NAME);

    useEffect(() => {
        async function fetchData() {
            setCategories(await getAllCategories());
            articleBkp = await getAllArticles();
            setArticles(articleBkp);
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (selectedCategory === CATEGORY_ALL_NAME){
            setArticles(articleBkp);
            return;
        }
        // console.log(selectedCategory);
        const filteredArticles = articleBkp.filter((article) => {
            console.log(article);
            return article?.category === selectedCategory;
        });
        console.log(filteredArticles);
        
        setArticles(filteredArticles);
    }, [selectedCategory, categories]);

    const categoryOnClickHandler = (categoryName) => {
        setSelectedCategory(categoryName);
    }

    return (categories.length  && articles.length )? (
        <>
            <CategoryList 
                categoriesData={categories}
                categoryOnClickHandler={categoryOnClickHandler}
                selectedCategory={selectedCategory} />
            <ArticleList 
                articlesData={articles}/>
        </>
    ):null;
}

export default Home;
