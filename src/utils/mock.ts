import { IProject } from "../interfaces/project";

export const PROJECTS: IProject[] = [
  {
    id: 1,
    name: "Plazem",
    short_description: "Speedrun card game",
    long_description:
      "Plazem is a card game focused on speed, reflexes and quick decision-making.\nBuilt with pure React (no frameworks).",
    stack: ["React", "Typescript"],
    learned:
      "To build an interactive game using almost only the functionality that React provides out of the box.\nWhat limitations React has when developing web applications that require accurate and fast events related to user input.",
    images: [
      "https://images.ctfassets.net/e8ev9fexmmov/4QN88dsOs3LSTBZAMBxJMo/2cc3263ebdf3c6851a2fe8bc28506f9a/Frame_2__1_.png",
      "https://images.ctfassets.net/e8ev9fexmmov/6Vkwye0CBOfoIQLx6rLSsh/8c8b5e379b0f4c80f2789635c080ba3f/image.png",
      "https://images.ctfassets.net/e8ev9fexmmov/3dJmMvS2NMifaKYHBJsBLY/8d0cbdca7b31d0c99a44f33abdd1a9c0/image.png",
      "https://images.ctfassets.net/e8ev9fexmmov/6lhBAR4urOgFiiNt1IdWwf/d2662940c1d1d7b4e396b9ddd0d48ef7/image.png",
    ],
    repository_url: "https://github.com/mateojacques/plazem",
    deploy_url: "https://plazem.mateojacquesweb.com/",
  },
  {
    id: 2,
    name: "DoraTV",
    short_description: "Custom Twitch client",
    long_description:
      "Custom Twitch client that I created to explore and discover several streams related to the same game or activity, faster than with the original Twitch interface.",
    stack: ["React", "Typescript", "Material UI"],
    learned:
      "To utilize Twitch's API to create a custom user interface for watching streams.",
    images: [
      "https://images.ctfassets.net/e8ev9fexmmov/3Zpj0PM6HV2Fy5rh5tA4rM/b3d5f178a2d30bd4303df27a40a97fee/doratv_1.png",
      "https://images.ctfassets.net/e8ev9fexmmov/3MYcIEVE2H1wG7wwUsDct9/70c4a877ea5bd8f883b31cfe69db5ad1/doratv_2.png",
      "https://images.ctfassets.net/e8ev9fexmmov/2nhh30znm8Aia6LfJ1hlCx/5dfce4d50ad1f2115f898384a0176a7b/doratv_3.png",
    ],
    repository_url: "https://github.com/mateojacques/doratv",
    deploy_url: "https://doratv.mateojacquesweb.com/",
  },
  {
    id: 3,
    name: "Gamefort",
    short_description: "Free-to-play game library",
    long_description:
      "Up to date collection of free to play multiplayer games.",
    stack: ["React", "Material UI"],
    learned:
      "To consume an API to create an updated library of free games.\nTo design and develop a Netflix-like UI.",
    images: [
      "https://images.ctfassets.net/e8ev9fexmmov/4L9YtA2jeowKp4VoupP0Bc/c07d22e5e63dbaa0e87a0e1c5b96af01/Frame_1.png",
      "https://images.ctfassets.net/e8ev9fexmmov/5QqmSj2OQU7WUdkDcBeJ0I/367d3e5aba16759fce4406cee472612f/gamefort_2.png",
      "https://images.ctfassets.net/e8ev9fexmmov/3b1Xnps7afv3b0DD0TLwHJ/40c7b6a59254b2824dd796a1c4a8ee1b/gamefort_3.png",
    ],
    repository_url: "https://github.com/mateojacques/gamefort",
    deploy_url: "https://gamefort-f2p.mateojacquesweb.com/",
  },
  {
    id: 4,
    name: "ALTAR",
    short_description: "Art reference tool",
    long_description:
      "ALTAR is a web application that offers you a collection of artwork from up to three comic/manga artists of your choice. It can be used as a reference for art studies, or simply as a gallery of iconic illustrations.",
    stack: ["React", "Material UI", "NodeJS", "Express"],
    learned:
      "To take my first steps with React.\nTo fetch data from an API using Axios.\nTo use Material UI to build aesthetically pleasing user interfaces in React.",
    images: [
      "https://images.ctfassets.net/e8ev9fexmmov/4XoGUEmk42NDwNy6O7zVVi/a027b1155ad8244bedb306d19a736272/altar_1.png",
      "https://images.ctfassets.net/e8ev9fexmmov/DGO7DMhozacvW6XNKi10o/c9e1c5683d29cec41c26d38afb12da44/altar_2.png",
      "https://images.ctfassets.net/e8ev9fexmmov/4p7PVi6Lv9a3kYuapVxW9v/9d7bb25b50f4840b5bfe17068c4a961b/altar_3.png",
    ],
    repository_url: "https://github.com/mateojacques/altar-app",
    deploy_url: "https://altar.mateojacquesweb.com/",
  },
];
