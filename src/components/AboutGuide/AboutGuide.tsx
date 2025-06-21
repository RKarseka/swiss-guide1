'use client';

import styles from './AboutGuide.module.scss';

export default function AboutGuide() {
  return (
    <section className='container'>
      <div className={styles.content}>
        <div className={styles.photo}></div>

        <div className={styles.info}>
          <div className={styles.introduction}>
            <h3>
              Hi! I am Anna
              <br />I am your personal Tour Guide
              <br />
              in the French part of Switzerland
            </h3>
            <div className={styles.mission}>
              <h5>
                My mission is to convert your Swiss vacation into a thrilling
                adventure, full of impressions, jaw braking views and new flavors!
              </h5>
              <h5>
                Let me help you to get enchanted by Swiss beauty, charm and warmth,
                leaving you longing for more!
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
