import RoomItem from "./RoomItem";

export default function Rooms() {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Rooms
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here is the list of rooms in the 8th floor of Samora NAOT Building
          </p>
        </div>
        <div class="flex flex-wrap -m-2">
          <RoomItem />
          <RoomItem />
          <RoomItem />
          <RoomItem />
          <RoomItem />
          <RoomItem />
        </div>
      </div>
    </section>
  );
}
