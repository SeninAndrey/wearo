export const AddItemToStorage = (item: string): void => {
    let itemsListStorage: string|null = localStorage.getItem('itemsList');
        if (typeof itemsListStorage == 'string') {
            itemsListStorage = itemsListStorage + ',' + item;
        } else {
            itemsListStorage = item;
        }
        localStorage.setItem('itemsList', itemsListStorage);
}

export const GetListFromStorge = (): string[] => {
    const stored: string | null = localStorage.getItem('itemsList');

    if (stored === null || stored === '') return []

    return stored.split(',');
}