import React from 'react';

function MyComponent() {
    const projects = [
        {
          title: 'Project 1',
          description: 'Description of project 1',
          image: 'path/to/image1.jpg',
        },
        {
          title: 'Project 2',
          description: 'Description of project 2',
          image: 'path/to/image2.jpg',
        },
        // Add more project objects as needed
      ];
    
      return (
        <div>
          <h1>My Design Portfolio</h1>
          {projects.map((project, index) => (
            <div key={index}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <img src={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      );
    }

export default MyComponent;