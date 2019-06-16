import path from 'path'
import axios from 'axios'
import config  from './config'

const gph_query = `{
  getObjects(bucket_slug: "${config.bucket.slug}", input: {
    type: "posts",
    limit: 20,
    read_key: "${config.bucket.read_key}",
  }) {
    		_id
        type_slug
        slug
        title
        metadata
        created_at
  }
}`;

export default {
  getRoutes: async () => {
    const posts = await axios.post('https://graphql.cosmicjs.com/v1', {
      query:gph_query
    })
    .then(function (response) {
      return response.data.data.getObjects
    })

    return [
      {
        path: '/',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post._id}`,
          template: 'src/pages/post',
          getData: () => ({
            post,
          }),
        })),
      },
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
