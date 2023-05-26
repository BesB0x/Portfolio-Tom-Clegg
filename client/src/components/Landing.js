import { useNavigate } from 'react-router-dom'

const Landing = () => {

  const navigate = useNavigate()

  const handleNavigate = (e) => {
    navigate(e.target.value)
  }
  return (
    <main className='landing-container'>
      <section className='photo'>
        <div className='landing-image'></div>
        <p className='hi'> Hi, I&apos;m Tom</p>
        <p className='welcome'> Welcome to my Portfolio!</p>
      </section>
      <section className='flower'>
        <div className='bg'></div>
        <div className='fg'></div>
        <div className='buttons'>
          <button className=' petal-button about' onClick={handleNavigate} value='about'> About </button>
          <button className='petal-button projects' onClick={handleNavigate} value='projects'> Projects</button>
          <button className='petal-button skills' onClick={handleNavigate} value='skills'> Skills & Experience</button>
          <button className='petal-button archive' onClick={handleNavigate} value='archive'> Archive</button>
        </div>
      </section>
    </main>
  )
}

export default Landing