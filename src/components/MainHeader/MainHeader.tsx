import classes from './MainHeader.module.scss';

export default function MainHeader() {
  return (
    <section className={classes.section}>
      <div className='container'>
        <h1>SWITZERLAND</h1>
        <h2>
          tours you won&apos;t find in guidebooks Your pace Your taste Your journey
        </h2>
      </div>
    </section>
  );
}
