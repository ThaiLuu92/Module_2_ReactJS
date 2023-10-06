import React, { useState } from 'react';

type Item = {
    id: number;
    name: string;
};

const CRUD_form: React.FC = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [editingItem, setEditingItem] = useState<Item | null>(null);
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const addItem = () => {
        if (!name) {
            setError('Name is required');
            return;
        }

        const newItem: Item = {
            id: Date.now(),
            name: name,
        };

        setItems([...items, newItem]);
        setName('');
        setError(null);
    };

    const editItem = (item: Item) => {
        setEditingItem(item);
        setName(item.name);
    };

    const saveEdit = () => {
        if (!name) {
            setError('Name is required');
            return;
        }

        const updatedItems = items.map((item) =>
            item.id === editingItem?.id ? { ...item, name } : item
        );

        setItems(updatedItems);
        setEditingItem(null);
        setName('');
        setError(null);
    };

    const deleteItem = (id: number) => {
        const updatedItems = items.filter((item) => item.id !== id);
        setItems(updatedItems);
    };

    return (
        <div>
            <h1>CRUD Example</h1>
            <div>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button onClick={editingItem ? saveEdit : addItem}>
                    {editingItem ? 'Save Edit' : 'Add Item'}
                </button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => editItem(item)}>Edit</button>
                        <button onClick={() => deleteItem(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CRUD_form;