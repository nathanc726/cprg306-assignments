"use client";

import { useState } from "react";

export default function NewItem({ onAddItem}) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        const NewItem = {
            name,
            quantity,
            category,
        };
        onAddItem(NewItem);

        setName("");
        setQuantity(1);
        setCategory("Produce");
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <main>
            <div className="mt-4 flex item-center justify-center w-full">
                <div className="w-full max-w-md bg-indigo-900 p-6 rounded-lg">   
                    <h1 className="text-2xl font-bold">
                        Add New Item 🛒
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <input 
                            required
                            onChange={handleNameChange}
                            value={name}
                            placeholder="Item Name"
                            className="mt-2 p-1 block w-full rounded-md text-black"
                        />
                        <div className="flex justify-between">
                            <input type="number" min="1" max="99"
                                required
                                onChange={handleQuantityChange}
                                value={quantity}
                                className="mt-2 p-1 block w-20 rounded-md text-black"
                            />
                            <select 
                                required                            
                                onChange={handleCategoryChange}
                                value={category}
                                className="mt-2 p-1 block w-50 rounded-md text-black"
                            >
                                <option value="Produce">Produce</option>
                                <option value="Dairy">Dairy</option>
                                <option value="Bakery">Bakery</option>
                                <option value="Meat">Meat</option>
                                <option value="Frozen Foods">Frozen Foods</option>
                                <option value="Canned Goods">Canned Goods</option>
                                <option value="Dry Goods">Dry Goods</option>
                                <option value="Beverages">Beverages</option>
                                <option value="Snacks">Snacks</option>
                                <option value="Household">Household</option>
                                <option value="Other">Other</option>
                            </select>
                            </div>

                        <button type="submit" className="w-full mt-2 py-2 px-4 bg-yellow-600 hover:bg-yellow-500 rounded-md text-white">
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
}