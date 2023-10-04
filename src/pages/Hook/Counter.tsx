import { useState } from "react";


const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0); // Khi sử dụng useState, bạn có thể chỉ định kiểu của state

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Tăng</button>
            <button onClick={decrement}>Giảm</button>
        </div>
    );
};

export default Counter;