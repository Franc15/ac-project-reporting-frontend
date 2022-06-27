export default function Item(props) {
  return (
    <div className="p-2 lg:w-1/5 md:w-1/4 w-full">
      <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <div className="flex-grow">
          <p className="text-gray-900">{props.item.id}</p>
          <button className="flex w-full mx-auto mt-2 text-white bg-red-400 border-0 py-2 px-2 focus:outline-none hover:bg-red-500 rounded text-md font-bold">
            <p className="text-center">Done</p>
          </button>
        </div>
      </div>
    </div>
  );
}
