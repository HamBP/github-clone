import {BsMoon} from "react-icons/bs";

function Aside() {
  return (
    <aside>
      <div className="dark-mode card">
        <BsMoon className={"moon"}/>
        <h3>Dark mode is here!</h3>
        <p>
          Go to Settings → Appearance to choose your theme preference.
        </p>
        <a href="">Go to Settings</a>
      </div>

      <h2>Explore repositories</h2>

      <div className="repositories">
        <div className={"repository divider"}>
          <a href="">codestates/lilakchal-client</a>
          <img className="typescript divider"></img><span>Typescript</span> <span>☆2</span>
        </div>
        <div className={"repository divider"}>
          <a href="">vidit135g/Floral</a>
          <img className="javascript divider"></img><span>Javascript</span> <span>☆4</span>
        </div>
        <div className={"repository"}>
          <a href="">swmTeam-29/main-container</a>
          <p>멘토링 신청/취소와 멘토링 한줄평 기능을 제공하는 챗봇 애기 멘티 소마!</p>
          <img className="javascript"></img><span>Javascript</span> <span>☆4</span>
        </div>
      </div>

      <a id="explore-more" href="">Explore more →</a>
    </aside>
  );
}

export default Aside;