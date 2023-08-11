<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Name Distance - Determine shortest path on a keyboard using the A* (A star) algorithm</h3>
  <a href = "https://name-distance.vercel.app/">https://name-distance.vercel.app/</a>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## Project Inspiration

![Alt text for basketball hoop gif](https://github.com/smhenderson89/adjacentLetters/blob/main/robotic_basketball_hoop.gif)

After watching a video from [Stuff Made Here](https://www.youtube.com/watch?v=FycDx69px8U&ab_channel=StuffMadeHere) about using graph theory to build a basketball hoop where the shot always lands in, I was curious to more how to incorporate graph theory in my own project. 

![a-star-gif](https://github.com/smhenderson89/NameDistance_NextJS/assets/53064568/b3b85b2f-2a6c-474f-be81-52bdf1dbccd1)
<br>
Source: Wikipedia (<a href = "https://creativecommons.org/licenses/by-sa/3.0/">License</a>)

Seperately, I noticed that in some names on a keyboard, all the letters are adjacent to each other.

"DREW" can be spelled "D" -> "R" -> "E" -> "W", moving between letters adjacent to their corners.

<img src = "https://name-distance.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FqwertyDrewRoute-v2.ffc774d0.png&w=384&q=75" width = "250" height = "250">

But what about more complicated names like "SCOTT" or "WASHINGTON"? How could you determine the shortest path between the letters? How would you know where to go?

With these two ideas, I worked on this project to make a program that determine the shortest path for any name and give a final "distance" score for each name. What is the shortest path for each name depending on the name length?

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

*  A*, a path-finding [algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm)
* [React.js](https://reactjs.org/)
* [SASS](https://sass-lang.com/)
* [Bootstrap](https://getbootstrap.com/)
* [ES6 Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```


<!-- USAGE EXAMPLES -->


<!-- ROADMAP -->
## Roadmap

- [ ] **Stretch Goal:** Add unit tests for current keyboards to assist for further keyboard additions
- [ ] **Stretch Goal:** Account for other languages accented letters (Renée, Götz, etc. )
- [ ] **Stretch Goal:** Heat map for each keyboard based on the optimal path and searched letters

See the [open issues](https://github.com/smhenderson89/astarNextJS/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Scott Henderson
Github: [https://github.com/smhenderson89](https://github.com/smhenderson89)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Stuff Made Here Youtube channel for inspiration ([link](https://www.youtube.com/watch?v=FycDx69px8U))<br />
Sebastian Lague for Astar Explaination ([link](https://www.youtube.com/watch?v=-L-WgKMFuhE))<br /> 
Peter Froud <br />
Daniel Therman <br />

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: images/screenshot.png
