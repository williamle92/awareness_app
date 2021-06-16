import axios from 'axios'

const KEY = 'AIzaSyC7Gu9jH_wRLYVfslx4YGdvTRLb2TmxX9A'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        type: 'video',
        maxResults: 5, 
        key : KEY
    }
});