import { MdArrowDropDown } from "react-icons/md"

function Header() {
  return (
    <header>
      <div className='header'>
        <img src=''/>
        <input className='search-bar' placeholder='Search or jum to...'/>

        <a href=''>Pull requests</a>
        <a href=''>Issues</a>
        <a href=''>Marketplace</a>
        <a href=''>Explore</a>

        <img src='./bell.png'/>
        <img src=''/>
        <img src="" alt="" className="profile"/>
        <MdArrowDropDown onClick={dropDown} className="btn-drop-down"/>
      </div>
    </header>
  );
}

function dropDown() {
  document.getElementById("drop-down-menu").classList.toggle("invisible");
}

export default Header;