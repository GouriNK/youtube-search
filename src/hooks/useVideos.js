// CUSTOM HOOKS are a way to wrap up reusable logic inside an application

import {useEffect, useState} from "react";
import youtube from "../api/youtube";

/*
INPUT : default search term
OUTPUT : list of Videos AND a function to search for videos
*/
const useVideos = (defaultSearchTerm) => {

    const [videos, setVideoList] = useState([]);

    useEffect(()=>{
        search(defaultSearchTerm);
    },[defaultSearchTerm]);

    const search = async (term) => {
        const response = await youtube.get("/search", {
            params: {
            q: term,
            },
        });
        setVideoList(response.data.items);
    };

    return [ videos, search ];
    // OR
    // return { videos, search };
    

};

export default useVideos;
