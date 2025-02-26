import React from "react";
import ProjectCards from './ProjectCards'

function Projects() {
  return (
    <div className="p-10 md:p-20 text-white">
      <h1 className="text-2xl md:text-4xl font-bold text-white">Project</h1>
      <div className="py-12 px-3 flex flex-wrap gap-5">
        <ProjectCards
          title="Blog Website"
          main="This is the Blog Website created in react js,and using library and some famous components "
        />
         <ProjectCards
          title="Youtube Clone"
          main="this is the Youtube Clone created in Html and Css with fulll Customs Css and Boostrape"
        />
          <ProjectCards
          title="NetFlix Clone"
          main="This is the Clone of Netflix created in Tailwind Css and this only frondend Website and also using Some
          Templete for Best practice"
        />
      </div>
    </div>
  );
}

export default Projects;
