'use client';

import { useState } from "react";
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';
import MealIdeas from './meal-ideas';
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from 'next/navigation';

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState(null);
    const { user, firebaseSignOut} = useUserAuth();
    const router = useRouter();


    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    const handleItemSelect = (itemName) => {
        const cleanedItemName = itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '').trim();
        console.log('Cleaned item name:', cleanedItemName);
        setSelectedItemName(cleanedItemName);
    };

    const handleSignOut = () => {
        firebaseSignOut();
      };
    

    return (
        <main>
            <div>
                <h1 className="text-4xl ml-4 mt-4 font-bold">Shopping List🛒</h1>
            </div>
            <div className="flex">
                <div className="flex-1 max-w-lg m-4">
                    {user && user.displayName && (
                        <div>
                            <p>Welcome, {user.displayName}!</p>
                            <button className="hover:underline" onClick={() => { handleSignOut(); router.push('/week8'); }}>Sign out</button>

                        </div>
                    )}
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="flex-1 max-w-lg m-4">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}
