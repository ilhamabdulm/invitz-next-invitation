import { useState } from "react";
import { postRSVP } from "../../services/main";
import { useForm } from "../../utils/hooks";

const RSVPSection = ({
  color,
  topOrnament,
  bottomOrnament,
  username,
  to,
  gid,
}) => {
  const { state, handleFormChange } = useForm({
    name: to || "",
    address: "",
    attendance: "",
    total_guest: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <section
      id="rsvp"
      className="max-lg mx-auto px-8 my-24 flex flex-col items-center"
    >
      {topOrnament ? (
        <img className="w-[200px] mb-4" src={topOrnament} alt="ornament-2" />
      ) : null}
      <h2 className="text-center text-3xl">RSVP</h2>
      {bottomOrnament ? (
        <img className="w-[200px] mt-4" src={bottomOrnament} alt="ornament-3" />
      ) : null}
      {!isSuccess ? (
        <form
          id="rsvp-form"
          className="my-12 flex flex-col gap-3 w-full lg:w-1/2"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();

            const payload = { ...state };

            if (gid) {
              payload["guest"] = gid;
            }

            postRSVP(username, payload)
              .then((response) => {
                if (response.success) {
                  setIsSuccess(true);
                }
              })
              .catch((err) => {
                console.log({ err });
              });
          }}
        >
          <div className="grid lg:grid-cols-2 gap-4 lg:gap-8">
            <label htmlFor="name">
              <p className="mb-1 text-sm font-semibold">Nama Lengkap</p>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Masukkan Nama Kamu"
                className={`px-3 py-2 w-full rounded-md focus:outline-[${color}] border border-slate-200 text-black`}
                value={state.name}
                onChange={handleFormChange}
              />
            </label>
            <label htmlFor="address">
              <p className="mb-1 text-sm font-semibold">Alamat</p>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Masukkan Alamat Kamu"
                className={`px-3 py-2 w-full rounded-md focus:outline-[${color}] border border-slate-200 text-black`}
                value={state.address}
                onChange={handleFormChange}
              />
            </label>
            <label htmlFor="attendance">
              <p className="mb-1 text-sm font-semibold">Konfirmasi Kehadiran</p>
              <select
                type="text"
                name="attendance"
                id="attendance"
                placeholder="Pilih jumlah tamu"
                className={`px-3 py-2 w-full rounded-md focus:outline-[${color}] border border-slate-200 text-black`}
                value={state.attendance}
                onChange={handleFormChange}
              >
                <option value="">Konfirmasi Kehadiran</option>
                <option value="0">Tidak Hadir</option>
                <option value="1">Hadir</option>
              </select>
            </label>

            <label htmlFor="total_guest">
              <p className="mb-1 text-sm font-semibold">Jumlah Tamu</p>
              <select
                type="text"
                name="total_guest"
                id="total_guest"
                placeholder="Pilih jumlah tamu"
                className={`px-3 py-2 w-full rounded-md focus:outline-[${color}] border border-slate-200 text-black`}
                value={state.total_guest}
                onChange={handleFormChange}
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </label>
          </div>

          <footer className="mt-6">
            <button
              className={`flex items-center text-center justify-center gap-2 w-full px-4 py-2 h-[40px] font-semibold text-base text-white bg-[${color}]/70 rounded-md`}
            >
              <i className="fa-sharp fa-solid fa-paper-plane"></i> Konfirmasi
            </button>
          </footer>
        </form>
      ) : (
        <p className="text-center text-lg font-semibold italic mt-12">
          Terima kasih telah mengisi RSVP, kami tidak sabar menanti kehadiranmu!
        </p>
      )}
    </section>
  );
};

export default RSVPSection;
