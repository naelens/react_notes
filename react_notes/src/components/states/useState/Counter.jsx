import { useState } from 'react'

export function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div className="card">
            <h1>Você clicou {count} vezes.</h1>
            <button onClick={() => setCount((count) => count + 1)}>
                {count}
            </button>
        </div>
    )
}