import useScrollReveal from "../hooks/useScrollReveal";

export default function Home() {
  useScrollReveal(".container");
  return (
    <>
      <div className="page container" id="home">
        <div className="row d-flex mt-3">
          <div className="col-md-6 mt-5">
            <h1 className="text">Hi,</h1>
            <h1 className="text">
              I'm <span className="text-primary"> Ismail</span>
            </h1>
            <h1 className="text">Front-end Developer</h1>
            <a href="mailto:ibogac55@gmail.com">
              <button className="btn btn-primary mt-5 px-3 py-2">
                Contact
              </button>
            </a>
            <div className="links mt-5">
              <a
                href="https://github.com/IsmailBogac"
                style={{ color: "black" }}
                target="_blank"
              >
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/ismail-bo%C4%9Fa%C3%A7-883436254/" style={{ color: "black" }} target="_blank">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="col-md-6 ">
            <img
              src="../img/homeImg.jpg"
              alt="home-img"
              style={{ width: "450px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
