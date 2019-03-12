import Axios from 'axios'

class MovieRequest {
  maxRedirects (maxRedirects) {
    this.configuration.maxRedirects = maxRedirects

    return this
  }

  method (method) {
    this.configuration.method = method

    return this
  }

  headers (headers) {
    this.configuration.headers = headers

    return this
  }

  data (data) {
    this.configuration.data = data

    return this
  }

  searchMovies (params) {
    return this._makeRequest(params, '/search/movie')
  }

  discoverMovies (params) {
    return this._makeRequest(params, '/discover/movie')
  }

  getMovieById (id) {
    return this._makeRequest({}, `/movie/${id}`)
  }

  _makeRequest (params, url) {
    let config = this.configuration
    config.params = this._mergeParams(params)
    config.url = url

    return Axios(config)
  }
  _mergeParams (toMerge) {
    let newParams = this.params

    for (let key in toMerge) {
      if (toMerge.hasOwnProperty(key)) {
        newParams[key] = toMerge[key]
      }
    }

    return newParams
  }

  constructor (apiKey = '70f874b8df6b617b38ea97652636d663') {
    this.params = {
      api_key: apiKey,
      language: 'en_us'
    }

    this.configuration = {
      baseURL: 'https://api.themoviedb.org/3'
    }
  }

  timeout (timeout) {
    this.configuration.timeout = timeout

    return this
  }

  responseType (responseType) {
    this.configuration.responseType = responseType

    return this
  }

  maxContentLength (maxContentLength) {
    this.configuration.maxContentLength = maxContentLength

    return this
  }
}

export default MovieRequest
