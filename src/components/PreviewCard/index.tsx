import { useState, useEffect } from 'react'
import './styles.css'
interface LinkPreview {
  title: string
  url: string
  description: string
  site: string
  image: string
}

export const LinkPreview: React.FC<LinkPreview> = ({ title, url, description, site, image }) => {
  const [previewData, setPreviewData] = useState<LinkPreview>({
    title: '',
    url: '',
    description: '',
    site: '',
    image: '',
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setPreviewData({ title, url, description, site, image })
        setLoading(false)
      } catch (error) {
        console.error(error)
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  if (loading) {
    return <p>Loading...</p>
  }

  if (!previewData) {
    return <p>Failed to fetch link preview.</p>
  }

  const handleClick = () => {
    window.open(url, '_blank')
  }

  return (
    <div className="previewcard-container" onClick={handleClick}>
      <div className="info">
        <h3>
          {previewData.title} - {previewData.site}
        </h3>
        <p>{previewData.description}</p>
      </div>
      <div className="image">
        {previewData.image && <img style={{ width: '220px' }} src={previewData.image} alt="Link Preview" />}
      </div>
    </div>
  )
}
