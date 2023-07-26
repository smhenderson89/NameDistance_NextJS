import React from 'react'
import Image from 'next/image';
import drewCrop from '../../public/images/qwertyDrewRoute-v2.png'
import AstarGif from '../../public/images/a-star-gif.gif'


const AboutPage = () => {
  return (
    <div>
        <h1>About Page</h1>
        <p>What do moving basketball hoops and keyboard have in common? They both use <a href = "</a>">Graph Theory</a>, of course.</p>
        <Image
          src = {AstarGif}
          unoptimized={true}
          alt = "path finding algorithm image"
        ></Image>
        <div>Source : Wikipedia ( <a href = "https://creativecommons.org/licenses/by-sa/3.0/">License</a> ) </div>
        <p>After watching a video from <a href ="https://www.youtube.com/watch?v=FycDx69px8U&ab_channel=StuffMadeHere">Stuff Made Here</a> using graph theory to make a basketball hoop where the shot always lands in, I was curious to learn more how to incorporate graphy theory into my own project.</p>
        <p>Seperately, I noticed that in some names on a keyboard, all the letters are adjacent to each other. &quot;DREW&quot; can be spelled &quot;D&quot; -&gt; &quot;R&quot; -&gt; &quot;E&quot; -&gt; &quot;W&quot;, moving between letters by their corners. </p>
        <Image
        alt = "qwerty keyboard image"
        className = "img"
        id = "keyboardImage"
        src = {drewCrop}
        width={0}
        height={0}
        style={{ width: 'auto', height: '150' }} // optional
        ></Image>
        <p>But what about more complicated names like &quot;SCOTT&quot; or &quot;WASHINGTON&quot;? How could you determine the shortest path between the letters? How would you know where to go?</p>
        <p>With these two ideas, I worked on this project to make a program that determine the shortest path between letters for any name and sum up the &quot;distance&quot; score for each name. What is the shortest path for each name depending on the name length?</p>
    </div>
  )
}

export default AboutPage