import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdArrowDropdown } from 'react-icons/io';

import SearchBar from '../molecules/SearchBar.jsx';
import {FaShoppingCart} from 'react-icons/fa';
import PagesDrp from '../molecules/PagesDrp.jsx';

const Navbar = () => {
  const [isSearch,setIsSearch] = useState(false);
  const [isHover,setIsHover] = useState(false);

  const toggleSearch = () =>{
    setIsSearch(prev => !prev);
  }

  // function to achieve animation functionality of navbar
  window.addEventListener('scroll',()=>{
    const navigation = document.getElementById('nav');
     if(window.scrollY){
      navigation.classList.add('nav-animation')
     }else{
      navigation.classList.remove('nav-animation');
     }
  });



  return (
    <header id='nav'>
    <nav>
        <div className='logo'>
       <Link>
       <img src={logo} alt="" />
       </Link>
        </div>
        <div className='navigation'>
            <ul>
               <li>
                <Link to ="/">Home</Link>
               </li>
               <li>
                <Link to ="/about">About</Link>
               </li>
               <li>
                <Link to ="/">Product</Link>
               </li>
               <li>
                <Link 
                onMouseEnter={()=>setIsHover(prev => !prev)}>
                Pages
                <IoMdArrowDropdown />
                </Link>
                {isHover && <PagesDrp hover={isHover}/>}
               </li>
               <li>
                <Link to ="/">Contact</Link>
               </li>
              
            </ul>
        </div>
        <div className='extras'>
           <div className='nav-icons'><AiOutlineSearch onClick={toggleSearch}/>
           </div>
            <Link to={'/cart'} className='nav-icons'>
           <FaShoppingCart/>
           </Link>

        </div>
    </nav>

    { <SearchBar visible={isSearch}/>}

    </header>
  )
}

export default Navbar