import { useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Skills() {
    useScrollReveal(".container")

  
  const [logos] = useState([
    { src: "/logos/html.svg", name: "HTML" },
    { src: "/logos/css.svg", name: "Css" },
    { src: "/logos/bootstrap.svg", name: "Bootstrap" },
    { src: "/logos/javascript.svg", name: "Javascript" },
    { src: "/logos/rreact.svg", name: "React" },
    { src: "/logos/firebase.svg", name: "Firebase" },
    { src: "/logos/git.svg", name: "Git" },
  ]);
  return (
    <>
      <div className="page container" id="skills">
        <h2 className="title custom-border">Skills</h2>
        <div className="row d-flex align-items-center ">
          <div className="col-md-6  mt-5">
            <h2>My Skills and Tools</h2>
            <p>
              I build responsive, user-friendly web applications using modern
              technologies. My toolkit includes React for building scalable
              front-end applications, and I consistently learn and implement new
              technologies to deliver clean and efficient code.
            </p>
            <div className="logos my-5">
              {logos.map((logo, index) => (
                <div className="logo" key={index}>
                  <img
                    src={logo.src}
                    alt={logo.name}
                    style={{ width: "25px" }}
                    className="mx-3"
                  />
                  <p className="mx-2 my-1">{logo.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6 mt-5">
            <img src="./img/skills.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
