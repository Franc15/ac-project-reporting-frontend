export default function Login() {
  return (
    <section className="text-gray-600 body-font relative">
      <h1 className="pt-6 text-center text-3xl font-bold text-red-500">
        Online Reporting System
      </h1>
      <div className="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <img
            src="https://www.timeshorizon.co.tz/sitepad-data/uploads//2022/01/117374469_168691604721055_1004448400849392146_n1.jpg"
            alt="login"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                TIMES HORIZON LIMITED
              </h2>
              <p className="mt-1">
                Sinza Vatican #21 Nahodharasmi, Dar es salaam, Tanzania
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                WEBSITE
              </h2>
              <a className="text-red-500 leading-relaxed">
                www.timeshorizon.co.tz
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+255-739-777-797</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Sign In
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Input your details to sign in
          </p>
          <div className="relative mb-4">
            <label for="username" className="leading-7 text-sm text-gray-600">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="password" className="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
            Sign In
          </button>
          <p className="text-xs text-gray-500 mt-3">We are signing you in...</p>
        </div>
      </div>
    </section>
  );
}
