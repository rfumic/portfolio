import { useEffect, useRef, useState } from 'react';
import CardComponent from './CardComponent';
import './App.css';
import studiu from './assets/studiu.png';
import remis from './assets/remis.jpg';
import sudoku from './assets/sudoku-race.jpg';

function App() {
  const projects = [
    {
      title: 'studiu',
      description: 'a forum for students built with vue.js and firebase',
      repoUrl: 'https://github.com/rfumic/studiu',
      appUrl: 'https://frabjous-licorice-afe890.netlify.app/',
      image: studiu,
    },
    {
      title: 'sudoku race',
      description: 'fullstack online sudoku made with vue.js and express',
      repoUrl: 'https://github.com/rfumic/sudoku-race-frontend',
      appUrl: 'https://sudoku-race.surge.sh/',
      image: sudoku,
    },
    {
      title: 'remismd',
      description: 'a markdown editor built with vue.js and electron',
      repoUrl: 'https://github.com/rfumic/RemisMD',
      appUrl: 'https://github.com/rfumic/RemisMD/releases',
      image: remis,
    },
    ,
  ];
  return (
    <>
      <div className="shadow-top"></div>
      <div className="grid-container fade-in">
        <main>
          <h1>roko fumić</h1>
          <h3>
            web developer, student @ <a href="https://fipu.unipu.hr">fipu</a>
          </h3>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/rokofumic">linkedin</a>
            <a href="https://github.com/rfumic">github</a>
            <a href="mailto:rokofumic@gmail.com">email</a>
          </div>
        </main>
      </div>
      <div className="grid-container fade-in">
        <section>
          <h2>some of my projects</h2>
          <div className="card-container">
            {projects.map((project) => (
              <CardComponent key={project.title} {...project} />
            ))}
          </div>{' '}
        </section>
      </div>
      <div className="shadow-bottom"></div>
    </>
  );
}

export default App;
