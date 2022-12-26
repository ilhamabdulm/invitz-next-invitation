import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function GiftDialog({ color = "#000000", giftMethods = [] }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex justify-center">
        <button
          type="button"
          onClick={openModal}
          style={{ backgroundColor: color, opacity: 0.8 }}
          className={`rounded-md bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <i className="fa-sharp fa-solid fa-gift"></i> Kirim Hadiah
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white px-6 py-12 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-gray-900 text-center"
                  >
                    Kirim Hadiah
                  </Dialog.Title>
                  <div className="mt-6 flex items-center justify-center">
                    <ul className="space-y-4">
                      {giftMethods.length
                        ? giftMethods?.map((gift) => {
                            return gift.type === "transfer" ? (
                              <li className="text-center space-y-1">
                                <p className="text-xs">
                                  Bank {gift.bank_account}
                                </p>
                                <p className="text-lg font-semibold">
                                  {gift.bank_account_number}
                                </p>
                                <p className="text-sm">
                                  {gift.bank_account_name}
                                </p>
                              </li>
                            ) : (
                              <li>
                                <div className="space-y-2 text-center">
                                  <h4>Alamat Rumah</h4>
                                  <p>
                                    <i className="fa-solid fa-location-dot"></i>{" "}
                                    &nbsp;
                                    {gift.address}
                                  </p>
                                </div>
                              </li>
                            );
                          })
                        : "-"}
                    </ul>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Tutup
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
