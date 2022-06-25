import FloorItem from "./FloorItem";

export default function Floors() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Samora HQ
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Here are the floors in Samora HQ NAOT Building Office
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <FloorItem />
          <FloorItem />
          <FloorItem />
          <FloorItem />
          <FloorItem />
          <FloorItem />
        </div>
        <button className="flex mx-auto mt-16 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">
          Go Back
        </button>
      </div>
    </section>
  );
}
