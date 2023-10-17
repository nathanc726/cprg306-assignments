'use client';

import { useState } from "react";
import Link from 'next/link';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

export default function Page() {
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return (
        <main>
            <div>
                <h1 className="text-4xl ml-10 mt-4 font-bold">Shopping List🛒</h1>
            </div>
            <div className="flex justify-center">
                <div className="w-1/2">
                    <NewItem onAddItem={handleAddItem} />
                    <ItemList items={items} />
                </div>
            </div>
            <Link href="/" className="text-white hover:underline mt-5">
            Back to Home
            </Link>
        </main>
    );
}