import React, { JSX } from "react";

interface ItemCardProps {
    itemName: string;
    onDelete: () => void;
}

export function ItemCard({itemName, onDelete}: ItemCardProps): JSX.Element {  
    return (
        <div className="max-w-sm p-4 mb-5 w-full bg-gray-100 rounded-lg shadow-md flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">
                {itemName}
            </h3>
            <button 
                onClick={onDelete}
                className="ml-4 px-3 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
                удалить
            </button>
        </div>
    );
}