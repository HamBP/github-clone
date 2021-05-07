function Logo() {
  return (
    <header>
      <div className='header'>
        <input className='search-bar' placeholder='Search or jum to...'/>

        <a href=''>Pull requests</a>
        <a href=''>Issues</a>
        <a href=''>Marketplace</a>
        <a href=''>Explore</a>

        <img src='./bell.png'/>
      </div>
    </header>
  );
}

export default Logo;