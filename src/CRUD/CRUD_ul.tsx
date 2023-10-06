import React, { useState } from 'react'



    type Item = {
        id: number;
        name: string;
        gender: string;
    };

    const CRUD_ul: React.FC = () => {
        const [items, setItems] = useState<Item[]>([]);
        const [editingItem, setEditingItem] = useState<Item | null>(null);
        const [name, setName] = useState<string>('');
        const [gender, setGender] = useState<string>('');
        const [error, setError] = useState<string | null>(null);

        const addItem = () => {
            if (!name || !gender) {
                setError('Name and Gender are required');
                return;
            }

            const newItem: Item = {
                id: Date.now(),
                name: name,
                gender: gender,
            };

            setItems([...items, newItem]);
            setName('');
            setGender('');
            setError(null);
        };

        const editItem = (item: Item) => {
            setEditingItem(item);
            setName(item.name);
            setGender(item.gender);
        };

        const saveEdit = () => {
            if (!name || !gender) {
                setError('Name and Gender are required');
                return;
            }

            const updatedItems = items.map((item) =>
                item.id === editingItem?.id ? { ...item, name, gender } : item
            );

            setItems(updatedItems);
            setEditingItem(null);
            setName('');
            setGender('');
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
              <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
              >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
              </select>
              <button onClick={editingItem ? saveEdit : addItem}>
                  {editingItem ? 'Save Edit' : 'Add Item'}
              </button>
              {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
          <ul>
              {items.map((item) => (
                  <li key={item.id}>
                      {item.name} ({item.gender})
                      <button onClick={() => editItem(item)}>Edit</button>
                      <button onClick={() => deleteItem(item.id)}>Delete</button>
                  </li>
              ))}
          </ul>
      </div>
  )
}

export default CRUD_ul
