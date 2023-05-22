import { useEffect, useRef, useState } from 'react';
import CardComponent from './CardComponent';
import './App.css';

function App() {
  const projects = [
    {
      title: 'studiu',
      description: 'a forum for students built with vue.js and firebase',
      repoUrl: 'https://github.com/rfumic/studiu',
      appUrl: 'https://frabjous-licorice-afe890.netlify.app/',
      image:
        'https://raw.githubusercontent.com/rfumic/studiu/master/screenshots/post.png',
    },
    {
      title: 'sudoku race',
      description: 'fullstack online sudoku made with vue.js and express',
      repoUrl: 'https://github.com/rfumic/sudoku-race-frontend',
      appUrl: 'https://sudoku-race.surge.sh/',
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.cameraegg.org%2Fwp-content%2Fuploads%2F2016%2F01%2FNikon-D500-Sample-Images-2.jpg&f=1&nofb=1&ipt=ce6d5afe4aa0120fb6c60e38296cda216c3b5337dc4b5eba7b347f2f914abd45&ipo=images',
    },
    {
      title: 'remismd',
      description: 'a markdown editor built with vue.js and electron',
      repoUrl: 'https://github.com/rfumic/RemisMD',
      appUrl: 'https://github.com/rfumic/RemisMD/releases',
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
            web developer, student @ <a href="https://fipu.unipu.hr">FIPU</a>
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
