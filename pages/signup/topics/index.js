import TopBar from '../../../components/top-bar';
import './index.css';

const SignupTopics = () => {
  return (
    <>
      <TopBar altColor />

      <div className='topics__banner'>
        <p className='topics__banner-text'>TOPIC SELECTION</p>
      </div>

      <div className='topics__container'>
        <p className='topics__title'>Known Illnesses</p>

        <p className='topics__title'>Potential Threats</p>
      </div>
    </>
  );
}

export default SignupTopics;
