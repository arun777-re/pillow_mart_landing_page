import  { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = ({visible}) => {
  const [searchTerm,setSearchTerm] = useState('')
  return (
    <div className={visible ?'search-bar' : 'search-bar-off'} >
      <input 
      type="text"
      placeholder='...Search based on Name Brand Company Price'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      />
        <AiOutlineSearch className='search-icon'/>
    </div>
  )
}

export default SearchBar;