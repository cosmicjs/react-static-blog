import React from 'react'
import {withRouteData} from 'react-static'
import Markdown from "react-markdown";
import { Link } from 'components/Router'

export default withRouteData(({post}) => (
  <React.Fragment>
    <div className="content">
      <Link to="/">{'<'} Back</Link>  
    </div>
    <article>
      <h1>{post.metadata.title}</h1>
      <div>
        <img
          alt={post.metadata.title}
          src={post.metadata.image.url}
        />
      </div>
      <Markdown source={post.metadata.content} />
  </article>
  </React.Fragment>
))
