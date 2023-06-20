import axios from 'axios';

export const fetchImage = async (query, page) => {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '30249749-d55f47b4585d1b9efabc8a3ca';

  const response = await axios.get(
    `${BASE_URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data;
};
