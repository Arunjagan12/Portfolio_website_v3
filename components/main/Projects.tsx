import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      
      
      
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/3dportfolio.png"
          title="3D Portfolio"
          description="An immersive and interactive 3D portfolio website designed to showcase creative projects, artworks, and designs in a visually stunning environment. Built using React for frontend interactivity and Three.js for rendering 3D graphics, this website offers a unique and engaging user experience. Upon entering the website, visitors are greeted with an immersive 3D environment that serves as the backdrop for presenting portfolio items. The environment might include a customizable 3D scene – perhaps a virtual art gallery, futuristic space, or an architecturally rich setting.Each project or artwork in the portfolio is represented as an interactive 3D object or scene within the environment."
        />
        <ProjectCard
          src="/jobApp.png"
          title="Career Cruiser"
          description="The job searching app is created using React Native, a popular framework for building mobile applications. This app utilizes the Jsearch API from Rapid API to fetch job details. With the app, users can search for jobs by keywords, location, and job type. The app displays a list of job results with key details such as job title, company name, location, and salary (if available). Users can also view detailed information about each job and save their favorite jobs for later. The app features a user-friendly interface and easy navigation. It provides a convenient way for job seekers to browse and apply for job openings on their mobile devices."
        />
        <ProjectCard
          src="/tripguide.png"
          title="Travel Consultant"
          description="An Advanced Travel Consultant application created using react utilizes the Google Maps API to display a map that allows users to search for hotels, restaurants, tourist sites, and other points of interest. The map displays markers for the searched places with respective images, making it easy for users to identify them. The app uses Travel API and Weather API from Rapid API to provide additional information on the searched places such as ratings, reviews, pricing, weather conditions, and travel information. Users can also get directions to their chosen destination and view street views."
        />
        <ProjectCard
          src="/alanAI.png"
          title="AI News App"
          description="A news app created using React and ALAN AI allows users to fetch the news using voice commands instead of manually typing in search queries.When a user opens the app, they can speak a voice command such as 'Give me the latest news' or 'Show me news from CNN'. ALAN AI will then process the command and fetch the relevant news articles from various sources. The app would display the news articles in a visually appealing and user-friendly format, allowing users to read the news without having to navigate away from the app."
        />
      </div>
    </div>
  );
};

export default Projects;
