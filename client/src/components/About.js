import { CareerData } from '../data/CareerData'

const About = () => {

  return (
    <main>
      <h1> About Me</h1>
      <section className='brand-statement'>
        <h3> About Me</h3>
        <p> As a musician, I am fascinated by patterns; how they move, how we use them to solve problems, and how intrinsically beautiful they are. This is as much the case for musical patterns as it is for mathematical, and through my education and personal passion I have been able to explore and enjoy both. What drew me to coding was that it finds a balance here, giving space for the analytic and creative minds to naturally coalesce. I started thinking about this at university while studying both philosophical logic and continental philosophy, and allowed the thought to grow while I pursued my desire to be a musician after university. When I saw that I wanted a career that wasn’t so purely creative, and that my music was moving ever more into a world where coding presents infinite creative possibility, it was a natural decision to enrol in General Assembly’s SEI bootcamp.
          The bootcamp gave me a strong foundation of knowledge to build off, and direction as to which path I want to take into the industry. It also confirmed my belief that my skills of lateral thought, empathetic and compassionate communication, and creative determination stand me in good stead for a job in coding, and also that I have plenty left to learn! I am therefore looking for a full-stack position that stretches me intellectually and artistically, and allows me to learn from and work with others who are well established in their life.</p>
      </section>
      <section className='contact'>
        <button> GitHub</button>
        <button> LinkedIn</button>
        <button> Email</button>
      </section>
      <section className='interests'>
        <h3> What Excites Me</h3>
        <h6> Music and Sound</h6>
        <h6> Zen</h6>
        <h6> Surfing</h6>
      </section>
      <section className='proud-of'>
        <h3> What I&apos;m Proud of</h3>
        <h6>Music</h6>
        <h6>Atmos</h6>
        <h6>Travel</h6>
      </section>
    </main>

  )
}

export default About