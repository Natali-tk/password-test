import {  useState, useEffect } from "react";
import s from "./PasswordPage.module.css";
import clsx from "clsx";
import { Input } from "assets/components/Input";
import { EPasswordStatus } from "./types";

export const Form = () => {
  const [status, setStatus] = useState<EPasswordStatus>(EPasswordStatus.empty);
  const [password, setPassword] = useState("");

  const enoughRegex = /^([a-z]+|\d+|\W+)$/i;
  const letDig = /^(?=.*[0-9])[a-zA-Z0-9]/;
  const letSym = /^(?=.*[!@#$%^&*])[a-zA-Z!@#$%^&*]/;
  const digSym = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
  const mediumPassword = password.match(letSym) || password.match(letDig) || password.match(digSym);
  const strongRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setPassword(newValue);
  };

  useEffect(() => {
    if (password.trim() === "") {
      setStatus(EPasswordStatus.empty);
    } else if (password.split("").length < 8) {
      setStatus(EPasswordStatus.small);
    } else if (password.match(strongRegex)) {
      setStatus(EPasswordStatus.strong);
    } else if (password.match(enoughRegex)) {
      setStatus(EPasswordStatus.easy);
    } else if (mediumPassword) {
      setStatus(EPasswordStatus.medium);
    }
  }, [password, status]);

  return (
    <form className={s.form}>
      <Input
        id="password"
        name="password"
        label="Password"
        handleChange={handleChange}
      />
      <ul
        className={clsx(
          s.check__password,
          { [s.empty]: status === "empty" },
          { [s.small]: status === "small" },
          { [s.easy]: status === "easy" },
          { [s.medium]: status === "medium" },
          { [s.strong]: status === "strong" }
        )}
      >
        <li>The password is easy</li>
        <li>The password is medium</li>
        <li>The password is strong</li>
      </ul>
    </form>
  );
};
