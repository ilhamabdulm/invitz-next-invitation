const QuotesSection = ({ data }) => {
  return (
    <section
      id="quotes"
      className="my-24 w-full h-[600px] lg:h-[800px] bg-center bg-fixed bg-cover relative"
      style={{
        backgroundImage: data?.invitation_setup?.quotes_image
          ? `url('${data?.invitation_setup?.quotes_image}')`
          : "",
      }}
    >
      <article className="flex items-center w-full h-full text-white bg-[#0b0b0b]/50 px-8 lg:px-20 py-20">
        <div className="space-y-8 max-lg mx-auto text-center">
          <h4
            className="text-xl lg:text-3xl leading-[2rem] lg:leading-[4rem]"
            data-aos="fade-down"
          >
            وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا
            لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً
            ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
          </h4>
          <p
            className="text-xs lg:text-base"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
            pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
            dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
            kasih dan sayang. Sungguh, pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir."
          </p>
          <p data-aos="fade-up" data-aos-delay="200">
            Surah Ar Rum Ayat 21
          </p>
        </div>
      </article>
    </section>
  );
};

export default QuotesSection;
