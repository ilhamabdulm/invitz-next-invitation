const GMapsEmbed = ({ embedUrl }) => {
  return (
    <section id="maps" className="px-8 max-lg mx-auto relative">
      <h2 className="text-center text-3xl">Google Maps Location</h2>
      <div className="flex items-center justify-center mt-12 rounded-lg overflow-hidden">
        <iframe
          className="rounded-lg overflow-hidden"
          src={embedUrl}
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default GMapsEmbed;
