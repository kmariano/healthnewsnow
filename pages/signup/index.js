import { useForm } from "react-hook-form";
import fetch from "isomorphic-fetch";
const Signup = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = ({ name, phoneNumber, city, state }) => {
    console.log("data", name, phoneNumber, city, state);
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label for="name">Name</label>
        <input
          ref={register}
          name="name"
          placeholder="Name"
          type="text"
          required
        />
        <label for="phoneNumber">Mobile Number</label>
        <input
          ref={register}
          name="phoneNumber"
          placeholder="Mobile Number"
          type="tel"
          required
        />
        <input
          ref={register}
          name="city"
          placeholder="City"
          type="text"
          required
        />
        <input
          ref={register}
          name="state"
          placeholder="State"
          type="text"
          required
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Signup;
