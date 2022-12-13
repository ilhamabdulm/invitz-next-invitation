import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Head from "next/head";

import Countdown from "../sections/countdown";
import ParticlesSnow from "../sections/particles-snow";
import HealtProtocols from "../sections/health-protocols";
import GMapsEmbed from "../sections/gmaps";
import AudioPlayer from "../sections/audio-player";
import FooterInvitz from "../sections/footer-invitz";
import WishesSection from "../sections/wishes";
import RSVPSection from "../sections/rsvp";
import GiftDialog from "../sections/gift-dialog";
import GallerySection from "../sections/gallery";

import { getGoogleCalendarLink } from "../../utils/common";

const FlowerlyGreenTheme = ({
  data,
  username,
  refetchData = () => {},
  to,
  gid,
}) => {
  const [isOpenCover, setIsOpenCover] = useState(true);

  let mounted = false;

  useEffect(() => {
    const AOS = window.AOS;
    AOS.init();
  }, [isOpenCover]);

  useEffect(() => {
    const SimpleLightbox = window.SimpleLightbox;
    if (!mounted) {
      new SimpleLightbox(".gallery a", {
        docClose: true,
      });
      mounted = true;
    }

    return () => (mounted = true);
  }, [mounted]);

  return (
    <>
      <Head>
        <link rel="stylesheet" href="./assets/css/flowerly-green.css" />
      </Head>
      {isOpenCover && to ? (
        <div
          id="cover"
          className="fixed top-0 left-0 z-30 h-screen w-screen bg-slate-800/50 px-8 flex items-center justify-center"
        >
          <div
            data-aos="zoom-in"
            className="grid place-content-center text-center bg-white/90 w-full h-[400px] lg:w-[600px] rounded-lg p-6 space-y-6 animate__fadeIn"
          >
            <p>You are Invited!</p>
            <h1 className="text-3xl font-semibold">
              Hi, we are getting married!
            </h1>
            <div>
              <p>Kepada Yth,</p>
              <p className="text-lg font-semibold">{to}</p>
            </div>
            <div className="flex justify-center">
              <button
                id="open_invitation"
                onClick={() => {
                  setIsOpenCover(false);
                }}
                className="flex items-center text-center justify-center gap-2 bg-[#4F4F4F]/70 w-fit text-white font-semibold rounded-md py-2 px-4 animate__animated animate__pulse animate__infinite infinite animate__slower"
              >
                <i className="fa-sharp fa-solid fa-envelope"></i> Buka Undangan
              </button>
            </div>
          </div>
        </div>
      ) : (
        <main id="main-content">
          <div
            id="flowerly-green-theme"
            className="w-full min-h-screen max-w-screen overflow-x-hidden"
          >
            <section id="hero" className="h-screen">
              <img
                src="./assets/theme/flowerly-green/hero-left.png"
                alt="flower-1"
                className="absolute h-[360px] lg:h-[735px] -top-4 lg:top-8"
                data-aos="fade-down-right"
              />
              <div className="h-full" data-aos="zoom-in">
                <div className="h-full grid place-content-center">
                  <div className="text-center space-y-8">
                    <p className="text-2xl lg:text-3xl">The Wedding of</p>
                    <h1 className="text-5xl lg:text-6xl font-bold">
                      {data?.bride_nickname} & {data?.groom_nickname}
                    </h1>
                  </div>
                  <div className="mt-12 flex items-center justify-center gap-12 text-xl text-center font-semibold">
                    <p>{data?.wedding_date_string}</p>
                  </div>
                  <div className="flex justify-center mt-4">
                    <img
                      className="w-[200px] lg:w-[300px]"
                      src="./assets/theme/flowerly-green/text-bottom.png"
                      alt="ornament-2"
                    />
                  </div>
                </div>

                {/* <div id="particles-js"></div> */}
                <ParticlesSnow />
              </div>

              <img
                src="./assets/theme/flowerly-green/hero-right.png"
                alt="flower-1"
                className="absolute h-[275px] lg:h-[577px] bottom-2 lg:bottom-8 right-0"
                data-aos="fade-up-left"
              />

              <img
                className="w-full absolute -bottom-2"
                src="./assets/theme/flowerly-green/wave-bg.png"
                alt="ornament-2"
              />
            </section>

            <section id="couples" className="px-8 my-24 max-lg mx-auto">
              <div className="flex flex-col items-center gap-2">
                <img
                  className="w-[200px]"
                  src="./assets/theme/flowerly-green/title-border.png"
                  alt="ornament-2"
                />
                <h2 className="text-center text-3xl">
                  We are getting married!
                </h2>
              </div>
              <div className="flex justify-center">
                <div
                  className="my-12 text-center space-y-4 w-3/4"
                  data-aos="zoom-in"
                >
                  <p>Assalamu’alaikum Warahmatullahi Wabarakatuh</p>
                  <p>
                    Maha suci Allah SWT yang telah menciptakan makhluk-Nya
                    berpasang-pasangan. Ya Allah, perkenankanlah kami merangkai
                    kasih sayang yang Kau ciptakan di antara putra-putri kami:
                  </p>
                </div>
              </div>
              <article className="flex items-center flex-col gap-4 lg:flex-row lg:justify-around">
                <div
                  data-aos="fade-right"
                  className="flex flex-col items-center"
                >
                  <div className="couple-photo">
                    <figure className="relative w-[270px] h-[270px] flex items-center justify-center">
                      <Image
                        className="rounded-full -z-10 object-cover"
                        src={data?.bride_photo}
                        alt="bride-photo"
                        fill
                      />
                    </figure>
                  </div>
                  <div className="text-center mt-6 space-y-2">
                    <h4 className="text-2xl font-semibold">{data?.bride}</h4>
                    <p>
                      Putri dari Bapak {data?.bride_dad} dan Ibu{" "}
                      {data?.bride_mom}
                    </p>
                    <div className="mt-2">
                      <a
                        href={`https://instagram.com/${data?.bride_instagram}`}
                        target="_blank"
                      >
                        <i class="fa-brands fa-instagram"></i>{" "}
                        {data?.bride_instagram}
                      </a>
                    </div>
                  </div>
                </div>
                <h5 className="text-9xl text-center">&</h5>
                <div
                  data-aos="fade-left"
                  className="flex flex-col items-center"
                >
                  <div className="couple-photo">
                    <figure className="relative w-[270px] h-[270px] flex items-center justify-center">
                      <Image
                        className="rounded-full -z-10 object-cover"
                        src={data?.groom_photo}
                        alt="groom-photo"
                        fill
                      />
                    </figure>
                  </div>
                  <div className="text-center mt-6 space-y-2">
                    <h4 className="text-2xl font-semibold">{data?.groom}</h4>
                    <p>
                      Putra dari Bapak {data?.groom_dad} dan Ibu{" "}
                      {data?.groom_mom}
                    </p>
                    <div className="mt-2">
                      <a
                        href={`https://instagram.com/${data?.groom_instagram}`}
                        target="_blank"
                      >
                        <i class="fa-brands fa-instagram"></i>{" "}
                        {data?.groom_instagram}
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </section>

            <section id="schedules" className="max-lg px-8 mx-auto my-24">
              <article
                className="flex flex-col lg:flex-row lg:justify-center items-center gap-12"
                data-aos="fade-down"
              >
                {data?.events?.map((event) => {
                  return (
                    <div className="w-full lg:w-[400px]">
                      <h3 className="mb-6 text-center text-2xl">
                        {event.name}
                      </h3>
                      <div className="text-center mb-4">
                        <div className="text-center mb-2">
                          <h4 className="text-2xl font-semibold">
                            {event.date_day}
                          </h4>
                          <p>{event.date_month}</p>
                          <p>{event.date_year}</p>
                        </div>
                        <p>
                          Pukul: {event.time_start} - {event.time_end} WIB
                        </p>
                      </div>

                      <div className="text-center">
                        <p className="text-base font-semibold">
                          {event.location}
                        </p>
                        <p className="text-sm">{event.location_detail}</p>
                      </div>
                    </div>
                  );
                })}
              </article>

              <div className="text-center mt-20 flex justify-center">
                <a
                  className="flex items-center justify-center gap-2 w-fit bg-[#4F4F4F]/70 px-4 py-2 text-white text-sm cursor-pointer rounded-md"
                  href={getGoogleCalendarLink(data)}
                  target="_blank"
                  rel="nofollow"
                >
                  <i className="fa-sharp fa-solid fa-calendar"></i> Add to
                  Google Calendar
                </a>
              </div>
            </section>

            <Countdown date={data?.wedding_date} color="#0e260c" />
            <HealtProtocols />
            <GMapsEmbed embedUrl={data?.events[0].embed_url} />

            <section
              id="quotes"
              className="my-24 w-full h-[600px] lg:h-[800px] bg-center bg-fixed bg-cover relative"
              style={{
                backgroundImage: `url('${data?.invitation_setup?.quotes_image}')`,
              }}
            >
              <img
                className="w-full absolute -top-2 rotate-180"
                src="./assets/theme/flowerly-green/wave-bg.png"
                alt="ornament-2"
              />
              <article className="flex items-center w-full h-full text-white bg-[#0b0b0b]/50 px-8 lg:px-20 py-20">
                <div className="space-y-8 max-lg mx-auto text-center">
                  <h4
                    className="text-xl lg:text-3xl leading-[2rem] lg:leading-[4rem]"
                    data-aos="fade-down"
                  >
                    وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ
                    اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ
                    مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ
                    يَّتَفَكَّرُوْنَ
                  </h4>
                  <p
                    className="text-xs lg:text-base"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia
                    menciptakan pasangan-pasangan untukmu dari jenismu sendiri,
                    agar kamu cenderung dan merasa tenteram kepadanya, dan Dia
                    menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada
                    yang demikian itu benar-benar terdapat tanda-tanda
                    (kebesaran Allah) bagi kaum yang berpikir."
                  </p>
                  <p data-aos="fade-up" data-aos-delay="200">
                    Surah Ar Rum Ayat 21
                  </p>
                </div>
              </article>
              <img
                className="w-full absolute -bottom-2"
                src="./assets/theme/flowerly-green/wave-bg.png"
                alt="ornament-2"
              />
            </section>

            {data?.stories.length && data?.stories?.[0]?.title ? (
              <section id="stories" className="max-lg mx-auto px-8 my-24">
                <div className="flex flex-col items-center gap-2">
                  <img
                    className="w-[200px]"
                    src="./assets/theme/flowerly-green/title-border.png"
                    alt="ornament-2"
                  />
                  <h2 className="text-center text-3xl">Love Stories</h2>
                </div>

                <div className="space-y-4 mt-12 w-full lg:w-3/4 mx-auto">
                  {data?.stories.map((story, idx) => {
                    return (
                      <div
                        data-aos="fade-down"
                        className="bg-[#4F4F4F]/10 rounded-lg p-4 shadow-md flex items-start flex-col lg:flex-row gap-4 story-content relative"
                      >
                        <div className="flex-1">
                          <h4 className="font-semibold text-xl">
                            {story.title}
                          </h4>
                          <p className="mt-1 mb-2">{story.date_string}</p>
                          <p className="text-sm text-ellipsis">
                            {story.content}
                          </p>
                        </div>

                        {idx !== data.stories.length - 1 ? (
                          idx % 2 === 0 ? (
                            <div className="absolute -right-16 -bottom-16">
                              <img
                                src="./assets/theme/flowerly-green/leaf-right.png"
                                alt="leaf-right"
                              />
                            </div>
                          ) : (
                            <div className="absolute -left-16 -bottom-16">
                              <img
                                src="./assets/theme/flowerly-green/leaf-left.png"
                                alt="leaf-left"
                              />
                            </div>
                          )
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </section>
            ) : null}

            <GallerySection
              gallery={data.gallery}
              leftOrnament={"./assets/theme/flowerly-green/section-left.png"}
              titleTopOrnament="./assets/theme/flowerly-green/title-border.png"
              rightOrnament={"./assets/theme/flowerly-green/section-right.png"}
            />

            {data.invitation_setup.rsvp === "on" ? (
              <RSVPSection
                color="#4F4F4F"
                topOrnament="./assets/theme/flowerly-green/title-border.png"
                username={username}
                to={to}
                gid={gid}
              />
            ) : null}

            <WishesSection
              color="#4F4F4F"
              wishes={data?.wishes}
              topOrnament="./assets/theme/flowerly-green/title-border.png"
              username={username}
              to={to}
              refetch={refetchData}
            />

            {data?.gift_methods.length ? (
              <GiftDialog color="#4F4F4F" giftMethods={data?.gift_methods} />
            ) : null}

            <section
              id="thanks"
              className="mx-auto px-8 text-center my-24 flex flex-col items-center gap-4 relative"
            >
              <h2 className="text-2xl">Thank you!</h2>
              <p className="text-4xl font-semibold">
                {data?.bride_nickname} & {data?.groom_nickname}
              </p>
              <img
                className="w-[200px]"
                src="./assets/theme/flowerly-green/text-bottom.png"
                alt="ornament-2"
              />
            </section>

            <FooterInvitz />
          </div>

          {data?.invitation_setup?.music_url ? (
            <AudioPlayer audio={data?.invitation_setup?.music_url} />
          ) : null}
        </main>
      )}
    </>
  );
};

export default FlowerlyGreenTheme;
