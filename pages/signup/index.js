import { useForm } from "react-hook-form";
// import fetch from "isomorphic-fetch";

import TopBar from '../../components/top-bar';
import './index.css';

const Signup = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = ({ name, phoneNumber, region }) => {
    console.log("data", name, phoneNumber, region);
    // fetch("/api/donation", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     to: phoneNumber,
    //     amount
    //   })
    // }).then(res => console.log("RESPONSE", res));
  };

  return (
    <>
      <TopBar />

      <div className='signup-form__banner'>
        <p className='signup-form__banner-text'>
          {`Staying informed of the latest health news is crucial to keeping your
          family safe. Sign up today to be notified of known and developing threats.`}
        </p>
      </div>

      <div className='signup-form__title-container'>
        <div>
          <img src='/logo-blue.png' className='signup-form__logo' />
          <h1 className='signup-form__title'>Mobile Sign Up</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='signup-form__container'>
        <div className='signup-form__input-wrap'>
          <label className='signup-form__label'>Name</label>
          <input
            className='signup-form__input'
            ref={register}
            name="name"
            type="text"
            required
          />
        </div>

        <div className='signup-form__input-wrap'>
          <label className='signup-form__label'>Mobile Number</label>
          <input
            className='signup-form__input'
            ref={register}
            name="phoneNumber"
            type="tel"
            required
          />
        </div>

        <div className='signup-form__input-wrap'>
          <label className='signup-form__label'>City, County, or State</label>
          <input
            className='signup-form__input'
            ref={register}
            name="region"
            type="text"
            required
          />
        </div>

        <button className='signup-form__button'>REGISTER</button>
      </form>
    </>
  );
};

export default Signup;
