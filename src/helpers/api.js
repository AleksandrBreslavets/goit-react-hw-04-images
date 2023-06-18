import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '35917814-1222498717b1f5a240e2b1908';
export const getImages = async (query, page, abortCtrl) => {
    const response = await axios.get('', {
        params: {
            q: query,
            page,
            key: API_KEY,
            image_type: 'photo',
            orientation: 'horizontal',
            per_page:12
        },
        signal:abortCtrl.signal,
    })
    return response;
}