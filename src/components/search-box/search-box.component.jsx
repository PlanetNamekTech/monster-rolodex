// import { Component } from "react";
import './search-box.styles.css';
// Keeping class Component example on this one

const SearchBox = ({ className, placeholder, onChangeHandler}) => {
    //Could also be implicitly returned without brackets or return statement
    <input 
        className= {`search-box ${className}`} 
        type='search' 
        placeholder={placeholder} 
        onChange={onChangeHandler}
    />
} 
       
    
    

// class SearchBox extends Component {
//     render() {
//         return (
//             
//         )
//     }
// }

export default SearchBox;