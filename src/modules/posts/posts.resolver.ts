import axios from '../../config/axios'
import { json } from 'express'

const resolver = {
  Query: {
    getAllTypes: async (root: any, args: any) => {
      const data = await axios.get('/posts')
      return data.data
    },
  },
}
export default resolver
