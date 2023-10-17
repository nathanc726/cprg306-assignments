"use client";
import Item from './item';
import { useState } from "react";

export default function ItemList({items}) {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items];

    if (sortBy === "name") {
    sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "category") {
    sortedItems.sort((a, b) => a.category.localeCompare(b.category));
    } else if (sortBy === "grouped category") {
        items.sort((a, b) => a.category.localeCompare(b.category));
    }
    const groupedItems = sortedItems.reduce((group, item) => {
        const category = item.category;
        if (group[category] === undefined) {
            group[category] = [];}
        group[category].push(item);
        return group;
    }, {});

    return (
    <div>
        <div className="flex m-4 items-center">
            <label className='mr-2'>Sort by:</label>
            <button
                className={`px-6 py-2 mr-1 rounded-sm ${sortBy === 'name' ? 'bg-green-600' : 'bg-gray-600'}`}
                onClick={() => setSortBy('name')}
            >
            Name
            </button>
            <button
                className={`px-6 py-2 mr-1 rounded-sm ${sortBy === 'category' ? 'bg-green-600' : 'bg-gray-600'}`}
                onClick={() => setSortBy('category')}
            >
            Category
            </button>
            <button
                className={`px-6 py-2 mr-1 rounded-sm ${sortBy === 'grouped category' ? 'bg-green-600' : 'bg-gray-600'}`}
                onClick={() => setSortBy('grouped category')}
            >
            Grouped Category
            </button>
        </div>
    
            {sortBy === 'grouped category' ? (
                Object.keys(groupedItems).map((category) => (
                    <div key={category}>
                        <h2 className="capitalize text-2xl ml-4 font-semibold">{category}</h2>
                        {groupedItems[category].map((item) => (
                            <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                        ))}
                    </div>
                ))
            ) : (sortedItems.map((item) => (
                    <Item key={item.id} 
                        name={item.name} 
                        quantity={item.quantity} 
                        category={item.category} />))
            )}
    </div>
    );
}
