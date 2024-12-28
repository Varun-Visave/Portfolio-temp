import React, { useState } from 'react';
import './ProjectTemplate.css';
import "./PopUp.css";

const projectsData = [
  {
    id: 1,
    title: 'EaseRentals',
    image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQndFRI_nADuorRJvKwc_chDrdxqAD0sE3PRLpukeNu4Oy5Kdhk-UjiFHL-MDIK', 
    description: 'This project focuses on developing a user-friendly web platform for renting and listing houses and villas, leveraging the MERN stack MongoDB ,Expressjs, Reactjs, and Nodejs. The platform will offer a comprehensive suite of features including seamless search and booking capabilities, a personalized travel planner, and a statistical analysis tool for user spendings. The travel planner will enable users to create custom itineraries based on their preferences while the analysis tool will provide valuable insights into their past accommodation expenses empowering them to make informed decisions for future trips. By utilizing the MERN stack the platform will ensure high performance scalability and a superior user experience. This project aims to set a new standard in the online rental and listing space providing a valuable resource for both travelers and property owners',
    techStack: 'MongoDB, Express.js, React.js, Node.js',
  },
  {
    id: 2,
    title: 'AI Travel Planner',
    image: 'https://imgs.search.brave.com/kyQcl7wONG739ljCBHeeFTlCStqnwPLgaprpCi8MvoY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50aGVyZXNhbmFp/Zm9ydGhhdC5jb20v/aWNvbnMvYWktdHJh/dmVsLWd1aWRlLnN2/Zz9oZWlnaHQ9MjA3',
    description: 'An AI-powered travel planning tool made to help the user to make seemless planning to reach their desired destination, AI helps user to know more about the visiting place and help them to make a travel plan based to days user wants to stay and also suggest some cool activities happning in the surrounding which user can experiance during the journey .',
    techStack: 'JavaScript, Gemini API',
  },
  {
    id: 3,
    title: 'Health Tracker',
    image: 'https://imgs.search.brave.com/MUJbPQIc74_nqnPSnmDq7nozrTBpqVzBSoXX5IXKyaU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/bGl2ZXN0cm9uZy5j/b20vMzc1L21lZGlh/LXN0b3JhZ2UvY29u/dGVudGxhYi1kYXRh/LzkvMjMvZWZiNzZh/YzdjMGJhNDU2ZmIx/NzQyYmFmMGY2Mjhh/ZWUuanBn',
    description: 'A mobile app for tracking health data, also helpful for user with some sort of medical condition to know if the destination is good for their health or not anf if yes what precautions they can take while visiting, it also provides user with the information of nearby hospitals and clincs for better understanding of the place.',
    techStack: 'React Native, Gemini API',
  },
  {
    id: 4,
    title: 'Weather-widget',
    image: 'https://imgs.search.brave.com/1GoO3mScyAf96u7HXVJDf95DgCZOpH9FL-PF-9L5Ksw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93ZWF0/aGVyd2lkZ2V0Lm9y/Zy9pbWcvd2lkZ2V0/cy9yZXNwb25zaXZl/L1Jlc3BvbnNpdmVf/V2VhdGhlcl9XaWRn/ZXRfVGVtcGVyYXR1/cmVfTG9zX0FuZ2Vs/ZXNfMDUucG5n',
    description: 'A weather widget build for websites that any one can use in their own application and make desired changes and can also add some cool features to it.',
    techStack: 'JavaScript, ReactJS, CSS, OpenWeatherMap API',
  },
];

function ProjectCard({ project, handleLearnMore, handleTechStack }) {
  return (
    <div className="project-card">
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} className="project-image" />
      <button onClick={() => handleLearnMore(project)} className="learn-more">
        Learn More
      </button>
      <button onClick={() => handleTechStack(project)} className="techStack">
        Tech Stack
      </button>
    </div>
  );
}

function ProjectTemplate() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showTechStack, setShowTechStack] = useState(false); 

  const handleLearnMore = (project) => {
    setSelectedProject(project);
    setShowTechStack(false); 
  };

  const handleTechStack = (project) => {
    setSelectedProject(project);
    setShowTechStack(true); 
  };

  const closePopup = () => {
    setSelectedProject(null);
    setShowTechStack(false); 
  };

  return (
    <div>
      <div className="project-container">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            handleLearnMore={handleLearnMore}
            handleTechStack={handleTechStack}
          />
        ))}
      </div>

      {selectedProject && (
        <div className="popup">
          <div className="popup-content">
            <h2>{selectedProject.title}</h2>
            {showTechStack ? (
              <p>Tech Stack: {selectedProject.techStack}</p>
            ) : (
              <p>{selectedProject.description}</p>
            )}
            <button onClick={closePopup} className="close-popup">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectTemplate;