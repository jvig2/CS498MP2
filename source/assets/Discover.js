class Discover {
  page (page) {
    if (!page || page < 1) 
    {
      return this.page(1)
    }

    this.params['page'] = page

    return this
  }

  sortByReleaseDate (ascending) 
  {
    return this._sortby('release_date', ascending)
  }

  sortByRevenue (ascending) 
  {
    return this._sortby('revenue', ascending)
  }

  sortByOriginalTitle (ascending) 
  {
    return this._sortby('original_title', ascending)
  }

  includeAdult (includeAdult) 
  {
    this.params['include_adult'] = includeAdult

    return this
  }

  withGenres (genres) 
  {
    if (!genres) 
    {
      return this
    } else if (genres.length === 0) 
    {
      return this
    }

    this.params['with_genres'] = genres.join(',')
    return this
  }

  _sortDirection (ascending) 
  {
    return (ascending) ? '.asc' : '.desc'
  }

  constructor () 
  {
    this.params = {}
  }

  _sortBy (type, ascending) 
  {
    this.params['sort_by'] = type + this._sortDirection(ascending)

    return this
  }

  sortByPopularity (ascending) 
  {
    return this._sortby('popularity', ascending)
  }

  sortByVoteAverage (ascending) 
  {
    return this._sortby('vote_average', ascending)
  }

  sortByVoteCount (ascending) 
  {
    return this._sortby('vote_count', ascending)
  }
}

export default Discover
