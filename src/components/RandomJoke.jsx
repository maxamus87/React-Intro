import {useState, useEffect} from "react";

export default function RandomJoke() {
    const [joke, setJoke] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchJoke();
    }, []);

    async function fetchJoke() {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("https://official-joke-api.appspot.com/random_joke");

            if (!response.ok) {
                throw new Error("This isn't funny...");
            }

            const data = await response.json()
            setJoke(data);
        
        }   catch (error) {
            setError(error);
        }   finally {
            setLoading(false);
        }
    }

    if (loading) return (
        <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
            <div className="text-center">
                <div className="spinner-border text-primary mb-3"></div>
                <p className="text-muted">Loading a joke...</p>
            </div>
        </div>
    );
    if (error) return <p>There was an issue fetching your data: {error.message}</p>;

        return (
            <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
                <div className="card rounded-4 shadow-lg" style={{ maxWidth: "600px", width: "100%" }}>
                    <div className="card-body d-flex flex-column align-items-center p-5">
                        <h4 className="card-title mb-4" style={{ fontFamily: "Courier New" }}>Random Joke Generator!</h4>
                        <p className="text-center mb-2" style={{ fontFamily: "Courier New" }}><strong>Setup:</strong> {joke.setup}</p>
                        <hr className="w-100" />
                        <p className="text-center" style={{ fontFamily: "Courier New" }}><strong>Punchline:</strong> {joke.punchline}</p>
                        <button
                            className="btn btn-sm mt-3 btn-dark"
                            style={{ fontFamily: "Courier New" }}
                            onClick={fetchJoke}
                        >
                            New Joke
                        </button>
                    </div>
                </div>
            </div>
        );
}