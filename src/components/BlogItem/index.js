// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props

  const {id, topic, imageUrl, title, avatarUrl, author} = blogDetails

  console.log(blogDetails)
  return (
    <Link className="nav-link" to={`/blogs/${id}`}>
      <li className="blog-item-container">
        <img src={imageUrl} alt={topic} className="blog-item-image" />
        <div className="blog-details-container">
          <h1 className="topic">{topic}</h1>
          <p className="title">{title}</p>
          <div className="author-profile">
            <img src={avatarUrl} alt="avatar" className="profile-img" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
