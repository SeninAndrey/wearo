import React from "react";

interface ItemCardProps {
    itemName: string;
    onDelete: () => void;
}

export function ItemCard({itemName, onDelete}: ItemCardProps) {  
    return (
        <>
            <h3>
                {itemName}
            </h3>
            <button onClick={onDelete}>
                удалить
            </button>
        </>
    );
}