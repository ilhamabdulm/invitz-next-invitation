const GalleryTwoSection = ({
  gallery,
  leftOrnament,
  rightOrnament,
  titleTopOrnament,
  titleBottomOrnament,
}) => {
  return (
    <section id="gallery-container" className="relative">
      {leftOrnament ? (
        <img
          src={leftOrnament}
          alt="flower-1"
          className="absolute h-[300px] lg:h-[600px] left-0 bottom-0 -z-10"
          data-aos="fade-in"
        />
      ) : null}
      <div
        id="gallery"
        className="max-lg mx-auto px-8 mb-24 flex flex-col items-center z-10"
      >
        <div className="flex flex-col items-center gap-2 z-20">
          {titleTopOrnament ? (
            <img
              className="w-[200px]"
              src={titleTopOrnament}
              alt="ornament-2"
            />
          ) : null}
          <h2 className="text-center text-3xl">Our Gallery</h2>
          {titleBottomOrnament ? (
            <img
              className="w-[200px]"
              src={titleBottomOrnament}
              alt="ornament-2"
            />
          ) : null}
        </div>
        <figure className="w-auto h-full relative overflow-y-auto mt-12 flex items-center justify-center gallery">
          <img
            className="w-full h-full absolute top-0"
            src="https://is3.cloudhost.id/invitz-bucket/theme/rustic/gallery-bg.webp"
            alt="bg-gallery"
          />

          <div className="!z-30 relative grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-8 py-28 lg:py-20 px-6 lg:px-8">
            {gallery.map((img) => {
              return (
                <a
                  href={img}
                  className="lg:w-[400px] w-full h-auto lg:h-[400px]"
                  data-aos="zoom-in"
                >
                  <img
                    className="object-cover lg:w-[400px] w-full h-auto lg:h-[400px]"
                    src={img}
                    alt="gallery-1"
                  />
                </a>
              );
            })}
          </div>
        </figure>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 gallery mt-12">
          {gallery.map((img) => {
            return (
              <a
                href={img}
                className="lg:w-[300px] w-full h-auto lg:h-[300px]"
                data-aos="zoom-in"
              >
                <img
                  className="object-cover lg:w-[300px] w-full h-auto lg:h-[300px]"
                  src={img}
                  alt="gallery-1"
                />
              </a>
            );
          })}
        </div> */}
      </div>
      {rightOrnament ? (
        <img
          src={rightOrnament}
          alt="flower-1"
          className="absolute h-[300px] lg:h-[600px] top-44 lg:top-0 right-0 -z-10"
          data-aos="fade-in"
        />
      ) : null}
    </section>
  );
};

export default GalleryTwoSection;
