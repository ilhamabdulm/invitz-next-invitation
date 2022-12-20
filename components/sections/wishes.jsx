import { useForm } from "../../utils/hooks";
import { postGuestBook } from "../../services/main";

const WishesSection = ({
  color,
  wishes,
  topOrnament,
  bottomOrnament,
  username,
  refetch,
  to,
}) => {
  const { state, handleFormChange } = useForm({
    name: to || "",
    wishes: "",
  });

  return (
    <section
      id="wishes"
      className="max-lg mx-auto px-8 my-24 flex flex-col items-center"
    >
      {topOrnament ? (
        <img className="w-[200px] mb-4" src={topOrnament} alt="ornament-2" />
      ) : null}
      <h2 className="text-center text-3xl">Guest Book</h2>
      {bottomOrnament ? (
        <img className="w-[200px] mt-4" src={bottomOrnament} alt="ornament-2" />
      ) : null}
      <form
        className="my-12 flex flex-col gap-3 w-full lg:w-1/2"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();

          postGuestBook(username, state)
            .then((response) => {
              if (response.success) {
                refetch();
              }
            })
            .catch((err) => {
              console.log({ err });
            });
        }}
      >
        <label htmlFor="name">
          <p className="mb-1 text-sm font-semibold">Nama Kamu</p>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Masukkan Nama Kamu"
            className={`px-3 py-2 w-full rounded-md focus:outline-[${color}] border border-slate-200`}
            value={state.name}
            onChange={handleFormChange}
          />
        </label>
        <label htmlFor="wishes">
          <p className="mb-1 text-sm font-semibold">Ucapan Kamu</p>
          <textarea
            className={`px-3 py-2 w-full rounded-md focus:outline-[${color}] border border-slate-200`}
            name="wishes"
            id="wishes"
            rows="10"
            placeholder="Sampaikan ucapan kamu kepada mempelai"
            onChange={handleFormChange}
            value={state.wishes}
          ></textarea>
        </label>

        <footer className="mt-6">
          <button
            className={`flex items-center text-center justify-center gap-2 w-full px-4 py-2 h-[40px] font-semibold text-base text-white bg-[${color}]/70 rounded-md`}
          >
            <i className="fa-sharp fa-solid fa-message"></i> Kirimkan
          </button>
        </footer>
      </form>
      <div
        className={`max-h-[480px] w-full lg:w-1/2 p-6 overflow-y-auto bg-[${color}]/10 rounded-lg`}
      >
        <ul className="space-y-4">
          {wishes
            ?.sort((a, b) => new Date(b.date) - new Date(a.date))
            .map((wish) => {
              return (
                <li>
                  <div className="bg-white text-black rounded-md shadow-lg p-4">
                    <h4 className="text-lg font-semibold">{wish.name}</h4>
                    <p className="text-xs mt-1 mb-3">{wish.date_string}</p>
                    <p className="text-sm">{wish.wishes}</p>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </section>
  );
};

export default WishesSection;
