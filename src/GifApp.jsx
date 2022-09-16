import { useState } from "react";
import { AddCategory, GifGrid} from "./components";
//import { AddCategory } from "./components/AddCategory";
//import { GifGrid } from "./components/GifGrid";

export const GifApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = ( newCategory) => {
        if(categories.find(cat => cat.toLowerCase() === newCategory.toLowerCase())) return;
        setCategories(cat => [newCategory, ...cat]);
    };

    return (
        <>
            <h1>GifApp</h1>

            <AddCategory 
                onNewCategory={event => onAddCategory(event)}
            />

            {
                categories.map(category => 
                    (
                        <GifGrid key={ category } category={ category }/>
                    )
                )
            }
        </>
    )
}