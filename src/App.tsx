import React, { useState } from "react";
import { AddItemComponent } from "./AddItemComponent";
import { ItemCard } from "./ItemCard";
import { GetListFromStorge } from "./utilities/localStorage";

const App: React.FC = () => {      
    const [itemsList, setItemsList] = useState<string[]>(GetListFromStorge());

    const addItem = (item: string) => {
        setItemsList(prevItems => [...prevItems, item]);
    };
    
    const deleteItem = (indexToDelete: number) => {
        setItemsList(prevItems => {
            const newList: string[] = prevItems.filter((item: string, index: number) => index !== indexToDelete);
            localStorage.setItem('itemsList', newList.join(','));
            return newList;
        });         
    }

    return (
        <>
            <h1 className="text-3xl w-full font-bold text-blue-500 bg-gray-100 p-4 mb-5 rounded">
                Тестовое задание (React + TypeScript)
            </h1>
            <AddItemComponent addItemHandler={addItem}/>
            {itemsList.map((item, index) => (
                <ItemCard 
                    key={index} 
                    itemName={item} 
                    onDelete={() => deleteItem(index)}
                />
            ))}
        </>
    )
}

export default App; 