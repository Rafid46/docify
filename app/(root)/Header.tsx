import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <div>
      <header className="lg:py-2">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between h-16 lg:rounded-md  lg:h-24 lg:px-8 lg:py-2">
            <div className="flex-shrink-0">
              <a href="#" title="" className="flex">
                <p className="text-[#5DEBD7] text-3xl font-bold">Docify</p>
              </a>
            </div>

            <button
              type="button"
              className="inline-flex p-2 ml-5 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            ></button>

            <div className="hidden ml-10 lg:flex lg:items-center lg:mr-auto lg:space-x-10">
              <a
                href="#"
                title=""
                className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Features{" "}
              </a>

              <a
                href="#"
                title=""
                className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Solutions{" "}
              </a>

              <a
                href="#"
                title=""
                className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Resources{" "}
              </a>

              <a
                href="#"
                title=""
                className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                Pricing{" "}
              </a>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              <a
                href="#"
                title=""
                className="text-base font-medium text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
              >
                {" "}
                <SignedOut>
                  <SignInButton />
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </a>
            </div>
          </nav>

          <nav className="flex flex-col py-4 space-y-2 lg:hidden">
            <a
              href="#"
              title=""
              className="py-2 text-base font-medium text-white transition-all duration-200 focus:text-blue-600"
            >
              {" "}
              Features{" "}
            </a>

            <a
              href="#"
              title=""
              className="py-2 text-base font-medium text-white transition-all duration-200 focus:text-blue-600"
            >
              {" "}
              Solutions{" "}
            </a>

            <a
              href="#"
              title=""
              className="py-2 text-base font-medium text-white transition-all duration-200 focus:text-blue-600"
            >
              {" "}
              Resources{" "}
            </a>

            <a
              href="#"
              title=""
              className="py-2 text-base font-medium text-white transition-all duration-200 focus:text-blue-600"
            >
              {" "}
              Pricing{" "}
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
