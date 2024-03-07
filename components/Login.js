import { loginFields } from "../constants";
import Header from "../../components/Header";
import { useState } from "react";
import Input from "../../components/Input";

const fields = loginFields;
let fieldState = {};
fields.forEach((field) => (fieldState[field.id] = ""));

const Login = () => {
  const [loginState, setLoginState] = useState(fieldState);

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.targer.id]: e.targer.value });
  };

  return (
    <>
      <Header
        heading="Login to MyContact"
        paragraph="Don't have an account yet?"
        linkname="Signup"
        linkUrl="/signup"
      />
      <form className="mt-8 space-y-6">
        <div className="space-y-px">
          {fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={loginState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))}
        </div>
      </form>
    </>
  );
};

export default Login;
