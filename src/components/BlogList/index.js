// Write your JS code here
import {Component} from 'react'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogsData: []}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const updatedBlogData = data.map(eachBlog => ({
      id: eachBlog.id,
      title: eachBlog.title,
      topic: eachBlog.topic,
      author: eachBlog.author,
      imageUrl: eachBlog.image_url,
      avatarUrl: eachBlog.avatar_url,
    }))
    this.setState({blogsData: updatedBlogData})
  }

  render() {
    const {blogsData} = this.state
    console.log(blogsData)
    return (
      <ul className="blogs-list-container">
        {blogsData.map(eachBlog => (
          <BlogItem blogDetails={eachBlog} key={eachBlog.id} />
        ))}
      </ul>
    )
  }
}

export default BlogList
