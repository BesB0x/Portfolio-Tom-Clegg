import { ProjectData } from '../data/ProjectData'



const Projects = () => {

  return (
    <main className='projects'>
      <div className='bg'></div>
      <section className='project-display'>
        {ProjectData.map(project => {
          return (
            <div key={project.id} className={project.name.replace(' ', '-').replace('\'', '').toLowerCase()}>
              <div className='tile'>
                <img src={project.gif} />
                <div>
                  <h3> {project.name} </h3>
                  <p> {project.description}</p>
                </div>
              </div>
              <div className='tech-container' >
                {project.tech.map((t, i) => {
                  return (
                    <div className='tech' key={i}>
                      {t}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </section>
    </main>
  )
}

export default Projects