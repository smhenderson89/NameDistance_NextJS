import React from 'react'
import Image from 'next/image';
import drewCrop from '../../public/images/qwertyDrewRoute-v2.png'
import AstarGif from '../../public/images/a-star-gif.gif'
import Hoop from '../../public/images/robotic_basketball_hoop.gif'

const AboutPage = () => {

  return (
    <div>
        <h2>About Page</h2>
        <div className='row'>
          <div className = 'center-text'>
          What do moving basketball hoops and Name Distance have in common? 
        <p>They both use <a href = "</a>">Graph Theory,</a></p>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-6'>
          <Image
            src = {Hoop}
            unoptimized = {true}
            alt = "moving backboard for basketball hoop"
            height = {250}
            width = {404}>
          </Image>
          </div>
          <div className='col-sm-6'>
          <Image
            src = {AstarGif}
            unoptimized={true}
            alt = "path finding algorithm image"
            height = {250}
            width = {400}></Image>
          </div>
        </div>
        <div>Source : Wikipedia ( <a href = "https://creativecommons.org/licenses/by-sa/3.0/">License</a> ) </div>
        <br></br>
        <p>After watching a video from <a href ="https://www.youtube.com/watch?v=FycDx69px8U&ab_channel=StuffMadeHere">Stuff Made Here</a> using graph theory to build a basketball hoop where the shot always lands in, I was curious to learn more how to incorporate graph theory into my own project.</p>
        <p>Seperately, I noticed that in some names on a keyboard, all the letters are adjacent to each other.</p> 
        <p>&quot;DREW&quot; can be spelled &quot;D&quot; -&gt; &quot;R&quot; -&gt; &quot;E&quot; -&gt; &quot;W&quot;, moving between letters adjacent to their corners.</p>
        <div className='row'>
          <div className='col'>
              <Image
              alt = "qwerty keyboard image"
              className = "img"
              id = "keyboardImage"
              height = {250}
              width = {335}
              src = {drewCrop}></Image>
          </div>
        </div>
        <p>But what about more complicated names like &quot;SCOTT&quot; or &quot;WASHINGTON&quot;? How could you determine the shortest path between the letters? How would you know where to go?</p>
        <p>With these two ideas, I worked on this project to make a program that determine the shortest path between letters for any name and sum up the &quot;distance&quot; score for each name. What is the shortest path for each name depending on the name length?</p>
        <h3 className='text-center'>Technologies Used</h3>
        <div>
          <li><a href="https://en.wikipedia.org/wiki/A*_search_algorithm">A* &quot;A star&quot; aglorithm</a></li>
          <li><a href="https://nextjs.org/">NextJS</a></li>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules">ES6 Modules</a></li>
          <li><a href="https://sass-lang.com/">SASS</a></li>
          <li><a href="https://getbootstrap.com/">Bootstrap</a></li>
        </div>
    </div>
    
  )
}

export default AboutPage