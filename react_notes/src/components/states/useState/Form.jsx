import { useState } from "react";

export function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [submittedData, setSubmittedData] = useState({name: "", email: ""});

    function handleForm (e) {
        e.preventDefault();
        setSubmittedData({name, email});
    }

    return (
        <>
            <form>
                <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text" 
                    name="nome" 
                    placeholder="Nome"
                />
                <input 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="text" 
                    name="E-mail" 
                    placeholder="E-mail"
                />
                <button
                   onClick={handleForm}
                >
                    Confirmar
                </button>
            </form>
            <div>
                <h3>{submittedData.name}</h3>
                <p>{submittedData.email}</p>
            </div>
        </>
    )
}