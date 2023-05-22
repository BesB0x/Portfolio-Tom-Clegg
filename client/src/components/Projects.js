import { ProjectData } from '../data/ProjectData'



const Projects = () => {

  return (
    <main className='projects-page'>
      <div className='bg'></div>
      <section className='project-display'>
        {ProjectData.map(project => {
          return (
            <div key={project.id} className={project.name.replace(' ', '-').replace('\'', '').toLowerCase()}>
              <div className='tile'>
                <img src={project.gif} />
                < div className='link-container' >
                  <a className='link' href={project.website}> Website</a>
                  <a className='link' href={project.readme}> Readme</a>
                </div>
                <div>
                  <h3> {project.name} </h3>
                  <p> {project.description}</p>
                </div>
              </div>
              <div className='tech-container' >
                <div className='tech-container'>
                  {project.tech.map((t, i) => {
                    return (
                      <div className='tech' key={i}>
                        {t}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </section>
    </main >
  )
}

export default Projects