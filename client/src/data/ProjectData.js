import atmos from '../assets/atmos.gif'
import woozu from '../assets/woozu.gif'
import spaceInvaders from '../assets/space-invaders.gif'
import momsSpag from '../assets/moms-spag.gif'

export const ProjectData = [
  {
    name: 'Atmos',
    description: 'An experimental app for creating and experiencing atmosphere. Users pair an image and audio together to create the feeling of an atmosphere, whether real or imagined. They can view other atmospheres and also play with the audio using custom-built audio processing software.',
    gif: atmos,
    tech: ['Django','PostgreSQL','React','Python'],
    website: 'https://atm0s.herokuapp.com/',
    readme: 'https://github.com/BesB0x/SEI-PROJECT-4#readme',
    id: 4,
  },
  {
    name: 'Space Invaders',
    description: 'My version of the classic arcade game, made with my own characters and music! ',
    gif: spaceInvaders,
    tech: ['JavaScipt','CSS'],
    website: 'https://besb0x.github.io/PROJECT-1/ ',
    readme: 'https://github.com/BesB0x/PROJECT-1/blob/main/readme.md',
    id: 1,
  },
  {
    name: 'Mom\'s Spaghetti',
    description: 'A widget for finding rhyming words. The user can put in there own word or have one randomly generated. Completed with one other, I was in charge of consuming the rhyming API and the UI',
    gif: momsSpag,
    tech: ['JavaScript','API', 'React'],
    website: 'https://spaghettimom.netlify.app/',
    readme: 'https://github.com/BesB0x/PROJECT-2#readme',
    id: 2,
  },
  {
    name: 'WOOZU SOUNDS',
    description: 'The website for a fictional festival in a nearby galaxy. Users can see the line-up comment, like, and register their attendance. Completed in a group of three, I focussed on functionality of the comments section, manipulating and displaying data in the profile page, and drove the UI.',
    gif: woozu,
    tech: ['MongoDB','SASS','MERN Stack'],
    website: 'https://woozu.herokuapp.com/',
    readme: 'https://github.com/BesB0x/WOOZU-SOUNDS/blob/main/README.md',
    id: 3,
  }
]