import React, { ChangeEvent, FormEvent, JSX, useState } from "react";
import { AddItemToStorage } from "./utilities/localStorage";

interface AddItemComponentProps {
    addItemHandler: (item: string) => void
}

export function AddItemComponent({addItemHandler}: AddItemComponentProps): JSX.Element { 
    const [value, setValue] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        if (value.trim() === '') return; 
        addItemHandler(value.trim());
        AddItemToStorage(value.trim());        
        setValue(''); 
    };

    return (
        <form action="" onSubmit={handleSubmit} className="flex mb-5 w-full items-center space-x-2">
            <input 
                type="text"                 
                className="px-3 py-2 flex-grow border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={value}
                onChange={handleChange}
            />
            <button 
                type="submit"
                disabled={value.trim() === ''}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
                Добавить
            </button>
        </form>
    );
}