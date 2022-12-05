import { useEffect, useState } from "react";

export const useForm = (initialState) => {
  const [state, setState] = useState(initialState);

  const _handleFormChange = (event) => {
    const { value, name } = event.target;

    setState((p) => ({
      ...p,
      [name]: value,
    }));
  };

  return {
    state,
    setForm: setState,
    handleFormChange: _handleFormChange,
    resetForm: () => setState(initialState),
  };
};

export function useCountdown(date) {
  let countDownDate = new Date(date).getTime();
  const [days, setDays] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  // Update the count down every 1 second
  let x = null;

  useEffect(() => {
    x = setInterval(function () {
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHours(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((distance % (1000 * 60)) / 1000));

      if (distance < 0) {
        clearInterval(x);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    return () => {
      clearInterval(x);
      x = null;
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    };
  }, []);

  return { days, hours, minutes, seconds };
}
