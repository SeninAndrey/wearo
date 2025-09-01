import React, { ChangeEvent, FormEvent, useState } from "react";

interface AddItemComponentProps {
    addItemHandler: (item: string) => void
}

const AddItemToStorage = (item: string) => {
    let itemsListStorage: string|null = localStorage.getItem('itemsList');
        if (typeof itemsListStorage == 'string') {
            itemsListStorage = itemsListStorage + ',' + item;
        } else {
            itemsListStorage = item;
        }
        localStorage.setItem('itemsList', itemsListStorage);
}

export function AddItemComponent({addItemHandler}: AddItemComponentProps) { 
    const [value, setValue] = useState<string>('');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault(); 
        if (value.trim() === '') return; 
        addItemHandler(value.trim());
        AddItemToStorage(value.trim());        
        setValue(''); 
    };

    return (
        <form action="" onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={value}
                onChange={handleChange}
            />
            <button type="submit">
                Добавить
            </button>
        </form>
    );
}