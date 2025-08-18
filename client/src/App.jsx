import React, { useEffect, useState } from 'react';


function App() {
    const [number, setNumber] = useState(0);
    const [backendData, setBackendData] = useState({});

    function increment() {
        setNumber((prev) => prev + 1);
    }

    useEffect(() => {
        const apiUrl = import.meta.env.VITE_API_URL || "/api";
        fetch(`${apiUrl}/api`).then(
            res => res.json()
        ).then(data => {
            console.log(data);
            setBackendData(data);
        })
    }, []);

    return (
        <>
            <div className="h-screen flex flex-col items-center justify-center ">
                <div className="flex flex-col items-center justify-center ">
                    {backendData.users && backendData.users.map((user, i) => (
                        <p key={i}>{user}</p>
                    ))}
                </div>
                <div className="mb-4 text-7xl">
                    {number}
                </div>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                onClick={() => increment()}>
                    Click to increment
                </button>
            </div>


        </>
    );
}

export default App;
