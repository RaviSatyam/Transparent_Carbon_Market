
import { Disclosure,  } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "./nav.css";


function Navbar_MRV() {


  return (
    <>
      <Disclosure as="nav" className="bg-nav-gov">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <h1 className="text-2xl font-semibold text-black">
                      TCM
                    </h1>
                   
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4"></div>
                  </div>
                </div>

                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <h1 className="text-2xl font-semibold text-black">
                      MRV Dashboard
                    </h1>
                   
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4"></div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="  p-1.5 text-slate-50  focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <div className="flex flex-col items-center">
                      {/* <span className="text-lg">
                     
                    </span> */}

                      <span className=" text-sm text-indigo-700 fond-bold">
                        Account ID:
                      </span>
                      <span className=" text-purple-700 fond-bold">
                        0.0.4376836
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2"></div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
export default Navbar_MRV;
// export {hashIdData};
