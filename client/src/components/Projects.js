import { ProjectData } from '../data/ProjectData'


const Projects = () => {

  return (
    <main>
      <h1> Projects</h1>
      <section>
        {ProjectData.map(project => {
          return (
            <div key={project.id} className={project.name.replace(' ', '-').toLowerCase()}>
              <h3> {project.name} </h3>
              <img src= {project.gif} /> 
              <p> {project.description}</p>
              {project.tech.map((t, i) => {
                return (
                  <div key={i}>
                    {t}
                  </div>
                )
              })}
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default Projects