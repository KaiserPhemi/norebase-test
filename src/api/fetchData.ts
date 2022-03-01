/**
 * Fetches all tags from the API
 * @returns 
 */
export const getAllTags = () => {
  const allTags = fetch(`https://dev.to/api/tags?page=1&per_page=20`)
  return allTags;
}

/**
 * fetches the top 25 articles
 * @returns
 */
export const getAllArticles = () => {
  const allArticles = fetch('https://dev.to/api/articles?page=1&per_page=25')
  return allArticles;
}

/**
 * Fetch litsings
 * @returns 
 */
export const fetchListings = () => {
  const listings = fetch('https://dev.to/api/listings?page=1&per_page=7')
  return listings
}