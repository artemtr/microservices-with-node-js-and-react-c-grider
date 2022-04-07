import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default ({postId}) => {
  const [comments, setComment] = useState({})
  const fetchComments = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`,
    )

    setComment(res.data)
  }

  useEffect(() => {
    fetchComments()
  }, [])

  const renderedComments = Object.values(comments).map(comment => {
    return (
      <div>
        <li key={comment.id}>{comment.content}</li>
      </div>
    )
  })

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      <ul>{renderedComments}</ul>
    </div>
  )
}
