import { useEffect, useState } from "react";

export function EntendendoUseEffect() {
    const [count, setCounter] = useState(0);

    useEffect(() => {
       document.title = `Contador: ${count}`
    }, [count]);

    return (
        <>
            <h2>Count: {count}</h2>
            <div>
                <button onClick={() => setCounter(prevCount => prevCount + 1)}>Incremento</button>
            </div>

            <div>
                <button onClick={() => setCounter(prevCount => prevCount - 1)}>Decremento</button>
            </div>       
        </>
    )
}