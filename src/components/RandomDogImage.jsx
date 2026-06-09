import {useState, useEffect} from "react";

export default function RandomDogImage() {
  const [imageUrl, setImageUrl] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    fetchImage()
  }, [])

  async function fetchImage() {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random")
      if (!response.ok) {
        throw new Error("Failed to fetch image")
      }
      const data = await response.json()
      setImageUrl(data.message)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return (
    <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center">
      <div className="text-center">
        <div className="spinner-border text-primary mb-3">
        </div>
        <p className="text-muted">Loading the dog-gone best dog pic...</p>
      </div>
    </div>
  )
  if (error) return <p>Error Loading</p>

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="card rounded-4 shadow-lg" style={{ maxWidth: "800px", width: "100%" }}>
        <div className="m-4 " style={{ borderRadius: "20px"}}>
          <img
            src={imageUrl}
            alt="Random Dog"
            className="w-100"
            style={{ height: "600px", objectFit: "contain" }}
          />
          </div>
        <div className="card-body d-flex flex-column align-items-center">
          <h1 className="card-title mb-4" style={{ fontFamily: "Courier New" }}>Random Dog Image</h1>
          <button 
  className="btn btn-lg mt-2 mb-3 bg-danger-subtle border-1 border-dark-subtle"
  style={{
    fontFamily: "Courier New",
    transform: isPressed ? "scale(0.95)" : "scale(1)",
    boxShadow: isPressed ? "none" : "0px 4px 6px rgba(0,0,0,0.2)",
    transition: "all 0.1s ease"
  }}
  onMouseDown={() => setIsPressed(true)}
  onMouseUp={() => setIsPressed(false)}
  onMouseLeave={() => setIsPressed(false)}
  onClick={fetchImage}
>
  New Dog
</button>
        </div>
      </div>
    </div>
  )
}