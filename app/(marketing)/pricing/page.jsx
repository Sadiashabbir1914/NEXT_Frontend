import React from 'react';
import styles from "../home.module.css";

export const metadata = {
  title: "Price"
}

export default function Pricing() {
  return (
    <>
    <h2>Pricing</h2>
    <article className={styles.pricing}>
      <div className={styles.pricetags}>
        <h2>Free</h2>
        <p>For creators exploring and testing</p>
        <h2>$0</h2>
        <p>Per Month</p>

        <h4>Includes</h4>
        <ul>
          <li>Upto 2 courses</li>
          <li>Suggest changes</li>
          <li>Community Support</li>
        </ul>
      </div>

      <div className={styles.pricetags}>
        <h2>Personal</h2>
        <p>For You</p>
        <h2>$10</h2>
        <p>Per Month</p>

        <h4>Includes</h4>
        <ul>
          <li>Access upto 25+ courses</li>
          <li>Certified Prep</li>
          <li>Community Support</li>
        </ul>
      </div>

      <div className={styles.pricetags}>
        <h2>Team Plan</h2>
        <p>For your team(2 to 50 People)</p>
        <h2>$30.00</h2>
        <p>Billed Annually, Cancel anytime.</p>

        <h4>Includes</h4>
        <ul>
          <li>Access upto 250+ courses</li>
          <li>Goal-focused recommendations</li>
          <li>AI-Powered coding exercises</li>
        </ul>
      </div>
    </article>
    </>
  )
}
