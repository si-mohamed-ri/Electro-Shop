import React, { useContext, useState } from 'react'
import './Navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {

  const {dispatch} = useContext(DarkModeContext);
  const [show, setShow] = useState(DarkModeContext);

  return (
    <div className="navbar">
      <div className="left">
        <input type="text" placeholder='Search...'/>
        <SearchOutlinedIcon className='Icon'/>
      </div>
      <div className="right">
        <div className="items">
        <div className="item">
            {show ? ( <img src="https://cdn-icons-png.flaticon.com/512/581/581601.png" alt="" onClick={()=> dispatch({type:"TOGGLE"},setShow(!show))}/>) :
            <img src="https://cdn-icons-png.flaticon.com/512/3073/3073665.png" alt="" onClick={()=> dispatch({type:"TOGGLE"},setShow(!show))}/>}
          </div>
          <div className="item">
            <img src="https://cdn-icons-png.flaticon.com/512/3703/3703259.png" alt="" />
            <span>Products</span>
          </div>
          <div className="item">
            <img src="https://cdn-icons-png.flaticon.com/512/5006/5006765.png" alt="" />
            <span>Carts<span>(5)</span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar