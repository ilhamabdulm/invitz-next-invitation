const HealtProtocols = () => {
  return (
    <section
      id="health-protocols"
      className="my-24 flex justify-center items-center flex-col px-8"
    >
      <h2 className="text-center text-3xl mb-6">Protokol Kesehatan</h2>
      <article
        className="grid grid-cols-2 items-center justify-center lg:grid-cols-5 gap-4"
        data-aos="zoom-in"
      >
        <div className="flex flex-col items-center">
          <img
            className="h-28 lg:h-32 w-auto"
            src="./assets/image/wear-mask.png"
            alt="wear-mask"
          />
          <p>Memakai Masker</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="h-28 lg:h-32 w-auto"
            src="./assets/image/avoid-handshake.png"
            alt="wear-mask"
          />
          <p>Tidak Bersalaman</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="h-28 lg:h-32 w-auto"
            src="./assets/image/wash-hands.png"
            alt="wear-mask"
          />
          <p>Mencuci Tangan</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="h-28 lg:h-32 w-auto"
            src="./assets/image/physical-distancing.png"
            alt="wear-mask"
          />
          <p>Menjaga Jarak</p>
        </div>
        <div className="flex flex-col items-center col-span-2 lg:col-span-1">
          <img
            className="h-28 lg:h-32 w-auto"
            src="./assets/image/avoid-crowds.png"
            alt="wear-mask"
          />
          <p>Hindari Kerumunan</p>
        </div>
      </article>
    </section>
  );
};

export default HealtProtocols;
