import { Project } from '@/types/project';

export const projects: Project[] = [

  {
    id: 'aeroduel',
    title: 'Aeroduel',
    description:
      'Advanced RC aerial combat powered by computer vision, match servers, and custom-built RC jets.',
    fullDescription:
      'Aeroduel is my capstone project at Atlas School that me and 3 other software ' +
      'engineers are currently working on. It combines hardware and software to ' +
      'create an advanced RC aerial dogfight game with real RC planes. Players ' +
      'can register their planes with the mobile app, host a match with the desktop ' +
      'app, join matches on the local network, and compete against other players in ' +
      'a fun, safe, and engaging dogfight. The mobile app is built with React Native, ' +
      'desktop app with Electron and Next.js, and our firmware built in C++ and Python. ' +
      '\n\n' +
      'Cameras mounted onto the planes are used to detect and track the opponent\'s jet, ' +
      'by locking onto lights installed on the enemy plane and sending a "hit" signal ' +
      'to the local game server. The server then sends the updated score in real time ' +
      'to the mobile app for spectators to see. As a stretch goal, we also plan to ' +
      'support FPV camera on the jets, live video feed of these cameras for spectators ' +
      'to watch and replay, screenshots of each hit, and more.',
    tags: ['JavaScript', 'TypeScript', 'Python', 'Next.js', 'React', 'TailwindCSS', 'Electron', 'Aviation', 'Engineering', 'Capstone'],
    links: {
      live: 'https://aeroduel.com/',
      github: 'https://github.com/aeroduel/'
    },
    image: '/images/project_thumbnails/aeroduel.png'
  },
  {
    id: 'satire-dev-blog',
    title: 'Satire Dev Blog',
    description:
      'My personal satire dev blog with a futuristic theme and a lot of totally ' +
      'good advice, like how to fix bugs with duct tape.',
    fullDescription:
      'This is my own personal dev blog... Or is it? Actually, it\'s my satire ' +
      'dev blog of course. Nothing serious goes here. No advice should be taken ' +
      'literally; in fact, most advice here should be taken as if it were opposite ' +
      'day. I\'ve found I have a knack for satire writing, so I made a website to ' +
      'post my own satire works, by a developer for developers. One of my favorite ' +
      'posts here is "Let Me Be Clear," which has some unique behavior when you ' +
      'open the post.' +
      '\n(pretend there\'s a line break here; this page doesn\'t support line breaks yet) \n' +
      'Built with Next.js, React, and TailwindCSS, it uses a custom JSON database ' +
      'to store posts. The blog posts are written in Markdown and rendered as HTML ' +
      'on the client. There\'s also a search bar with fuzzy search that searches by ' +
      'post title, tags, or keywords inside the post itself, much like a search ' +
      'engine. The light/dark mode switch is actually a lamp pull string, which I ' +
      'thought was pretty clever. The website\'s theme is a futuristic futuristic ' +
      'futuristic futuristic - why does my AI autocomplete keep saying futuristic?',
    tags: ['JavaScript', 'Next.js', 'React', 'TailwindCSS', 'Humor', 'Database'],
    links: {
      live: 'https://satire.zytronium.dev/'
    },
    image: '/images/project_thumbnails/satire_dev_blog.webp'
  },
  {
    id: 'star-trek-battle-engine',
    title: 'Star Trek Battle Engine',
    description: 'A Star Trek inspired battle simulator with a web interface, smart CPU opponents, multiplayer battles, and live spectating.',
    fullDescription:
      'Star Trek Battle Engine is a web-based game where players can select one of ' +
      'several cannon ships from the Star Trek universe and battle each other. ' +
      'It\'s a turn-based strategy game with (somewhat) balanced stats from its ' +
      'database of ships, weapons, and defenses. It also has a special bosses ' +
      'database, but we never got around to implementing boss battles. (not YET ' +
      'anyway! I may come back to this project at a later date.)\n\nThe website ' +
      'uses WebSockets to create zero-latency battles with other players and live ' +
      'spectating. It supports 2-player rooms for multiplayer, as well as a ' +
      'tactically smart CPU for singleplayer battles. The key strategy is to take ' +
      'down your opponent\'s shields with shield-heavy weapons such as spacial ' +
      'charges, then finish their hull with hull-heavy weapons such as torpedoes. ' +
      'Some ships even have special hull armor that absorb most of the impact to ' +
      'the hull, making them stronger and more durable during the latter halves of ' +
      'battles.',
    tags: ['JavaScript', 'Express.js', 'Game Dev', 'WebSocket', 'Database', 'SQL', 'Sci-Fi', 'Star Trek'],
    links: {
      github: 'https://github.com/Zytronium/star-trek-battle-sim',
      live: 'https://startrekbattlesim.zytronium.dev/'
    },
    image: '/images/project_thumbnails/stbe.webp'
  },
  {
    id: 'rcon-bot',
    title: 'Pycraft Rcon Bot',
    description: 'A Discord bot using Pycraft Rcon to let Discord users troll on a Minecraft server with orbital strikes, creeper spawns, and more.',
    fullDescription: 'A Discord bot that uses the aforementioned Pycraft Rcon project to allow Discord users to interact with a Minecraft server. Initially just another experiment, it is now primarily used to let Discord friends troll me on my server. It has bot commands like /orbital-blast (targets player with an orbital space laser), /nuke (initiates a nuclear strike on given player), /rtd (rolls the dice and determines what to do based on the total number rolled), /bless (gives a player random overpowered gear), and more.',
    tags: ['Python', 'Discord.py', 'Minecraft', 'Bot', 'Experiment '],
    links: {},
    image: '/images/project_thumbnails/rcon_bot.webp'
  },
  {
    id: 'linx-tipps',
    title: 'Linx TIpps Adn Triks',
    description: 'A satirical website with fake "tips" for Linux users. All jokes, nothing serious!',
    fullDescription: 'A Bootstrap project thrown together in a couple of hours as a joke. Sometimes I have sudden ideas for small projects or experiments and just jump right in. Linx TIpps Adn Triks (a misspelling of "Linux Tips and Tricks") is a satire website showing up "tips and tricks" for new Linux users. However, everything listed is actually a complete joke, most of which would actually be harmful to run. This website trusts that its audience can recognize it as satire and understand that nothing here is intended to be taken as actionable advice or real-world instruction. (While it\s obviously satire, there is a disclaimer shown upon visiting, just to be safe.)',
    tags: ['HTML', 'CSS', 'Bootstrap', 'Satire'],
    links: {
      github: 'https://github.com/Zytronium/LinxTippsAdnTirks',
      live: 'https://zytronium.github.io/LinxTippsAdnTirks/'
    },
    image: '/images/project_thumbnails/linx_tipps.webp'
  },
  {
    id: 'starry-starscape',
    title: 'Starry Starscape',
    description: 'A stellar scene created with HTML, CSS animations, twinkling stars, and shooting stars.',
    fullDescription: 'This experimental project pushes CSS animations to create a beautiful space scene. It was a one-day experiment attempting to create a stellar scene using only HTML elements, CSS, and a bit of JavaScript. CSS animations subtly animate nebulae in the background while certain stars twinkle and dust particles float around the scene. The scene is accompanied by a shooting star sporadically, as well as the occasional meteor shower. If you\'ve visited my developer website in the past, you may recognize this; a slightly modified version of it was previously used as the background for this very webpage. (This project is unrelated to the video game, Starscape.)',
    tags: ['HTML', 'CSS', 'JavaScript', 'Animation', 'Experiment'],
    links: {
      github: 'https://github.com/Zytronium/stars',
      live: 'https://zytronium.github.io/stars/'
    },
    image: '/images/project_thumbnails/stars.webp'
  },
  {
    id: 'sound-canvas',
    title: 'Sound Canvas',
    description: 'A responsive musical website that creates sounds based on cursor position with piano keyboard features.',
    fullDescription: 'Sound Canvas is a responsive musical website that creates musical sounds from a canvas. The Canvas creates a sound that varies in sound and pitch based on where the cursor is. It also has many presets and adjustable frequency settings. The Notes page acts like a piano keyboard, and can even be played with a computer keyboard. Sound Canvas was a one-week three-person project, and is built with HTML, CSS, JavaScript, and Bootstrap.',
    tags: ['JavaScript', 'Web Audio API', 'Bootstrap', 'HTML/CSS'],
    links: {
      github: 'https://github.com/Zytronium/SoundCanvas',
      live: 'https://zytronium.github.io/soundCanvas/'
    },
    image: '/images/project_thumbnails/sound_canvas.webp'
  },
  {
    id: 'useless-facts',
    title: 'Useless Facts Generator',
    description: 'A simple website that generates random facts that will never come in handy.',
    fullDescription: 'Useless Facts Generator is a simple website that gives you a random fact every time you press the button. It has a light and dark theme with a stylish background image that changes with the theme. With almost 200 facts, it feels as if it truly is generating random fun facts on the fly. Most of the fun facts were AI-generated, so take it with a grain of salt, but it\'s not like you\'re going to find anything truly useful here anyway.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Useless', 'Experiment'],
    links: {
      github: 'https://github.com/Zytronium/Useless_Facts_Generator',
      live: 'https://zytronium.github.io/Useless_Facts_Generator/'
    },
    image: '/images/project_thumbnails/useless_facts.webp'
  },
  {
    id: 'internet-admin-panel',
    title: 'Internet Admin Panel',
    description: 'A humorous website that looks like an admin panel for the entire web with fake but funny features.',
    fullDescription: 'This satirical project aims to look like someone accidentally gave everyone access to a secret admin panel controlling the entire internet. The admin panel contains dangerous-looking controls like "Revoke All SSL Certificates" and "Shut Down the Internet". Each button triggers humorous reactions such as fake error messages and warnings or corrupting the user interface, creating an entertaining experience that pokes fun at the complexity of web administration.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Humor'],
    links: {
      github: 'https://github.com/zytronium/InternetAdminPanel',
      live: 'https://zytronium.github.io/InternetAdminPanel/'
    },
    image: '/images/project_thumbnails/iap.webp'
  },
  {
    id: 'faction-nexus',
    title: 'The Faction Nexus',
    description: 'A web hub for Starscape factions and their community with an integrated Discord bot.',
    fullDescription:
      'The Faction Nexus is a work-in-progress passion project dedicated to player ' +
      'factions in the Roblox game, Starscape, as well as a Starscape-inspired ' +
      'game, Constellia. The Faction Nexus serves as a central hub for the ' +
      'Starscape and Constellia community, especially their in-game factions. It ' +
      'features faction profiles, news articles, and more. It provies find ' +
      'information on different factions and alliances and helps users stay up to ' +
      'date with the latest Starscape and Constellia news. Thanks to a partnership ' +
      'with Constellia\'s lead developer, players can actually link their ' +
      'Constellia faction data directly to The Faction Nexus\' database, ' +
      'enabling instant data uploading, easy faction removal, instant data ' +
      'updates, and guaranteed accuracy. While this is still a major ' +
      'work-in-progress, users can add their factions to our database, search ' +
      'for factions, set faction relations, and publish news articles. In the ' +
      'future users will be able to create faction treaties or agreements, view a ' +
      'faction relation web auto-generated from these relations, post faction ads, ' +
      'create and advertise events, and more! While most of these features are not ' +
      'currently ready, nor guaranteed, they are planned to be implemented at some ' +
      'point and are listed on the official development roadmap. The planned ' +
      'Discord bot, when completed, will also allow users to subscribe to news ' +
      'outlets and interact with the platform directly from Discord. This is an ' +
      'active major personal project as of November 2025.',
    tags: ['Express.js', 'Firebase Auth', 'Firebase Firestore', 'Discord.py', 'Published'],
    links: {
      live: 'https://thefactionnexus.tech/home'
    },
    image: '/images/project_thumbnails/tfn.webp'
  },
  {
    id: 'astralis',
    title: 'Astralis',
    description: 'A sci-fi text adventure game where you have to save your universe. Playable on web and Android.',
    fullDescription: 'Astralis is an interactive science-fiction experience set in a foreign universe. Players make choices that affect the story outcome while exploring different planets and encountering alien civilizations while attempting to save their home universe. There are multiple good, bad, and even neutral endings, as well as an easter egg bad ending. Build in a team of 3, the project demonstrates collaboration skills and full-stack development with Firebase integration for the story event storage. The game is available on the web and as an Android app, and the source code is available on GitHub.',
    tags: ['JavaScript', 'Kotlin', 'Firebase', 'HTML/CSS'],
    links: {
      github: 'https://github.com/zytronium/atlas-hack_sprint_adventure',
      live: 'https://zytronium.github.io/atlas-hack_sprint_adventure/',
      itch: 'https://zytronium.itch.io/astralis-text-adventure'
    },
    image: '/images/project_thumbnails/astralis2.webp'
  },
  {
    id: 'pycraft-rcon',
    title: 'Pycraft Rcon',
    description: 'A python project that uses Rcon to remotely run commands on a Minecraft server. Creates fun commands and minigames.',
    fullDescription: 'This Python package provides a powerful interface for controlling Minecraft servers remotely. It includes pre-built functions for common server management tasks and entertaining commands like orbital laser strikes and player teleportation. It\'s perfect for creating custom minigames for a server, and even has a couple minigames built in that you can use, including Deathswap and Nuclear Mayhem, which make for a fun multiplayer experience.',
    tags: ['Python', 'Minecraft', 'Server Management'],
    links: {
      github: 'https://github.com/Zytronium/Pycraft_Rcon'
    },
    image: '/images/project_thumbnails/pycraft_rcon.webp'
  },
  {
    id: 'wormhole',
    title: 'Wormhole to Infinity',
    description: 'Fly through a wormhole with colorful rings manually placed to sync with the beat of a Stranger Things remix. Built in Unity.',
    fullDescription: 'A rhythm-based experience where players fly through a mesmerizing wormhole. Every ring is carefully positioned to match the music, creating a synesthetic experience that blends visuals and audio perfectly.',
    tags: ['Unity', 'Experiment', 'Music', 'Published'],
    links: {
      itch: 'https://zytronium.itch.io/wormhole-2-infinity'
    },
    image: '/images/project_thumbnails/wormhole_to_infinity.gif'
  },
  {
    id: '8bit-racing',
    title: 'Infinite 8-Bit Racing',
    description: 'A retro-style 8-bit mobile racing game where you dodge slower racers, developed in Android Studio in Kotlin.',
    fullDescription: 'Inspired by an old handheld digital racing game I probably got from McDonald\'s when I was a kid, this game challenges players to navigate around other racers in an endless race while maintaining high speeds as if you\'re the Amazon delivery driver at 11:59pm making a same-day delivery. The pixel art style and chiptune-style music create an authentic retro gaming experience. This was my favorite personal project that I developed on and off for a couple of years, and I\'m still proud of it. It still needs some finishing touches before the last update comes out, and I haven\'t worked on it in a year as of the writing of this in November 2025.',
    tags: ['Kotlin', 'Android', 'Game Dev', 'Pixel Art'],
    links: {
      github: 'https://github.com/Zytronium/8Bit_Racing',
      playStore: 'https://play.google.com/store/apps/details?id=com.zytronium.a8bitracing'
    },
    image: '/images/project_thumbnails/8-bit_racing.webp'
  },
  {
    id: 'code-maze',
    title: 'Code Maze',
    description: 'A mobile game with many gamemodes where you navigate mazes, avoid issues, and collect optimizers to win. It was my first large coding project.',
    fullDescription:
      'Code Maze was my first major coding project that helped teach me some of ' +
      'the fundamentals of game development and Android programming. It was a major ' +
      'passion project as well as my final project in Mobile App Development class. ' +
      'In Code Maze, Players navigate through a random hand-made maze (or they can ' +
      'enable experimental procedural maze generation), navigating on the maze tiles, ' +
      'avoiding various harmful and map-altering tiles, such as warnings, errors, ' +
      'glitches, or even tile bombs. The player\'s goal is to collect a certain ' +
      'number of optimizers while avoiding taking too much damage. Damage is measured ' +
      'in issues. Just as collecting enough optimizers allows the player to win, ' +
      'collecting too many issues makes the player loose. The game features 12 ' +
      'difficulty levels and game modes, as well as several game settings to ' +
      'customize the experience.',
    tags: ['Kotlin', 'Android', 'Game Dev', 'Published'],
    links: {
      github: 'https://github.com/Zytronium/CodeMaze',
      playStore: 'https://play.google.com/store/apps/details?id=com.zytronium.CodeMaze'
    },
    image: '/images/project_thumbnails/code_maze.webp'
  }
];
