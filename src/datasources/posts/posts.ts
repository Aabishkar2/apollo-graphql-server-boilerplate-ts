import { RESTDataSource } from 'apollo-datasource-rest'

export class PostsAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://jsonplaceholder.typicode.com/'
  }

  async getPosts() {
    return this.get(`posts`)
  }
}
