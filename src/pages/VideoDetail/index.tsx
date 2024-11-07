import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './styles.css'
import { useParams } from 'react-router-dom'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt'
import { useDispatch, useSelector } from 'react-redux'
import { addComment, setDislikes, setLikes, setVideoDetail } from '../../redux/video-detail/actions'
import rootReducer from '../../redux/root-reducer'
import { Comment } from '../../redux/video-detail/reducer'
import { Title } from '../../components'

const generateUsername = () => `user${Math.floor(Math.random() * 1000000000)}`
export const VideoDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [countComments, setCountComments] = useState<number>(0)
  const [newComments, setNewComments] = useState<string>('')
  const dispatch = useDispatch()

  const { videos, likes, dislikes, comments } = useSelector(
    (state: ReturnType<typeof rootReducer>) => state.videoDetailReducer
  )
  console.log(comments)

  useEffect(() => {
    if (id) {
      axios
        .get(`https://backend-clipstream.vercel.app/videos/${id}`)
        .then((response) => {
          dispatch(setVideoDetail(response.data))
          dispatch(setLikes(response.data.likes))
          dispatch(setDislikes(response.data.dislikes))
          dispatch(addComment(response.data.comments))
          setCountComments(response.data.comments.length)
        })
        .catch((error) => {
          console.error(error.response ? error.response.data : error.message)
        })
    }
  }, [id, dispatch])

  // useEffect(() => {
  //   if (id) {
  //     axios
  //       .get(`https://backend-clipstream.vercel.app/videos/${id}/comments`)
  //       .then((response) => {
  //         dispatch(addComment(response.data.comments))
  //         setCountComments(response.data.comments.length)
  //       })
  //       .catch((error) => {
  //         console.error('Erro ao buscar comentários:', error)
  //       })
  //   }
  // }, [id, dispatch])

  const handleLike = () => {
    axios
      .post(`https://backend-clipstream.vercel.app/videos/${id}/like`)
      .then((response) => {
        dispatch(setLikes(response.data.likes))
      })
      .catch((error) => {
        console.error(error)
      })
  }

  const handleDislike = () => {
    axios
      .post(`https://backend-clipstream.vercel.app/videos/${id}/dislike`)
      .then((response) => {
        dispatch(setDislikes(response.data.dislikes))
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
    const newUserComments = { content: newComments, user: generateUsername() }
    axios
      .post(`https://backend-clipstream.vercel.app/videos/${id}/comment`, newUserComments)
      .then((response) => {
        console.log(response)
        const newComment = response.data.data.comment
        dispatch(addComment(newComment))
        setCountComments((prevCount) => prevCount + 1)
        setNewComments('')
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <section className="main-container">
      {videos && (
        <div key={videos.id}>
          <div className="container-video-player">
            <iframe
              key={videos.id}
              src={videos.url}
              title={videos.title}
              width="800"
              height="450"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <header className="container-info">
              <Title level={2}>{videos.title}</Title>
              <Title level={5} className="paragraph-video-info">
                {videos.description}
              </Title>
              <div className="video-actions">
                <button className="button-like" onClick={handleLike}>
                  <ThumbUpOffAltIcon className="thumbup-icon" /> {likes}
                </button>
                <button className="button-dislike" onClick={handleDislike}>
                  <ThumbDownOffAltIcon className="thumbdown-icon" /> {dislikes}
                </button>
              </div>
            </header>
            <div className="video-comments">
              <Title level={3}>{countComments} Comentários</Title>
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
              <ul>
                {comments.map((comment: Comment, index: number) => (
                  <li key={index}>
                    <section>
                      <img src="/user-avatar.png" />
                      <p className="user-paragraph-comments">{comment.user}</p>
                      <p className="content-paragraph-comments">{comment.content}</p>
                    </section>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
