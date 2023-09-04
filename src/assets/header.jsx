import crabImg from "../assets/crab.svg";

export default function HeaderEl() {
  return (
    <div className="nav-container">
      <img src={crabImg} alt="" />
      <h1>
        {" "}
        Crabs <span>"R"</span> Us{" "}
      </h1>
      <div className="nav">
        <ul>
          <li>
            <button>Top</button>
          </li>
          <li>
            <button>Mid</button>
          </li>
          <li>
            <button>Bot</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
