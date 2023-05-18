import React from 'react';
import logo192 from '../images/logo192.png'

function MyComponent() {
    const projects = [
        {
          title: 'Teeth',
          description: 
          <p> 
          As part of the graphic design fundamentals course I took, I learned a lot about fonts and more
          I made a final poster, which you can see here, and prints of my items. Overally, I really enjoyed this.
          I did not enjoy looking at my teeth for hours on end. i am forever grateful for this class for teaching me more bout typography and the subtleties
          of the work that type designers and typographers do. it is insanely cool! this class also got me more into Are.na
          we also looked closely at images and visual language around us
          <p> <a href="https://www.instagram.com/mit4053vis/">Our class instagram</a> </p>
          <p> <a href='https://architecture.mit.edu/sites/default/files/course-documents/23fa-4.053-syll-keum.pdf '>the syllabus</a> </p>
          <p> here is what I ended up making: Alflossabet and Mouthabet </p>
          </p>,
          image: {logo192},
        },
        {
          title: 'Project 2',
          description: 'Description of project 2',
          image: {logo192},
        },
        // Add more project objects as needed
      ];
    
      return (
        <div>
          <h1>the gallery</h1>
          {projects.map((project, index) => (
            <div key={index}>
              <h2>{project.title}</h2>
             <body>{project.description}</body>
              <img src={logo192} alt={project.title} />
            </div>
          ))}
        </div>
      );
    }

export default MyComponent;