import axios from "axios";

const KEY = 'AIzaSyC1LqGIjAntwN2D2hVLHDh1hdHSYJOnOCs';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { 
    part : 'snippet',
    maxResults: 5, 
    type : "video",
    key : KEY
  }
});
