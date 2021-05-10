import { MdArrowDropDown } from "react-icons/md";
import { BsBell } from "react-icons/bs";
import { CgMathPlus } from "react-icons/cg";
import { AiFillGithub } from "react-icons/ai";

function Header() {
  return (
    <header>
      <div className='header'>
        <div className="header-left">
          <a href="https://github.com/" id="github-home"><AiFillGithub class="github-icon"/></a>
          <form action="" className='search-bar'>
            <input id="search-bar" placeholder='Search or jum to...'/>
          </form>

          <div className="nav">
            <a href=''>Pull requests</a>
            <a href=''>Issues</a>
            <a href=''>Marketplace</a>
            <a href=''>Explore</a>
          </div>

        </div>


        <div className="header-right">
          <BsBell className="bell"/>
          <CgMathPlus className="plus"/>
          <MdArrowDropDown className="btn-drop-down"/>
          <img src="https://avatars.githubusercontent.com/u/35232655?s=60&v=4" alt="" className="profile"/>
          <MdArrowDropDown onClick={dropDown} className="btn-drop-down"/>
        </div>

      </div>
    </header>
  );
}

function dropDown() {
  document.getElementById("drop-down-menu").classList.toggle("invisible");
}

export default Header;