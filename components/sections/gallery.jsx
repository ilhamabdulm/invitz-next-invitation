const GallerySection = ({
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gallery mt-12">
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

export default GallerySection;
