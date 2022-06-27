export default function RoomItem(props) {
  const handleClick = () => {
    window.location.href = `/items/${props.room.id}`;
  };
  return (
    <div onClick={handleClick} className="p-2 lg:w-1/4 md:w-1/3 w-full">
      <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <div className="flex-grow">
          <h2 className="text-gray-900 title-font font-medium">
            {props.room.room_name}
          </h2>
          {/* <p className="text-gray-500">Auditors Performance 801</p> */}
        </div>
      </div>
    </div>
  );
}
