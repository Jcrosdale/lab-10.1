import { useState, useEffect } from 'react';


const Counter = () => {
    // display current count: Show the current count, initialized to 0.
    const [count, setCount] = useState<number>(0);
    const [savedCount, setSavedCount] = useState<number[]>([]);
    const [step, setStep] = useState<number>(1);

    // Effect for components
    // Changes saved.
    // Saving to localStorage...
    useEffect(() => {
        const saved = localStorage.getItem('counter');
        if (saved !== null) {
            setCount(Number(saved));
        }
    }, []);

    // Second effect for changes
    useEffect(() => {
        localStorage.setItem('counter', count.toString());
    }, [count]);

    // Increment Button: A button to increase the count by 1.
    const increment = () => {
        setSavedCount(prev => [...prev, count]);
        setCount(prev => prev + step); // <-- the argument is the new value
    };

    // Decrement Button: A button to decrease the count by 1.
    const decrement = () => {
        setSavedCount(prev => [...prev, count]);
        setCount(prev => prev - step); // <-- the argument is the new value
    };

    // Reset button
    const resetCount = () => {
        setCount(0);
        setSavedCount([]);
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

    // Key down effect
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowUp') {
                increment();
            }

            if (event.key === 'ArrowDown') {
                decrement();
            }
        };
        
        window.addEventListener('keydown', handleKeyDown);

        // Event listener clean up
        return() => {
            window.removeEventListener('keydown', handleKeyDown);
        }

    }, [count, step]);

    return (
        <div>
            <p>Counter</p>
            <h1>Current Count: {count}</h1>

            <button onClick={decrement}>Decrement</button>
            <button onClick={increment}>Increment</button>
            <button onClick={resetCount}>Reset</button>

            <label htmlFor='step'>Step Value:</label>
            <input
            id='step' 
            type='number'
            min='1'
            value={step}
            onChange={(event) => setStep(Math.max(1, Number(event.target.value)))}
            />

            <p>Count History:</p>
            <ul>
                {savedCount.map((previousCount, index) => (
                    <li key={index}>{previousCount}</li>
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
  
