'use client';

import { useState } from "react";
import Link from 'next/link';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(null);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleItemSelect = (itemName) => {
        const cleanedItemName = itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();
        console.log('Cleaned item name:', cleanedItemName); // Add this line
        setSelectedItemName(cleanedItemName);
    };
    
    return (
        <main>
            <div>
                <h1 className="text-4xl ml-4 mt-4 font-bold">Shopping List🛒</h1>
            </div>
            <div className="flex">
                <div className="w-1/2">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="w-1/2">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
            <Link href="/" className="text-white hover:underline mt-5 m-4">
            Back to Home
            </Link>
        </main>
    );
}