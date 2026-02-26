import React from 'react';
import styles from "../home.module.css";

export const metadata = {
  title: "About"
}

export default function About() {
  return (
    <>
    <h2>Skills aren’t born. They’re forged.</h2>

    <p>SkillForge exists to transform learning into real capability.
    Instead of endless tutorials, we focus on structured learning, 
    hands-on projects, and guided progress that turns knowledge into practical skills.</p>
    
    <img src="/img1.png" alt="img1" className={styles.imgStyle}/>

    <h2>Our Mission</h2>
    <p>SkillForge is built to bridge the gap between learning and doing.</p>

    <p>We believe skills grow through action. Every lesson should lead to creation, every concept should become a project, 
    and every learner should clearly see their progress.</p>

    <img src="/about/mission.png" alt="mission" className={styles.imgStyle}/>

    <h2>How SkillForge Works</h2>
    <p>Learn, Build and Grow</p>

    <img src="/about/believe.png" alt="believe" className={styles.imgStyle}/>

    <h2>Our Values</h2>
    <p>We believe Practice first, clarity over complexity, Real-world focus and Continuous Growth.</p>

    <img src="/about/way2learn.png" alt="way2learn" className={styles.imgStyle}/>
    </>
  )
}
