import React from "react";
import ProjectCards from './ProjectCards'
import image1 from '../../assets/organize.png'
import image2 from '../../assets/travel.jpg'

function Projects() {
  return (
    <div id="Project" className="p-10 md:p-20 text-white">
      <h1 className="text-2xl md:text-4xl font-bold text-white">Project</h1>
      <div className="py-12 px-3 flex flex-wrap gap-5">
        <ProjectCards
          title="Oragination Website"
          main="This is the Organization Website create in Html and Css and nodejs and express"
         image = {image1}
        />
         <ProjectCards
          title="Travel Agency"
          main="this is the Travel Agency created in Html and Css with fulll Customs Css and Boostrape"
          image={image2}
        />
          <ProjectCards
          title="Orgainzation Website"
          main="This is the Organization Website created in Tailwind Css and this only frondend Website."
          image={image1}
        />
      </div>
    </div>
  );
}

export default Projects;
