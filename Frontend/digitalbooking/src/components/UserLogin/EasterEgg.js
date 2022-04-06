import { useEffect, useState } from "react";

const useInputEvent = () => {
  const [key, setKey] = useState(null);

  useEffect(() => {
    const keyDownHandler = ({ code }) => setKey(code);
    const keyUpHandler = () => setKey(null);

    global.addEventListener("keydown", keyDownHandler);
    global.addEventListener("keyup", keyUpHandler);

    return () => {
      global.removeEventListener("keydown", keyDownHandler);
      global.removeEventListener("keyup", keyUpHandler);
    };
  }, []);

  return key;
};

export const useSecretCode = (secretCode) => {
  const [count, setCount] = useState(0);
  const [success, setSuccess] = useState(false);
  const key = useInputEvent();

  useEffect(() => {
    if (key == null) return;
    if (key !== secretCode[count]) {
      setCount(0);
      return;
    }

    setCount((state) => state + 1);
    if (count + 1 === secretCode.length) {
      setSuccess(true);
    }
  }, [key]);

  return success;
};
