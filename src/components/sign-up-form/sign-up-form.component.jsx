import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const handleSubmit = async (event) => {
  event.preventDefault();
};

const SignUpForm = () => {
  const [formFields, setFormField] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;
  console.log(formFields);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...setFormField, [name]: value });
  };
  return (
    <div>
      <h1>Sign Up with your email and password</h1>
      <form>
        <label onSubmit={() => {}}>Display Name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        ></input>
        <label>Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        ></input>
        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        ></input>
        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        ></input>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
export default SignUpForm;
