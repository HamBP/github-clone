import {BsStar} from "react-icons/bs"

function Main() {
  return (
    <main>
      <div className={"feed-container"}>
        <div>
          <img src="https://avatars.githubusercontent.com/u/47032054?s=64&v=4" alt="" className="feed-profile"/>
        </div>

        <div className={"feed"}>
          <div className="feed-title">
            <a href="">GHeeJeon </a>forked<a href=""> GHeeJeon/qoomon  </a><span className={"datetime"}>9 hours ago</span>
          </div>
          <div className="card feed-content">
            <div className="btn-star">
              <BsStar className={"star"}/> Star
            </div>

            <a href="">qoomon/qoomon</a>
            <p>About</p>
            <p className={"feed-footer"}>
              <BsStar class={"star"}/> 1 <span className={"datetime"}>Updated May 11</span>
            </p>
          </div>
        </div>
      </div>

      <div className={"feed-container"}>
        <div>
          <img src="https://avatars.githubusercontent.com/u/47032054?s=64&v=4" alt="" className="feed-profile"/>
        </div>

        <div className={"feed"}>
          <div className="feed-title">
            <a href="">bbaktaeho</a> starred <a href="">dntlakfn/java-study</a> <span className={"datetime"}>2 days ago</span>
          </div>
          <div className="card feed-content">
            <div className="btn-star">
              <BsStar className={"star"}/> Star
            </div>

            <a href="">dntlakfn/java-study</a>
            <p>자바 과외</p>
            <p>
              <img src="" alt="" className={"language-color"}/><span className={"language"}>Java</span> <BsStar class={"star"}/> 1 <span className={"datetime"}>Updated May 11</span>
            </p>
          </div>
        </div>
      </div>

      <div className={"feed-container"}>
        <div>
          <img src="https://avatars.githubusercontent.com/u/81911257?s=64&v=4" alt="" className="feed-profile"/>
        </div>

        <div className={"feed"}>
          <div className="feed-title">
            <a href="">kimyekang</a> created a repository <a href="">kimyekang/AppCenterStudy2 </a><span className={"datetime"}>2 days ago</span>
          </div>
          <div className="card feed-content">
            <div className="btn-star">
              <BsStar className={"star"}/> Star
            </div>

            <a href="">kimyekang/AppCenterStudy2</a>
            <p>
              <span className={"datetime"}>Updated May 9</span>
            </p>
          </div>
        </div>
      </div>

      <div className={"feed-container"}>
        <div>
          <img src="https://avatars.githubusercontent.com/u/47032054?s=64&v=4" alt="" className="feed-profile"/>
        </div>

        <div className={"feed"}>
          <div className="feed-title">
            <a href="">GHeeJeon </a>forked<a href=""> GHeeJeon/qoomon  </a><span className={"datetime"}>9 hours ago</span>
          </div>
          <div className="card feed-content">
            <div className="btn-star">
              <BsStar className={"star"}/> Star
            </div>

            <a href="">qoomon/qoomon</a>
            <p>About</p>
            <p>
              <BsStar class={"star"}/> 1 <span className={"datetime"}>Updated May 11</span>
            </p>
          </div>
        </div>
      </div>

      <div className={"feed-container"}>
        <div>
          <img src="https://avatars.githubusercontent.com/u/47032054?s=64&v=4" alt="" className="feed-profile"/>
        </div>

        <div className={"feed"}>
          <div className="feed-title">
            <a href="">GHeeJeon </a>forked<a href=""> GHeeJeon/qoomon  </a><span className={"datetime"}>9 hours ago</span>
          </div>
          <div className="card feed-content">
            <div className="btn-star">
              <BsStar className={"star"}/> Star
            </div>

            <a href="">qoomon/qoomon</a>
            <p>About</p>
            <p>
              <BsStar class={"star"}/> 1 <span className={"datetime"}>Updated May 11</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;