export default {
    bucket: {
      slug: process.env.COSMIC_BUCKET || 'coffee-blog',
      read_key: process.env.COSMIC_READ_KEY || '',
      write_key: process.env.COSMIC_WRITE_KEY || '',
      port: process.env.PORT || '',  
    }
  }
