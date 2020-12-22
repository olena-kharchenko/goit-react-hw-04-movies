const BASE_URL = 'https://developers.themoviedb.org/3';
const API_KEY = 'cc0ba8d7ea5bf241e069bff954347f20';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrendingMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/get-trending/api_key=${API_KEY}`,
  );
}

// export function fetchAuthors() {
//   return fetchWithErrorHandling(`${BASE_URL}/authors?_embed=books`);
// }

// export function fetchBooks() {
//   return fetchWithErrorHandling(`${BASE_URL}/books`);
// }

// export function fetchBookById(bookId) {
//   return fetchWithErrorHandling(`${BASE_URL}/books/${bookId}?_expand=author`);
// }
