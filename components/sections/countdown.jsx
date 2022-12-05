import { useCountdown } from "../../utils/hooks";

const Countdown = ({ date, color = "#000000" }) => {
  const { days, hours, minutes, seconds } = useCountdown(date);

  return (
    <section
      id="countdown"
      className="my-24 px-8 max-lg mx-auto flex flex-col items-center relative"
    >
      <h2 className="text-center text-3xl">Time to our special day.</h2>

      <div className="mt-8 grid grid-cols-4 gap-4 lg:w-[400px]">
        <div
          className={`flex flex-col items-center border-2 rounded-xl p-4`}
          style={{ borderColor: color }}
          data-aos="flip-up"
        >
          <p className="font-semibold" id="countdown-days">
            {days}
          </p>
          <p>Hari</p>
        </div>
        <div
          className={`flex flex-col items-center border-2 rounded-xl p-4`}
          style={{ borderColor: color }}
          data-aos="flip-up"
          data-aos-delay="200"
        >
          <p className="font-semibold" id="countdown-hours">
            {hours}
          </p>
          <p>Jam</p>
        </div>
        <div
          className={`flex flex-col items-center border-2 rounded-xl p-4`}
          style={{ borderColor: color }}
          data-aos="flip-up"
          data-aos-delay="400"
        >
          <p className="font-semibold" id="countdown-minutes">
            {minutes}
          </p>
          <p>Menit</p>
        </div>
        <div
          className={`flex flex-col items-center border-2 rounded-xl p-4`}
          style={{ borderColor: color }}
          data-aos="flip-up"
          data-aos-delay="600"
        >
          <p className="font-semibold" id="countdown-seconds">
            {seconds}
          </p>
          <p>Detik</p>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
