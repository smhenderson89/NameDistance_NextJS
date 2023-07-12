<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">Name Distance - Determine shortest path on a keyboard using the A* (A star) algorithm</h3>
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

I was inspired from watching Stuff Made Here, a Youtube channel about a Maker who makes amazing projects, like a basketball hoop where you never miss (link multiple videos), or a robot that will cut your hair (videos). He mentioned the use of graph theory and I was curious to learn more. 

Seperately, one day working at Starbucks, I noticed that some customers' name, the letters are adjacent to each other on a QWERTY keyboard. "DREW" can be spelled "D" -> "R" -> "E" -> "W", moving between letters by their corners. But what about more complicated names like "SCOTT" or "WASHINGTON"? How could you determine the shortest path between the letters? How would you know where to go?

With these two ideas, I worked on this project to make a program that determine the shortest path for any name and give a final "distance" score for each name. What is the shortest path for each name depending on the name length?

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

## Front End 

* [React.js](https://reactjs.org/)
* [SASS](https://sass-lang.com/)
* [Bootstrap](https://getbootstrap.com/)

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
