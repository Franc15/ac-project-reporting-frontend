export default function FloorItem(props) {
  const floorId = props.floor.id;
  const siteId = props.siteid;
  const handleClick = () => {
    console.log("clicked");
    console.log(floorId, siteId);
    window.location.href = `/rooms/${siteId}/${floorId}`;
  };
  return (
    <div onClick={handleClick} className="xl:w-1/3 md:w-1/2 p-4">
      <div className="border border-gray-200 p-6 rounded-lg">
        <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 mb-4">
          {/* <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg> */}
        </div>
        <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
          {props.floor.floor_level_name}
        </h2>
      </div>
    </div>
  );
}
