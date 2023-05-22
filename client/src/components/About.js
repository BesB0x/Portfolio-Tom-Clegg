const About = () => {

  return (
    <main>
      <div className='about-container'>
        <section className='block hero'>
          <div className="about-photo"></div>
          <div className="about-hero-text">
            <h3> Tom Clegg</h3>
            <h6> Junior Software Engineer and Musician</h6>
          </div>
        </section>
        <div className="contact-buttons">
          <a href='https://www.linkedin.com/in/tomclegg25/'className="linked-in"></a>
          <a href='https://github.com/BesB0x'className="github"></a>
          <a href=''className="email"></a>
          <a href='https://besbox.bandcamp.com/album/staight-looking-spirals'className="bandcamp"></a>
        </div>
        <div className='about-title title'>
          <h3> Why Coding?</h3>
        </div>
        <section className='block '>
          <div className='brand-statement image'></div>
          <div className='text'>
            <p> As a musician, I am fascinated by patterns; how they move, how we use them to solve problems, and how intrinsically beautiful they are. This is as much the case for musical patterns as it is for mathematical, and through my education and personal passion I have been able to explore and enjoy both. What drew me to coding was that it finds a balance here, giving space for the analytic and creative minds to naturally coalesce. <br /> <br /> I started thinking about this at university while studying both philosophical logic and continental philosophy, and allowed the thought to grow while I pursued my desire to be a musician after university. When I saw that I wanted a career that wasn’t so purely creative, and that my music was moving ever more into a world where coding presents infinite creative possibility, it was a natural decision to enrol in General Assembly’s SEI bootcamp.
              <br /> <br />The bootcamp gave me a strong foundation of knowledge to build off, and direction as to which path I want to take into the industry. It also confirmed my belief that my skills of lateral thought, empathetic and compassionate communication, and creative determination stand me in good stead for a job in coding, and also that I have plenty left to learn! I am therefore looking for a full-stack position that stretches me intellectually and artistically, and allows me to learn from and work with others who are well established in their life.</p>
          </div>
        </section>
        <div className='interests-title title'>
          <h3> What Excites Me</h3>
        </div>
        <section className='block'>
          <div className='text interests-text'>
            <h6> Music and Sound</h6>
            <p> Music has been important to me for as long as I can remember! I somehow still feel a sense of pride at going over the 100,000 minute mark in my Spotify wrapped when I was 15, and a shower without music just feels empty. Making music (or just noise) gives me a space to experiment, connect with parts of myself, make mistakes, and try to understand the complex, messy, exciting world around me. Listening to music gives me this too but from a more birds-eye view perspective; someone else has to done the work for me and I can just let it pull me in.</p>
            <h6> Zen</h6>
            <p>  To name one example of its impact, Zen weakened the boundary of human nature and nature itself for me, proving it to be a simple convention, created by us! Artistically, this was a huge shift. I struggled for a long time with the thought of where a creative idea comes from, because more often than not it really doesn’t feel like it comes from me. Until I accepted that the idea of ‘me’ is pretty flawed, this was a hurdle I just couldn’t see over! </p>
          </div>
          <div className='interests image'> </div>
        </section>
        <div className='proud-title title'>
          <h3> What I&apos;m Proud of</h3>
        </div>
        <section className='block'>
          <div className='proud-of image'> </div>
          <div className='text'>
            <h6>Performing</h6>
            <a href="https://besbox.bandcamp.com/album/staight-looking-spirals"> I was able to perform a few times last year and they were all just fab. I do improvised sets - I predominantly play piano, bass, modular synthesiser and use the software Ableton Live – so each performance is a surprise, and each time the thing I expected least was the most exciting part. With one performance it wasn’t even in my set! The people who were playing after me needed a bass player and I stepped in. We played around for an hour or so and I’ve not been able to play that freely since! I&apos;ve also released a song which you can listen to here.</a>
            <h6>Atmos</h6>
            <p> This project allowed me to bring together so many different things that excite me. I love the idea of art being all around us, we just don&apos;t see it all the time, so focussing on atmosphere was amazing, I loved the process of creating a solid UI, the build process as a whole was great, and I was able to code my own sound effects, what more could I ask for! </p>
            <h6>Travel</h6>
            <p> I&apos;ve had the privilege of travelling to some incredible places and meeting some even more incredible people, and each new and disruptive experience sends me further down the road I want to go. Staying in a Tibetan Buddhist Monastery in Eastern India was definitely a highlight. I learnt so much from the Lama, and it was the first place I felt genuinely spiritually connected to a place.  </p>
          </div>
        </section>
      </div>
    </main>

  )
}

export default About