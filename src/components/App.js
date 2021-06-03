import React, {useState, useEffect} from "react";
import youtube from "../api/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {

  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(()=>{
    onSearchSubmit('buildings');
  },[]);

  const onSearchSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideoList(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  // check how to setVideo on select. Line 38
  return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
            <VideoList 
              videos={videoList}
              onVideoSelect={setSelectedVideo}
            />
            </div>
          </div>
        </div>
      </div>
    );

};

// class App extends React.Component {
//   state = {
//     videoList: [],
//     selectedVideo : null
//   };

//   // this will do the default search on page load
//   componentDidMount() {
//     this.onSearchSubmit('buildings');
//   }

//   // callback for clicking on a video to show in the detailed view
//   onVideoSelect = (video) => {
//     console.log('From the App!', video.snippet.title);
//     this.setState({ selectedVideo: video });
//   }

//   onSearchSubmit = async (term) => {
//     console.log("in App.js --> ", term);
//     const response = await youtube.get("/search", {
//       params: {
//         q: term,
//       },
//     });
//     this.setState({ 
//       videoList: response.data.items,
//       selectedVideo : response.data.items[0]
//     });
//   };

//   render() {
//     return (
//       <div className="ui container" style={{ marginTop: "10px" }}>
//         <SearchBar onSubmit={this.onSearchSubmit} />
//         <div className="ui grid">
//           <div className="ui row">
//             <div className="eleven wide column">
//             <VideoDetail video={this.state.selectedVideo} />
//             </div>
//             <div className="five wide column">
//             <VideoList videos={this.state.videoList} onVideoSelect={this.onVideoSelect}/>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }


// == MY VERSION to functional component ==
// export default () => {

//   const [videoList, setVideoList] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);
//   const [debouncedTerm, setDebouncedTerm] = useState('buildings');

//   useEffect(()=>{
//     const searchYoutube = async () =>{
//       const response = await youtube.get("/search", {
//         params: {
//           q: debouncedTerm,
//         },
//       });
//       setVideoList(response.data.items);
//       setSelectedVideo(response.data.items[0]);
//     };
//     searchYoutube();
//   },[debouncedTerm]);

//   return (
//     <div className="ui container" style={{ marginTop: "10px" }}>
//       <SearchBar initialState={debouncedTerm} setDebouncedTerm={setDebouncedTerm} />
//       <div className="ui grid">
//         <div className="ui row">
//           <div className="eleven wide column">
//           <VideoDetail video={selectedVideo} />
//           </div>
//           <div className="five wide column">
//           <VideoList videos={videoList} setSelectedVideo={setSelectedVideo}/>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

// }


export default App;
