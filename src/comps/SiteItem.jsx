import { Link } from "react-router-dom";

export default function SiteItem() {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src="https://img.freepik.com/free-vector/building-concept-illustration_114360-4469.jpg?w=2000"
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            EASTERN ZONE
          </h2>
          <h1 className="title-foNament text-lg font-medium text-gray-900 mb-3">
            Samora HQ
          </h1>
          <p className="leading-relaxed mb-3">
            Located in Dar es salaam. At the moment we are working on servicing
            the AC for the third quarter.
          </p>
          <div className="flex items-center flex-wrap ">
            <Link
              to=""
              className="text-red-500 hover:text-red-400 inline-flex items-center md:mb-2 lg:mb-0"
            >
              Get in
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <span className="text-yellow-400 mr-3 font-bold inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              60
            </span>
            <span className="text-green-400 font-bold inline-flex items-center leading-none text-sm">
              94
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
