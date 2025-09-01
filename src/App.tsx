import React, { useState } from "react";
import { AddItemComponent } from "./AddItemComponent/AddItemComponent";
import { ItemCard } from "./ItemCard/ItemCard";

const GetListFromStorge = () => {
    const stored = localStorage.getItem('itemsList');

    if (stored === '') return []
    
    let itemsListStorage: string[] = [];
    if (stored != null) {
        itemsListStorage = stored.split(',');        
    } 
    return itemsListStorage;
}

const App = () => {      
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
            <h1 className="text-3xl font-bold text-blue-500 bg-gray-100 p-4 rounded">
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