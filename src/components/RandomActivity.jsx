import {useState, useEffect} from "react";

export default function RandomActivity() {
    const [activity, setActivity] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchActivity();
    }, []);

    async function fetchActivity() {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("https://bored-api.appbrewery.com/random");

            if (!response.ok) {
                throw new Error("Failed to fetch activity");
            }

            const data = await response.json()
            setActivity(data);
        
        }   catch (error) {
            setError(error);
        }   finally {
            setLoading(false);
        }
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>There was an issue fetching your data: {error.message}</p>;

        return (
            <div>
                <h1>Random Activity</h1>
                <p>Activity: {activity.activity}</p>
                <p>Type: {activity.type}</p>
                <p>Participants: {activity.participants}</p>
                <button onClick = {fetchActivity}>New Activity</button>
            </div>
        );
}