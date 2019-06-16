import React from 'react'
import {withRouteData} from 'react-static'
import {Link } from '@reach/router'

export default withRouteData(({posts}) =>(
  <React.Fragment>
    <div className="container">
      {posts.map(post => (
        <Link key={post._id} to={`/post/${post._id}`} className="card">
          <div style={{ paddingRight: "1em" }}>
            <img
              alt={post.metadata.title}
              className="card-img"
              src={post.metadata.image.url}
            />
          </div>
          <div>
            <h3 style={{ margin: 0 }}>{post.metadata.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  </React.Fragment>
))
