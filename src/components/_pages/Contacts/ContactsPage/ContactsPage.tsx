import SectionComponent from '@/components/SectionComponent/SectionComponent';
import Image from 'next/image';
import classes from './ContactsPage.module.scss';

export default function ContactsPage() {
  return (
    <SectionComponent header={'Your Personalized Swiss Adventure Awaits!'}>
      <article className={classes.intro}>
        <div className={classes.photo}>
          <Image src={`/images/contacts/logo.jpg`} alt={'blog'} fill />
        </div>
        <p>
          Welcome! I’m Anna, your private guide in Switzerland, based in the heart of
          the stunning Swiss Riviera — a region known for its charming towns, scenic
          vineyards, and the breathtaking shores of Lake Geneva. With academic
          degrees in Sociology and Marketing and a passion for culture and
          communication, I left the corporate world behind to pursue what truly
          inspires me — guiding travelers. I began my journey as a tour guide in
          Madrid, Spain, and quickly discovered that creating meaningful travel
          experiences is my true calling. Today, I offer customized walking and
          gastronomic tours in Lausanne, Montreux, Geneva, Gruyeres and the famous
          Lavaux vineyards (UNESCO World Heritage Site). Each tour is thoughtfully
          designed to match your interests — whether you're curious about local
          history, architecture, nature, or Swiss culinary treasures like wine,
          cheese, and chocolate. My Switzerland tours are never scripted. Instead,
          they’re filled with stories, laughter, and unique locations carefully
          chosen to make your trip unforgettable. No matter if you’re exploring
          Lausanne as a couple, seeking a Montreux private guide, or planning a
          Geneva walking tour on your solo adventure — I’m here to make it personal,
          memorable, and fun. I genuinely love Switzerland, and I’m excited to share
          its beauty and hidden gems with you. Let’s plan your perfect Swiss
          experience together!
        </p>
      </article>
      <p>How to Book Your Private Switzerland Tour:</p>
    </SectionComponent>
  );
}
