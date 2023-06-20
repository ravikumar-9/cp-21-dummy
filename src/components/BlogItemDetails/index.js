// Write your JS code here
import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemDetails: {}}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props

    const {params} = match

    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedBlogItemData = {
      id: data.id,
      title: data.title,
      author: data.author,
      content: data.content,
      avatarUrl: data.avatar_url,
      imageUrl: data.image_url,
    }
    this.setState({blogItemDetails: updatedBlogItemData})
  }

  render() {
    const {blogItemDetails} = this.state
    console.log(blogItemDetails)
    return <div className="blog-item-dtls-container">h</div>
  }
}

export default BlogItemDetails
