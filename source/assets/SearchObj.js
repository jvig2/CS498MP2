class SearchObj {
  query (query) {
    this.params['query'] = query

    return this
  }

  constructor () {
    this.params = {
      'include_adult': false
    }
  }
}

export default SearchObj
