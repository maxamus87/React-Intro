import {useState, useEffect} from "react"

export default function CatFact() {
    const [fact, setFact] = useState(() => {
        const saved = localStorage.getItem("catFact")
        return saved ? JSON.parse(saved) : null

    });
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!fact) {
            fetchFact()
        }
    }, []);

    async function fetchFact() {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch("https://catfact.ninja/fact")

            if (!response.ok) {
                throw new Error("Failed to fetch cat fact")
            }

            const data = await response.json()
            localStorage.setItem("catFact", JSON.stringify(data))
            setFact(data)
        }catch (error) {
            setError(error)
        }finally {
            setLoading(false)
        }
        
    }

    if (loading) return (
        <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
            <div className="text-center">
                <div className="spinner-border text-primary mb-3">
                <p className="text-muted">Loading a purrfect fact...</p>
                </div>
            </div>
        </div>
    )
    if (error) return <p>There was an issue fetching your data: {error.message}</p>

   return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="card shadow-lg" style={{ maxWidth: "400px", width: "100%" }}>
        <div className="card-body d-flex flex-column align-items-center">
          <h1 className="card-title">Random Dog Image</h1>
          <img src={imageUrl} alt="Random Dog" className="img-fluid rounded-4 mb-3" style={{ maxWidth: "400px" }} />
          <button className="btn btn-primary btn-lg rounded-pill" onClick={fetchImage}>New Dog</button>
        </div>
      </div>
    </div>
)
}