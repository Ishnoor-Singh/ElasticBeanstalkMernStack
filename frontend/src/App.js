import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import axios from 'axios'
// const BASE = 'http://localhost:3333/'
const BASE = '/api/'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      blogs: [{ title: 'title', text: 'this isnot the text' }]
    };
    this.addBlog = this.addBlog.bind(this)
  }
  componentDidMount(){
    axios({
      method:'GET',
      url: BASE + 'blogs/all'
    }).then(res => this.setState({blogs: res.data}))
  }
  // deleteBlog(hua) {
  //   console.log(hua)
  //   this.setState({ blogs: this.state.blogs.filter(blog => blog.title !== hua.title && blog.text !== hua.text) })
  // }

  addBlog(event) {
    event.preventDefault();
     axios({
      method:'POST',
      url: BASE + 'blogs/new',
      data: {
        title: event.target.title.value,
        text: event.target.title.value
      }
    })
    let currBlogs = this.state.blogs
    currBlogs.push({ title: event.target.title.value, text: event.target.text.value })
    this.setState({ blogs: currBlogs })
  }
  render() {
    let { blogs } = this.state
    // console.log(blogs)
    return (
      <div className="App">
        <div>
          {
            blogs.map((blog, idx) => {
              return (
                <div key={idx}>
                  <h1>{blog.title}</h1>
                  <h6>{blog.text}</h6>
                  {/* <button onClick={() => this.deleteBlog(blog)}>Delete</button> */}
                </div>
              )
            })
          }
        </div>
        <form onSubmit={this.addBlog} style={{ paddingTop: "2rem" }}>
          <label for="title">Title:</label><br />
          <input type="text" id="title" name="title" /><br />
          <label for="text">Text:</label><br />
          <input type="text" id="text" name="text" /><br /><br />
          <input type="submit" value="Submit" />
        </form>

      </div>
    )
  }
}

