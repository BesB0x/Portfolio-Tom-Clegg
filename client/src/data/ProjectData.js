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
    id: 4,
  },
  {
    name: 'Space Invaders',
    description: 'My version of the classic arcade game, made with my own characters and music! ',
    gif: spaceInvaders,
    tech: ['JavaScipt','CSS'],
    id: 1,
  },
  {
    name: 'Mom\'s Spaghetti',
    description: 'A widget for finding rhyming words. The user can put in there own word or have one randomly generated.',
    gif: momsSpag,
    tech: ['JavaScript','API', 'React'],
    id: 2,
  },
  {
    name: 'WOOZU SOUNDS',
    description: 'The website for a fictional festival in a nearby galaxy. Users can see the line-up comment, like, and register their attendance.',
    gif: woozu,
    tech: ['MongoDB','SASS','MERN Stack'],
    id: 3,
  }
]