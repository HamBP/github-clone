import { MdArrowDropDown } from "react-icons/md";
import { AiOutlineBook } from "react-icons/ai";

function Board() {
  return (
    <div className='board'>
      <div className='dashboard-context'>
        <img className="mini-profile" src="https://avatars.githubusercontent.com/u/35232655?s=60&v=4" alt=""/>
        <span className="nickname">HamBP</span>
        <MdArrowDropDown className="dropdown"/>
      </div>

      <div class="repository-title">
        <h2>Repositories</h2>
        <a href=''>New</a>
      </div>

      <input id="find-repository" placeholder='Find a repository...' />

      <div className="repositories">
        <div className={"flex"}>
          <AiOutlineBook className={"book"}/><a href=''>inu-appcenter/INU-emotion-android</a>
        </div>
        <div className={"flex"}>
          <AiOutlineBook className={"book"}/><a href=''>HamBP/chat-unavailable</a>
        </div>
        <div className={"flex"}>
          <AiOutlineBook className={"book"}/><a href=''>INU-Fake-Develo... /IamJunYoung</a>
        </div>
      </div>

      <button id="btn-show-more" type='submit'>show more</button>
      <hr />

      <h2>Your teams</h2>
      <input placeholder='Find a team...' />
      <div className="flex">
        <a href="">INU-Fake-Developers/season-2</a>
      </div>
      <div className="flex">
        <a href="">inu-appcenter/android</a>
      </div>
    </div>
  );
}

export default Board;