import TopBar from '../../../components/top-bar';
import './index.css';

const SignupSuccess = () => {
  return (
    <>
      <TopBar altColor />

      <div className='signup-success__banner'>
        DASHBOARD
      </div>

      <div className='signup-success__max-width'>
        <p className='signup-success__title--big'>User's Dashboard</p>
        <p className='signup-success__title'>Topics Selected</p>
      </div>
    </>
  );
}

export default SignupSuccess;
