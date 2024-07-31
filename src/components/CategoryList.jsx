import React from 'react';
import { Button } from 'react-bootstrap';
import { COLOR_RANDOM_LIST } from "./../utils/app-constants";

const CategoryList = ({ selectedCategory, categoriesData, categoryOnClickHandler }) => {
    return (
        <>
            <ul>
                {
                    categoriesData?.map((item, index) => {
                        return (
                            <Button className={`p-1 m-2 ${selectedCategory === item.name ? "active" : ""}`} size="sm" variant={COLOR_RANDOM_LIST[index]} text="dark"
                                key={item.id}
                                onClick={(e) => { categoryOnClickHandler(item.name)}}>
                                {item.icon}&nbsp;&nbsp;{item.name}&nbsp;
                            </Button>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default CategoryList;
