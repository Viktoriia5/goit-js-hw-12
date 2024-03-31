export function getPhotos(q) {
  const API_KEY = '43160524-9a6063b2023a0abfcd049074a';
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}/?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json('');
  });
}
