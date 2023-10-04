import React, { useState } from 'react';

function Ex_useState() {
    const [valueInput, setValueInput] = useState<string>('');
    const [data, setData] = useState<string[]>([]);
    const handleAdd = () => {
        setData([...data, valueInput]);
        setValueInput('');
    }

    const handleDel = (index: number) => {
        const newData = data.filter((item, i) => i !== index);
        setData(newData)
    }




    return (
         
        <div className="App">
            <h1>Ex:useState</h1>
            <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValueInput(e.target.value)}
                value={valueInput} />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {data.map((item, index) => (
                    <li>{item} <button onClick={() => handleDel(index)}>Delete</button> </li>
                ))}
            </ul>
        </div>
    );
}


export default Ex_useState

