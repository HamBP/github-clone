function Board() {
  return (
    <div className='board'>
      <div className='dashboard-context'>
        <img src='' />
        <span>HamBP</span>
        <img src='' />
      </div>
      <hr />

      <div>
        <h2>Repositories</h2>
        <a href=''>New</a>
      </div>

      <input placeholder='Find a repository...' />

      <ul>
        <li>inu-appcenter/INU-emotion-android</li>
        <li>HamBP/chat-unavailable</li>
        <li>INU-Fake-Develo... /IamJunYoung</li>
      </ul>

      <button type='submit'>show more</button>
      <hr />

      <h2>Your teams</h2>
      <input placeholder='Find a team...' />
      <ul>
        <li>INU-Fake-Developers/season-2</li>
        <li>inu-appcenter/android</li>
      </ul>
    </div>
  );
}

export default Board;