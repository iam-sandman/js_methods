import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    // This looks like HTML, but it's JSX living inside a .js file!
    return (
        <div className="counter-card">
            <h2>Current Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Add +1</button>
        </div>
    );
}

export default Counter;
