import Link from "next/link";

import TopBar from '../components/top-bar';
import "../styles/index.css";

const Home = () => {
  return (
    <>
      <TopBar altColor />

      <div className='home-page__banner'>
        <p className='home-page__banner-text'>
          {`HealthNewsNow is an intelligent text alert system that scrapes news
          articles local to a user’s location to notify concerned citizens about
          known and potential health threats. Using Avaya’s CPaaS paired with a
          Google Cloud Services, users will get automated mobile text alerts when
          breaking news begins to accrue mentions of health topics they care about.`}
          <br />
          <br />
          {`In this age of rapidly spreading epidemics, getting out in front of a
          contagious disease with preventative and strategic measures is important.
          In order to employ those methods, citizens will need to be aware that a
          disease is a threat in the first place.`}
          <br />
          <br />
          {`The public well-being is dependent on these individuals to promote awareness
          of preventative measures. HealthNewsNow is perfect for concerned parents,
          adult children of the elderly, and those that care for these vulnerable
          populations (such as teachers and nurses).`}
        </p>
      </div>

      <div className='home-page__button-container'>
        <Link href="signup">
          <button className='home-page__button'>Sign Up</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
