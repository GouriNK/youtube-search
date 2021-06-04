import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";


const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label> Enter keywords for video search </label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};


// class SearchBar extends React.Component {
//   state = {
//     term: "",
//   };

//   onFormSubmit = (event) => {
//     event.preventDefault();
//     console.log(this.state.term);
//     this.props.onSubmit(this.state.term);
//   };

//   // onInputChange = e => {
//   //     this.setState({term : e.target.value});
//   // }

//   render() {
//     return (
//       <div className="ui segment">
//         <form className="ui form" onSubmit={this.onFormSubmit}>
//           <div className="field">
//             <label> Video search</label>
//             <input
//               type="text"
//               value={this.state.term}
//               onChange={(e) => this.setState({ term: e.target.value })}
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// == MY VERSION to functional component ==
// const SearchBar = ({initialState, setDebouncedTerm}) => {

//   const [term, setTerm] = useState(initialState);

//   useEffect(()=>{
//     const timerId = setTimeout(() => {
//       setDebouncedTerm(term);
//     }, 1000);

//     return () => {
//       clearTimeout(timerId);
//     }
//   }, [term])

//   return (
//     <div className="ui segment">
//       <form className="ui form">
//         <div className="field">
//           <label> Video search</label>
//           <input
//             type="text"
//             value={term}
//             onChange={(e) => setTerm(e.target.value )}
//           />
//         </div>
//       </form>
//     </div>
//   );
// }

export default SearchBar;
