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

import { getGoogleCalendarLink } from "../../utils/common";
import QuotesSection from "../sections/quotes";
import GallerySection from "../sections/gallery";

const AutumnMorningTheme = ({
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
        <link rel="stylesheet" href="./assets/css/autumn-morning.css" />
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
            <h1 className="text-3xl !font-semibold">
              Hi, we are getting married!
            </h1>
            <div>
              <p>Kepada Yth,</p>
              <p className="text-lg !font-semibold">{to}</p>
            </div>
            <div className="flex justify-center">
              <button
                id="open_invitation"
                onClick={() => {
                  setIsOpenCover(false);
                }}
                className="flex items-center text-center justify-center gap-2 bg-[#AA8B56]/70 w-fit text-white !font-semibold rounded-md py-2 px-4 animate__animated animate__pulse animate__infinite infinite animate__slower"
              >
                <i className="fa-sharp fa-solid fa-envelope"></i> Buka Undangan
              </button>
            </div>
          </div>
        </div>
      ) : (
        <main id="main-content">
          <div
            id="autumn-morning-theme"
            className="w-full min-h-screen max-w-screen overflow-x-hidden"
          >
            <section id="hero" className="h-screen">
              <img
                src="https://is3.cloudhost.id/invitz-bucket/theme/autumn-morning/autumn-morning-flower-2.webp"
                alt="flower-1"
                className="absolute h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] -left-16 lg:-left-20 -top-8"
                data-aos="fade-down-right"
              />
              <div className="h-full text-[#3C2317]" data-aos="zoom-in">
                <div className="h-full grid place-content-center px-2">
                  <div className="text-center space-y-8">
                    <p className="text-2xl lg:text-3xl">The Wedding of</p>
                    <h1 className="text-4xl lg:text-6xl font-bold">
                      {data?.bride_nickname} & {data?.groom_nickname}
                    </h1>
                  </div>
                  <div className="mt-12 grid grid-cols-3 items-center gap-12 text-xl text-center !font-semibold">
                    <p>{data?.wedding_date_day}</p>
                    <div className="text-center space-y-2">
                      <h3 className="text-4xl">{data.wedding_date_date}</h3>
                      <p>{data.wedding_date_month}</p>
                    </div>
                    <p>{data.wedding_date_year}</p>
                  </div>
                  <div className="flex justify-center mt-8" data-aos="zoom-in">
                    <img
                      className="w-[200px] rotate-180"
                      src="./assets/ornaments/autumn-morning-ornament-branch.webp"
                      alt="ornament-2"
                    />
                  </div>
                </div>
              </div>
              <img
                src="https://is3.cloudhost.id/invitz-bucket/theme/autumn-morning/autumn-morning-flower-1.webp"
                alt="flower-1"
                className="absolute h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] bottom-2 -right-8"
                data-aos="fade-up-left"
              />
            </section>

            <img
              src="https://is3.cloudhost.id/invitz-bucket/theme/autumn-morning/autumn-morning-double-border.webp"
              alt="section-border"
              className="w-full h-32 lg:h-full -mt-16 lg:-mt-32 relative object-cover"
            />

            <section id="couples" className="px-8 mt-12 mb-24 max-lg mx-auto">
              <div className="flex flex-col items-center gap-2">
                <Image
                  className="w-[200px] rotate-180"
                  src="/assets/ornaments/simple-ornament-2.png"
                  alt="ornament-2"
                  width={200}
                  height={80}
                />
                <h2 className="text-center text-3xl">We are getting married!</h2>
                <Image
                  className="w-[200px]"
                  src="/assets/ornaments/simple-ornament-2.png"
                  alt="ornament-2"
                  width={200}
                  height={80}
                />
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
                    <h4 className="text-2xl !font-semibold">{data.bride}</h4>
                    <p>
                      Putri dari Bapak {data.bride_dad} dan Ibu {data.bride_mom}
                    </p>
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
                    <h4 className="text-2xl !font-semibold">{data.groom}</h4>
                    <p>
                      Putra dari Bapak {data.groom_dad} dan Ibu {data.groom_mom}
                    </p>
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
                          <h4 className="text-2xl !font-semibold">
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
                        <p className="text-base !font-semibold">
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
                  className="flex items-center justify-center gap-2 w-fit bg-[#AA8B56]/70 px-4 py-2 text-white text-sm cursor-pointer rounded-md"
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
            <QuotesSection
              data={data}
              waveBg="https://is3.cloudhost.id/invitz-bucket/theme/autumn-morning/wave-bg.png"
            />

            {data?.stories.length && data?.stories?.[0]?.title ? (
              <section id="stories" className="max-lg mx-auto px-8 my-24">
                <div className="flex flex-col items-center gap-2">
                  <Image
                    className="w-[200px] rotate-180"
                    src="/assets/ornaments/simple-ornament-2.png"
                    alt="ornament-2"
                    width={200}
                    height={80}
                  />
                  <h2 className="text-center text-3xl">Our Stories</h2>
                  <Image
                    className="w-[200px]"
                    src="/assets/ornaments/simple-ornament-2.png"
                    alt="ornament-2"
                    width={200}
                    height={80}
                  />
                </div>

                <div className="space-y-4 mt-12 w-full lg:w-3/4 mx-auto">
                  {data?.stories.map((story, idx) => {
                    return (
                      <div
                        data-aos="fade-down"
                        className="bg-[#AA8B56]/10 rounded-lg p-4 shadow-md flex items-start flex-col lg:flex-row gap-4 story-content relative"
                      >
                        <div className="flex-1">
                          <h4 className="!font-semibold text-xl">
                            {story.title}
                          </h4>
                          <p className="mt-1 mb-2">{story.date_string}</p>
                          <p className="text-sm text-ellipsis">
                            {story.content}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ) : null}

            <GallerySection
              gallery={data.gallery}
              titleBottomOrnament="./assets/ornaments/autumn-morning-ornament-branch.webp"
            />

            {data.invitation_setup.rsvp === "on" ? (
              <RSVPSection
                color="#AA8B56"
                bottomOrnament="./assets/ornaments/autumn-morning-ornament-branch.webp"
                username={username}
                to={to}
                gid={gid}
              />
            ) : null}

            <WishesSection
              color="#AA8B56"
              wishes={data?.wishes}
              bottomOrnament="./assets/ornaments/autumn-morning-ornament-branch.webp"
              username={username}
              to={to}
              refetch={refetchData}
            />

            {data?.gift_methods.length ? (
              <GiftDialog color="#AA8B56" giftMethods={data?.gift_methods} />
            ) : null}

            <section
              id="thanks"
              className="mx-auto px-8 text-center my-24 flex flex-col items-center gap-4 relative"
            >
              <h2 className="text-2xl">Thank you!</h2>
              <p className="text-4xl !font-semibold">
                {data?.bride_nickname} & {data?.groom_nickname}
              </p>
              <img
                className="w-[200px]"
                src="./assets/ornaments/autumn-morning-ornament-branch.webp"
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

export default AutumnMorningTheme;
