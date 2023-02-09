import React from "react";
import { useNavigate } from "react-router";
import "./Account.css";

const Account = () => {
  const [videoCode, setVideoCode] = React.useState("Oz6qQeOvraU");
  const [videoTitle, setVideoTitle] = React.useState(
    "Como instalar o Adobe XD"
  );
  const [videoId, setVideoId] = React.useState(1);
  const [modulo, setModulo] = React.useState(1);
  const linkEmbed = `https://www.youtube.com/embed/${videoCode}`;
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!window.localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  function getVideoCode(code) {
    return `https://img.youtube.com/vi/${code}/0.jpg`;
  }

  const videosMod1 = [
    {
      id: 1,
      titulo: "Como instalar o Adobe XD",
      codigo: "Oz6qQeOvraU",
    },
    {
      id: 2,
      titulo: "Barra de ferramentas",
      codigo: "np-NMQ4onuM",
    },
    {
      id: 3,
      titulo: "Como usar pranchetas artboards e grids",
      codigo: "6wEQ65eEugM",
    },
    {
      id: 4,
      titulo: "Pen tool, texto e formas",
      codigo: "Toxh39o0MNU",
    },
    {
      id: 5,
      titulo: "Importar um PSD no Adobe XD",
      codigo: "VDvVe0MrUGM",
    },
    {
      id: 6,
      titulo: "Como criar linhas guias e polígonos",
      codigo: "oAktGCT-S-w",
    },
    {
      id: 7,
      titulo: "Como criar e usar os Assets",
      codigo: "YsBH8ZFeAWU",
    },
  ];

  const videosMod2 = [
    {
      id: 1,
      titulo: "Como criar e exportar um protótipo navegável",
      codigo: "G0q-h8fwEC8",
    },
    {
      id: 2,
      titulo: "Como exportar no Adobe XD",
      codigo: "Oz6qQeOvraU",
    },
    {
      id: 3,
      titulo: "Como importar imagens, SVG e criar máscaras",
      codigo: "KZAgZQeOv94",
    },
    {
      id: 4,
      titulo: "Como usar o Repeat Grid",
      codigo: "BOqnk6hRxzc",
    },
    {
      id: 5,
      titulo: "UI kit, Plugins e Integrações",
      codigo: "6SQWdaX45LQ",
    },
    {
      id: 6,
      titulo: "Tutorial de site - Parte 01",
      codigo: "eK-RyhsZllg",
    },
    {
      id: 7,
      titulo: "Tutorial de site - Parte 02",
      codigo: "DHr-M-wl384",
    },
  ];

  return (
    <section className="account">
      <div className="container">
        <div className="video-main">
          <h1>
            <legend>
              Aula {videoId} - Módulo {modulo}
            </legend>
            {videoTitle}
          </h1>
          <iframe
            width="100%"
            height="640"
            src={linkEmbed}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <nav className="modulo">
          <h2>Módulo 1 - Introdução</h2>
          <ul>
            {videosMod1.map((video) => (
              <li
                className="video"
                key={video.id}
                onClick={() => {
                  setVideoTitle(video.titulo);
                  setVideoCode(video.codigo);
                  setVideoId(video.id);
                  setModulo(1);
                  window.scrollTo(0, 0);
                }}
              >
                <legend>Aula {video.id}</legend>
                <img alt={video.titulo} src={getVideoCode(video.codigo)}></img>
                <h3>{video.titulo}</h3>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="modulo">
          <h2>Módulo 2 - Contratando</h2>
          <ul>
            {videosMod2.map((video) => (
              <li
                className="video"
                key={video.id}
                onClick={() => {
                  setVideoTitle(video.titulo);
                  setVideoCode(video.codigo);
                  setVideoId(video.id);
                  setModulo(2);
                  window.scrollTo(0, 0);
                }}
              >
                <legend>Aula {video.id}</legend>
                <img alt={video.titulo} src={getVideoCode(video.codigo)}></img>
                <h3>{video.titulo}</h3>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Account;
