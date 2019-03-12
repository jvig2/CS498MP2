var sortTypes = [
  { key: 'popularity', text: 'By Public Approval', value: 'popularity' },
  { key: 'release_date', text: 'By Release Date', value: 'release_date' },
  { key: 'revenue', text: 'By Gross Revenue', value: 'revenue' },
  { key: 'original_title', text: 'Alphabetical Order', value: 'original_title' },
  { key: 'vote_average', text: 'By Vote Median', value: 'vote_average' },
  { key: 'vote_count', text: 'By Vote Total', value: 'vote_count' }
]

var smallerSortTypes = [
  { key: 'original_title', text: 'Alphabetical Order', value: 'original_title' },
  { key: 'popularity', text: 'By Public Approval', value: 'popularity' },
  { key: 'release_date', text: 'By Release Date', value: 'release_date' }
]

var directionTypes = [
  {key: 'ascending', text: 'Ascending Order', value: 'ascending'},
  {key: 'descending', text: 'Descending Order', value: 'descending'}
]

var pageTypes = [
  {key: 1, text: 'Page 1', value: 1},
  {key: 2, text: 'Page 2', value: 2},
  {key: 3, text: 'Page 3', value: 3},
  {key: 4, text: 'Page 4', value: 4},
  {key: 5, text: 'Page 5', value: 5},
  {key: 6, text: 'Page 6', value: 6},
  {key: 7, text: 'Page 7', value: 7},
  {key: 8, text: 'Page 8', value: 8},
  {key: 9, text: 'Page 9', value: 9},
  {key: 10, text: 'Page 10', value: 10}
]

module.exports = {
  SortTypes: sortTypes,
  DirectionTypes: directionTypes,
  PageTypes: pageTypes,
  SmallSortTypes: smallerSortTypes
}
