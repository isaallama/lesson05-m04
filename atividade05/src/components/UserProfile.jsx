import { useState, useEffect } from "react";

function UserProfile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
            const data = await response.json();
            setUser(data);
        }

        fetchUser();

        return () => setUser(null)
    }, []);

    return (
        <div>
            {user ? (
                <div>
                    <h1>{user.name}</h1>
                    <h1>{user.email}</h1>
                </div>
            ) : (
                <p>Loading...</p>
            )}

        </div>
    )

}


export default UserProfile