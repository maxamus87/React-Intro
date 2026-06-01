import {useState, useEffect} from "react";

export default function RandomDogImage() {
  const [imageUrl, setImageUrl] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

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

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error Loading</p>

  return (
    <div>
      <h1>Random Dog Image</h1>
      <img src={imageUrl} alt="Random Dog" />
      <button onClick={fetchImage}>New Dog</button>
    </div>
  )
}
