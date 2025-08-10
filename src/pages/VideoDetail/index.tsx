import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt'
import { useDispatch, useSelector } from 'react-redux'
import { addComment, setDislikes, setLikes, setVideoDetail } from '../../redux/video-detail/actions'
import rootReducer from '../../redux/root-reducer'
import { Comment } from '../../types'
import { TypographyH2 } from '../../ui/Typography/TypographyH2'
import { TypographyH3 } from '../../ui/Typography/TypographyH3'
import ExpandableText from '../../components/ExpandableText'

const generateUsername = () => `user${Math.floor(Math.random() * 1000000000)}`
const VideoDetail = () => {
  const { id } = useParams<{ id: string }>()
  const [countComments, setCountComments] = useState<number>(0)
  const [newComments, setNewComments] = useState<string>('')
  const [likeEnable, setLikeEnable] = useState(true)
  const [dislikeEnable, setDislikeEnable] = useState(true)
  const dispatch = useDispatch()

  const { videos, likes, dislikes, comments } = useSelector(
    (state: ReturnType<typeof rootReducer>) => state.videoDetailReducer
  )

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

  const handleLike = () => {
    axios
      .post(`https://backend-clipstream.vercel.app/videos/${id}/like`)
      .then((response) => {
        dispatch(setLikes(response.data.likes))
        setLikeEnable(false)
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
        setDislikeEnable(false)
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
    <section className="flex flex-col items-center px-4 sm:px-6 md:px-8 py-6 text-white bg-black min-h-screen">
      {videos && (
        <div key={videos.id} className="w-full max-w-screen-xl flex flex-col gap-6">
          <div className="w-full flex justify-center">
            <iframe
              src={videos.url}
              title={videos.title}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="aspect-video w-full max-w-5xl rounded-md shadow-lg border border-neutral-700"
            />
          </div>
          <header className="w-full max-w-5xl flex flex-col gap-4 px-4">
            <TypographyH2 className="text-xl sm:text-2xl md:text-3xl text-white font-bold">{videos.title}</TypographyH2>
            <ExpandableText
              text={videos.description}
              maxLength={120}
              className="bg-neutral-800 text-neutral-300 text-base sm:text-lg p-4 rounded-md"
            />
            <div className="flex gap-4">
              <button
                className="flex items-center gap-1 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded disabled:opacity-50"
                onClick={handleLike}
                disabled={!likeEnable}
              >
                <ThumbUpOffAltIcon /> {likes}
              </button>
              <button
                className="flex items-center gap-1 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded disabled:opacity-50"
                onClick={handleDislike}
                disabled={!dislikeEnable}
              >
                <ThumbDownOffAltIcon /> {dislikes}
              </button>
            </div>
          </header>
          <div className="w-full max-w-5xl px-4">
            <TypographyH3 className="text-lg text-white mb-4">{countComments} Comentários</TypographyH3>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
              <input
                className="w-full sm:w-3/4 border-b-2 border-white bg-transparent px-3 py-2 text-white placeholder:text-neutral-400 focus:outline-none"
                type="text"
                value={newComments}
                onChange={handleChange}
                placeholder="Escreva um comentário..."
              />
              <button type="submit" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">
                Enviar
              </button>
            </form>
            <ul className="space-y-6">
              {comments.map((comment: Comment, index: number) => (
                <li key={index} className="flex gap-3 items-start">
                  <img src="/user-avatar.png" alt="Avatar" className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="text-sm font-semibold text-white">{comment.user}</p>
                    <p className="text-neutral-300">{comment.content}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  )
}

export default VideoDetail
