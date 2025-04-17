'use client';

import Image from 'next/image';
import styles from './AboutGuide.module.scss';

export default function AboutGuide() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Image
            src='/images/guide-photo.jpg'
            alt='Tour Guide Anna'
            width={500}
            height={400}
            className={styles.image}
          />
        </div>

        <div className={styles.info}>
          <div className={styles.introduction}>
            <h2>Hi! I am Anna</h2>
            <h3>I am your personal Tour Guide in the French part of Switzerland</h3>

            <div className={styles.mission}>
              <p>
                My mission is to convert your Swiss vacation into a thrilling adventure, full of impressions, jaw
                braking views and new flavors!
              </p>
              <p>Let me help you to get enchanted by Swiss beauty, charm and warmth, leaving you longing for more!</p>
            </div>
          </div>

          <div className={styles.whyMe}>
            <h3>Why me?</h3>
            <p>I am in love with Switzerland and will do my best to share my passion with you!</p>
            <p>
              I live in Swiss Riviera region, surrounded by stunning landscapes and which has a rich cultural history.
              The combination of charming towns, breathtaking vineyards, and the picturesque Lake Geneva make it a truly
              special place.
            </p>
            <p>
              In my home country I obtained diplomas in Sociology and Marketing and then got an office job that provided
              me financially but didn&apos;t give me the sense of living full live).
            </p>
            <p>
              I started doing tours when I was living in Madrid, Spain. That&apos;s when I realized that working with
              tourists is totally my thing. Each tour is unique and I am trying to adjust it in accordance with your
              wishes. Because I truly believe that every minute of your time with me during the tour must bring you
              maximum impressions!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
