import { CareerData } from '../data/CareerData'

const About = () => {

  return (
    <main>
      <h1> About</h1>
      <div className='brand-statement'>
        <h3> Brand Statement</h3>
        <p> As a musician, I am fascinated by patterns; how they move, how we use them to solve problems, and how intrinsically beautiful they are. This is as much the case for musical patterns as it is for mathematical, and through my education and personal passion I have been able to explore and enjoy both. What drew me to coding was that it finds a balance here, giving space for the analytic and creative minds to naturally coalesce. I started thinking about this at university while studying both philosophical logic and continental philosophy, and allowed the thought to grow while I pursued my desire to be a musician after university. When I saw that I wanted a career that wasn’t so purely creative, and that my music was moving ever more into a world where coding presents infinite creative possibility, it was a natural decision to enrol in General Assembly’s SEI bootcamp.
          The bootcamp gave me a strong foundation of knowledge to build off, and direction as to which path I want to take into the industry. It also confirmed my belief that my skills of lateral thought, empathetic and compassionate communication, and creative determination stand me in good stead for a job in coding, and also that I have plenty left to learn! I am therefore looking for a full-stack position that stretches me intellectually and artistically, and allows me to learn from and work with others who are well established in their life.</p>
      </div>
      <div className='contact'>
        <button> GitHub</button>
        <button> LinkedIn</button>
        <button> Email</button>
      </div>
      <div className='interests'>
        <h3> Interests</h3>
        <h6> Music and Sound</h6>
        <h6> Zen</h6>
        <h6> Surfing</h6>
      </div>
      <div className='career-history'>
        <h3> Career History</h3>
        { CareerData.map( (job,i) => {
          return (
            <div key={i}>
              <h4> {job.name} - {job.date}</h4>
              <ul>
                {job.description.map( (point,i) => {
                  return <li key={i}> {point} </li>
                })}
              </ul>
            </div>
          )
        })}
      </div>
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
    </main>

  )
}

export default About