import { CareerData } from '../data/CareerData'

const Skills = () => {
  return (
    <main className='skills-container'>
      <div className='skills'>
        <h3> Skills</h3>
        <div>
          <h5> Back-End</h5>
          <ul>
            <li>Python</li>
            <li>Django</li>
            <li>Django RestFramework</li>
            <li>PostgreSQL</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>Table Plue</li>
            <li>Insomnia</li>
          </ul>
        </div>
        <div>
          <h5> Front-End</h5>
          <ul>
            <li>HTML5</li>
            <li>JavaScipt</li>
            <li>React</li>
            <li>CSS</li>
            <li>SCSS</li>
            <li>Bootstrap</li>
            <li>Express</li>
            <li>Axios</li>
          </ul>
        </div>
        <div>
          <h5> Storage/Version-Control</h5>
          <ul>
            <li>GitHub</li>
            <li>Git</li>
            <li>Heroku</li>
          </ul>
        </div>
        <div>
          <h5> Sound</h5>
          <ul>
            <li>Ableton Live</li>
            <li>Max For Live (Beginner)</li>
            <li>Tone.js</li>
            <li>GleetchLab</li>
            <li>Piano</li>
            <li>Bass Guitar</li>
            <li>Organ</li>
            <li>Modular Synthesis</li>
            <li>Subtractive and Additive Synthesis</li>
            <li>Field Recordings</li>
            <li>Sequencing</li>
          </ul>
        </div>
        <div>
          <h5> Additional</h5>
          <ul>
            <li>Communication</li>
            <li>Creative Writing</li>
            <li>Performance</li>
            <li>Project Management</li>
            <li>Pair Coding</li>
            <li>Virtual Working</li>
            <li>Customer Service</li>
          </ul>
        </div>
      </div>
      <div className='career-history'>
        <h3> Career History</h3>
        {CareerData.map((job, i) => {
          return (
            <div key={i}>
              <h4> {job.name} - {job.date}</h4>
              <ul>
                {job.description.map((point, i) => {
                  return <li key={i}> {point} </li>
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </main>
  )
}

export default Skills