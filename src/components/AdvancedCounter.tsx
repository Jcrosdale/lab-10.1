import { useState, useEffect } from 'react';


const Counter = () => {
    // display current count: Show the current count, initialized to 0.
    const [count, setCount] = useState<number>(0);
    const [savedCount, setSavedCount] = useState<number[]>([]);

    // Effect
    // Changes saved.
    // Saving to localStorage...
    // Similar to debouncing activity
    // Separate useEffect

    // Increment Button: A button to increase the count by 1.
    const increment = () => {
        setCount(count + 1); // <-- the argument is the new value
    };

    // Decrement Button: A button to decrease the count by 1.
    const decrement = () => {
        setCount(count - 1); // <-- the argument is the new value

    };

    // Reset button
    const resetCount = () => {
        setCount(0);
    };

    // Count history 
    // const saveCount = () => {
    //     //setSavedCount(prev => [...prev, { id: count }]);
    //     setSavedCount([...savedCount, count]);
    //     resetCount(); 

    //     // setSavedCount([...savedCount, count]);
    //     //resetCount(); 
    
    // use effect
    // };

    return (
        <div>
            <p>Counter</p>
            <h1>Current Count: {count}</h1>
            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
            <button onClick={resetCount}>Reset</button>

            <p>Step Value: { }</p>

            <p>Count History:</p>
            <ul>
                {count}
                <p>--------------</p>
                {savedCount.map((count, index) => (
                    <li key={index}>{count}</li>
                ))}
            </ul>

            <p>Use ArrowUp to increment and ArrowDown to decrement.</p>
        </div>
    );
}

export default Counter


/*<button onclick={() => {
  // pass updater function as the argument
  setCount((prevCount) => prevCount + 5);
}}>Add 5</button> */
  
