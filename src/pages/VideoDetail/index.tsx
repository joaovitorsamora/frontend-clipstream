import React, { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'
import './styles.css'
import { VideoProps } from '../../components/types'
import { useParams } from 'react-router-dom'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt'

export const VideoDetail = () => {
  const [video, setVideo] = useState<VideoProps | null>(null)
  const { id } = useParams<{ id: string }>()
  const [likes, setLikes] = useState<number>(0)
  const [dislikes, setDislikes] = useState<number>(0)
  const [countComments, setCountComments] = useState<number>(0)
  const [sendComments, setSendComments] = useState<{ content: string }[]>([])

  const [newComments, setNewComments] = useState<string>('')

  useEffect(() => {
    if (id) {
      axios
        .get(`https://backend-clipstream.vercel.app/videos/${id}`)
        .then((response) => {
          if (response && response.data) {
            setVideo(response.data)
            setLikes(response.data.likes)
            setDislikes(response.data.dislikes)
            setSendComments(response.data.comments)
            setCountComments(response.data.comments.length)
          } else {
            console.error('Resposta indefinida ou malformada')
          }
        })
        .catch((error) => {
          console.error(error.response ? error.response.data : error.message)
        })
    }
  }, [id])

  useEffect(() => {
    if (id) {
      axios
        .get(`https://backend-clipstream.vercel.app/videos/${id}/comments`)
        .then((response) => {
          setSendComments(response.data.comments)
          setCountComments(response.data.comments.length)
        })
        .catch((error) => {
          console.error('Erro ao buscar comentários:', error)
        })
    }
  }, [id])

  const handleLike = () => {
    axios
      .post(`https://backend-clipstream.vercel.app/videos/${id}/like`)
      .then((response) => {
        setLikes(response.data.likes)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handleDislike = () => {
    axios
      .post(`https://backend-clipstream.vercel.app/videos/${id}/dislike`)
      .then((response) => {
        setDislikes(response.data.dislikes)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewComments(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const newComment = { content: newComments }
    axios
      .post(`https://backend-clipstream.vercel.app/videos/${id}/comment`, newComment)
      .then((response) => {
        console.log(response)
        const newComment = response.data.data.comment
        setSendComments((prevComments) => [...prevComments, { content: newComment }])
        setCountComments((prevCount) => prevCount + 1)
        setNewComments('')
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div className="video-detail">
      {video && (
        <>
          <div className="video-player">
            <iframe
              key={video.id}
              src={video.url}
              title={video.title}
              width="800"
              height="450"
              style={{ maxWidth: '100%' }}
            ></iframe>
          </div>
          <div>
            <div className="video-info">
              <h2>{video.title}</h2>
              <p style={{ color: '#c9c9c9', marginTop: '0.5rem' }}>{video.description}</p>
              <div className="video-actions">
                <button className="button-like" onClick={handleLike}>
                  <ThumbUpOffAltIcon style={{ marginRight: '8px' }} /> {likes}
                </button>
                <button className="button-dislike" onClick={handleDislike}>
                  <ThumbDownOffAltIcon style={{ marginRight: '8px' }} /> {dislikes}
                </button>
              </div>
            </div>
            <div className="video-comments">
              <h3>{countComments} Comentários</h3>
              <form onSubmit={handleSubmit}>
                <input
                  className="comment-input"
                  type="text"
                  value={newComments}
                  onChange={handleChange}
                  placeholder="Escreva um comentário..."
                />
                <button className="comment-button" type="submit">
                  Enviar
                </button>
              </form>
              <ul style={{ listStyleType: 'none', paddingLeft: '20px' }}>
                {sendComments.map((comment, index) => (
                  <li style={{ display: 'block' }} key={index}>
                    <img src="../../assets/user-avatar.svg" style={{ marginRight: '1rem' }} />
                    <strong>user15541656515</strong>
                    <p style={{ paddingLeft: '32px' }}>{comment.content}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
