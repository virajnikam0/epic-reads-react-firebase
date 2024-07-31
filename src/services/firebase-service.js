import {
	firebaseConfig,
    CATEGORY_ALL_NAME,
	ERROR_DATA_NOT_FOUND,
} from "./../utils/app-constants";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
getAnalytics();
export const fireStoreDB = getFirestore(app);

export const getAllCategories = async () => {
     const categoriesSnapshot = await getDocs(
        collection(fireStoreDB, "categories")
      );
      const result = categoriesSnapshot.docs
        .map((doc) => doc.data());

      return (result !== null && result !== undefined) ?
       result :
       new Error(ERROR_DATA_NOT_FOUND);
}

export const getAllArticles = async () => {
     const articlesSnapshot = await getDocs(
        collection(fireStoreDB, "articles")
      );
      const result = articlesSnapshot.docs
        .map((doc) => doc.data());

      return (result !== null && result !== undefined) ?
       result :
       new Error(ERROR_DATA_NOT_FOUND);
}

export const getArticlesByCategory = async (categoryName) => {
    if(!categoryName){
        throw new Error(ERROR_DATA_NOT_FOUND);
    }

    if(categoryName === CATEGORY_ALL_NAME){
        return await getAllArticles();
    }

    const articlesSnapshot = await getDocs(
        collection(fireStoreDB, "articles")
    );
    const result = articlesSnapshot.docs
        .filter((doc) => doc.data()?.name === categoryName);

    return (result !== null && result !== undefined) ?
        result :
        new Error(ERROR_DATA_NOT_FOUND);
}