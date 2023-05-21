import { useState } from 'react';
import CardComponent from './CardComponent';
import './App.css';

function App() {
  const projects = [
    {
      title: 'studiu',
      description: 'a forum for students built with vue.js and firebase',
      repoUrl: 'https://github.com/rfumic/studiu',
      appUrl: '#',
    },
    {
      title: 'sudoku race',
      description: 'fullstack online sudoku made with vue.js and express',
      repoUrl: 'https://github.com/rfumic/sudoku-race',
      appUrl: '#',
    },
    {
      title: 'remismd',
      description: 'a markdown editor built with vue.js and electron',
      repoUrl: 'https://github.com/rfumic/remismd',
      appUrl: '#',
    },
    ,
  ];
  return (
    <>
      <div className="grid-container">
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
      <div className="grid-container">
        <section>
          <h2>projects</h2>
          {projects.map((project) => (
            <CardComponent key={project.title} {...project} />
          ))}
        </section>
      </div>
    </>
  );
}

export default App;
