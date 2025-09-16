import useScrollReveal from "../hooks/useScrollReveal";

export default function About() {
    useScrollReveal(".container")
  
  return (
    <>
        <h2 className="title custom-border">About</h2>
      <div className="page container" id="about">
        <div className="row d-flex flex-column flex-md-row   align-items-center ">
          <div className="col-md-6 mt-5">
            <img src="./img/person.jpg" alt="" style={{ width: "500px" }} />
          </div>
          <div className="col-md-6 mt-5">
            <h1>I'm Ismail</h1>
            <p className="font-monospace about lh-lg mt-5">
              Hello, I'm Ismail. I graduated from the Computer Programming
              Department at Harran University Vocational School of Technical
              Sciences. I am a front-end developer candidate passionate about
              building clean and user-friendly interfaces. You can explore my
              skills and abilities by reviewing the projects I have shared in
              the Works section. If you like my work, feel free to contact me.
              Thank you for visiting my portfolio.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
