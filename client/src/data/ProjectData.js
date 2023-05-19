import atmos from '../assets/atmos.gif'
import woozu from '../assets/woozu.gif'
import spaceInvaders from '../assets/space-invaders.gif'
import momsSpag from '../assets/moms-spag.gif'

export const ProjectData = [
  {
    name: 'Space Invaders',
    description: 'For our first project of the course we were asked to create a grid based game using a combination of HTML, CSS and JavaScript, and I chose Space Invaders. It was a really great challenge, requiring a deep understanding of the intervals and scope. It also allowed me to dig into the visual elements of an app, and I created my own player, aliens, and rockets all from scratch, as well as adding my own music!',
    gif: spaceInvaders,
    tech: ['JavaScipt','CSS'],
    id: 1,
  },
  {
    name: 'Mom\'s Spaghetti',
    description: 'At the end of Module 2, we were given the task to find an external API and create a React app that consumed it. Me and my partner found 2 APIs, one that returned a list of words that rhymed with the word sent, and another that returned a random word. The user can input a word of get a random word, and the app gives back rhymes to that word. I was proud of implementing pagination for the results, because the API didn’t support it so I had to use the map method in an interesting way to create pagination, and I loved the SASS we implemented, making the app Eminem themed (naturally).',
    gif: momsSpag,
    tech: ['JavaScript','API', 'React'],
    id: 2,
  },
  {
    name: 'WOOZU SOUNDS',
    description: 'The objective of project three was to create a MERN app with full CRUD functionality. My team created an app for a fictional festival that showed information, and allowed users to comment on the stages and register their attendance. I’m particularly proud of the profile page which used all three schemas to compile the user’s activity on the app, and we implemented the Cloudinary API for profile picture uploads. Areas I worked hardest on were: authentication of the user in the back-end, consuming our API in the profile page,  and the register functionality. I also drove the concepts for the UI.',
    gif: woozu,
    tech: ['MongoDB','SASS','MERN Stack'],
    id: 3,
  },
  {
    name: 'Atmos',
    description: 'Atmos is an app that allows users to pair custom audio with a photo, to create bespoke atmospheres.This is a React app consuming data from a Postgres database built by Python Django API and Django REST Framework. There are multiple relationships between three schemas, providing full CRUD functionality and complex filtering through tags attached to each atmosphere. The audio processing is based in the tone.js library, which takes a modular approach to manipulation, allowing me to invent my own sound effects.',
    gif: atmos,
    tech: ['Django','PostgreSQL','React','Python'],
    id: 4,
  }
]