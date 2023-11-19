'use client';

import { useState } from "react";
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from 'next/navigation';
import {getItems, addItem, deleteItem,} from "../_services/shopping-list-service.js";
import { useEffect } from "react";

export default function Page() {
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState(null);
    const { user, firebaseSignOut} = useUserAuth();
    const router = useRouter();


    const handleAddItem = async (newItem) => {
        try {
          if (user) {
            const newItemId = await addItem(user.uid, newItem);
            newItem.id = newItemId;
            setItems([...items, newItem]);
          }
        } catch (error) {
          console.error("Error adding item: ", error);
        }
      };

      const handleDeleteItem = async (itemId) => {
        try {
          if (user) {
            await deleteItem(user.uid, itemId);
            const updatedItems = items.filter((item) => item.id !== itemId);
            setItems(updatedItems);
          }
        } catch (error) {
          console.error("Error deleting item: ", error);
        }
      };

      const loadItems = async () => {
        try {
          if (user) {
            const shoppingListItems = await getItems(user.uid);
            setItems(shoppingListItems);
          }
        } catch (error) {
          console.error("Error loading items: ", error);
        }
      };

      useEffect(() => {
        loadItems();
      }, [user]);

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
                            <button className="hover:underline" onClick={() => { handleSignOut(); router.push('/week10'); }}>Sign out</button>

                        </div>
                    )}
                    <NewItem onAddItem={(newItem) => handleAddItem(newItem)} />
                    <ItemList items={items} onItemSelect={handleItemSelect} onDeleteItem={handleDeleteItem}/>
                </div>
                <div className="flex-1 max-w-lg m-4">
                    <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}
