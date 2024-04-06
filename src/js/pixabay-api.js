import axios from 'axios';

export async function getPhotos(q, currentPage) {
  const API_KEY = '43160524-9a6063b2023a0abfcd049074a';
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: currentPage,
    per_page: 15,
  });
  try {
    const res = await axios.get(BASE_URL, { params });
    return res.data;
  } catch (error) {
    console.error('Error fetching images:', error);
  }
  // return fetch(`${BASE_URL}/?${params}`).then(response => {
  //   if (!response.ok) {
  //     throw new Error(response.status);
  //   }
  //   return response.json('');
  // });
}
