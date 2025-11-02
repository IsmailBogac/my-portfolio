import { useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Work() {
  useScrollReveal(".container");
  const [projects] = useState([
    {
      id: 1,
      name: "Weather app",
      link: "https://weather-app-sigma-jade-vob6n6uihj.vercel.app/",
      img: "img/weather.jpg",
    },
    {
      id: 2,
      name: "Todo list",
      link: "https://todo-listt-seven.vercel.app/",
      img: "img/todo-list.jpg",
    },
    {
      id: 3,
      name: "Music player",
      link: "https://music-player-amber-psi.vercel.app/",
      img: "img/music-player.jpg",
    },
    {
      id: 4,
      name: "E - Commerce",
      link: "https://e-commerce-client-mu-snowy.vercel.app/",
      img: "img/Ecommerce.jpg",
    },
    {
      id: 5,
      name: "Currency Project",
      link: "https://currency-project-amber.vercel.app/",
      img: "img/currency.jpg",
    },
  ]);

  return (
    <>
      <h2 className="title custom-border">Work</h2>
      <div className="page container" id="work">
        <div className="row projects mb-4 my-5">
          {projects.map((project) => (
            <div className="project " key={project.id}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  className="  rounded shadow-sm"
                  src={project.img}
                  alt={project.name}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
