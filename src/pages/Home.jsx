import useScrollReveal from "../hooks/useScrollReveal";

export default function Home() {
  useScrollReveal(".container");
  return (
    <>
      <div className="page container" id="home">
        <div className="row d-flex justify-content-center align-items-center mt-3">
          {/* Text Section */}
          <div className="col-12 col-md-6 mt-5 text-center text-md-start">
            <h1 className="text">Hi,</h1>
            <h1 className="text">
              I'm <span className="text-primary">Ismail</span>
            </h1>
            <h1 className="text">Front-end Developer</h1>
            <a href="mailto:ibogac55@gmail.com">
              <button className="btn btn-primary mt-4 px-4 py-2">
                Contact
              </button>
            </a>
            <div className="links d-flex justify-content-center justify-content-md-start gap-3 mt-4">
              <a
                href="https://github.com/IsmailBogac"
                style={{ color: "black", fontSize: "1.5rem" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ismail-bo%C4%9Fa%C3%A7-883436254/"
                style={{ color: "black", fontSize: "1.5rem" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-12 col-md-6 mt-4 mt-md-0 d-flex justify-content-center">
            <img
              src="../img/homeImg.jpg"
              alt="home-img"
              className="img-fluid w-75 w-md-100"
              style={{ maxWidth: "450px", borderRadius: "12px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
