import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization:
            'Client-ID d6a24c8ff8a8a0cf6b298c94f71a884287e52c4ba4774c262853dc9271e0bdf2'
    }
});