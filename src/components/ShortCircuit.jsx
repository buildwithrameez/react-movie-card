import { useState } from "react";

const ShortCircuit = () => {
    const [isLogin, setisLogin] = useState(true);
    const [user, setuser] = useState('');

    return <section className="container short-container">
        <h1>Welcome to ShortCircuit Evaluation</h1>

        {/* conditional rendering using short Circuit */}
        {isLogin && <p>You are logged in </p>}

        {/* another example of short circuit */}
        {user ? `Hello, ${user}` : "Please Login" }


        <div className="grid-three-cols">
            <button onClick={() => setisLogin(!isLogin)}>Toggle Login State</button>
            <button onClick={() => setuser('Rameez')}>Set User</button>
            <button onClick={() => setuser('')}>Clear User</button>
        </div>

    </section>
};

export default ShortCircuit;