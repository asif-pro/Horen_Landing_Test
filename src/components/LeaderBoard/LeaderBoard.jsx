import React from 'react'
import './LeaderBoard.css'

const LeaderBoard = () => {
  return (
    <>
    <div className='leaderBoardContainer'>
    <h1>Its a Noise Measuring Competition</h1>
        <div className='leftRanking'>
        <div id="header">
<h2>Country Ranking</h2>
{/* <button class="share">
  <i class="ph ph-share-network"></i>
</button> */}
</div>
<div id="leaderboard">
<div class="ribbon"></div>
<table>
  <tr>
    <td class="number">1</td>
    <td class="name">Mr. John</td>
    <td class="points">
      121 <img class="gold-medal" src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true" alt="gold medal"/>
    </td>
  </tr>
  <tr>
    <td class="number">2</td>
    <td class="name">Mark Lee</td>
    <td class="points">128</td>
  </tr>
  <tr>
    <td class="number">3</td>
    <td class="name">Atik Kamal</td>
    <td class="points">187</td>
  </tr>
  <tr>
    <td class="number">4</td>
    <td class="name">Sara Limkova</td>
    <td class="points">243</td>
  </tr>
  <tr>
    <td class="number">5</td>
    <td class="name">Johnny Suh</td>
    <td class="points">258</td>
  </tr>
</table>
{/* <div id="buttons">
  <button class="exit">Exit</button>
  <button class="continue">Continue</button>
</div> */}
</div>
        </div>
        <div className='rightRanking'>
        <div id="header">
<h2>Company Ranking</h2>
{/* <button class="share">
  <i class="ph ph-share-network"></i>
</button> */}
</div>
<div id="leaderboard">
<div class="ribbon"></div>
<table>
  <tr>
    <td class="number">1</td>
    <td class="name">Project Code</td>
    <td class="points">
      238 <img class="gold-medal" src="https://github.com/malunaridev/Challenges-iCodeThis/blob/master/4-leaderboard/assets/gold-medal.png?raw=true" alt="gold medal"/>
    </td>
  </tr>
  <tr>
    <td class="number">2</td>
    <td class="name">SELISE</td>
    <td class="points">258</td>
  </tr>
  <tr>
    <td class="number">3</td>
    <td class="name">Digital Bridge</td>
    <td class="points">292</td>
  </tr>
  <tr>
    <td class="number">4</td>
    <td class="name">Samsung</td>
    <td class="points">328</td>
  </tr>
  <tr>
    <td class="number">5</td>
    <td class="name">Microsoft</td>
    <td class="points">378</td>
  </tr>
</table>
{/* <div id="buttons">
  <button class="exit">Exit</button>
  <button class="continue">Continue</button>
</div> */}
</div>
        </div>
    </div>
    </>
  )
}

export default LeaderBoard