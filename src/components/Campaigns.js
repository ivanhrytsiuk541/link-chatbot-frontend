const Campaigns = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-center text-gray-800 lg:text-2xl mb-4">
        Use this page to set up and run a new campaign
      </h2>
      <div className="flex my-2 w-full">
        <span className="w-64 text-left py-2 pl-2">Campaign Name</span>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-md"
          placeholder="name of your campaign for internal tracking"
        />
      </div>
      <div className="m-4 border rounded-md p-4">
        <h1 className="">List of Prospects</h1>
        <div className="flex my-2">
          <span className="w-32 text-left py-2 pl-2">1</span>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md mr-2"
            placeholder="URL"
          />
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Email"
          />
        </div>
        <div className="flex my-2">
          <span className="w-32 text-left py-2 pl-2">2</span>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md mr-2"
            placeholder="URL"
          />
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Email"
          />
        </div>
        <div className="flex my-2">
          <span className="w-32 text-left py-2 pl-2">3</span>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md mr-2"
            placeholder="URL"
          />
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Email"
          />
        </div>
        <div className="flex my-2">
          <span className="w-32 text-left py-2 pl-2">4</span>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md mr-2"
            placeholder="URL"
          />
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Email"
          />
        </div>
        <div className="flex my-2">
          <span className="w-32 text-left py-2 pl-2">5</span>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md mr-2"
            placeholder="URL"
          />
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Email"
          />
        </div>

        <button className="px-8 py-1 bg-none text-green-600 border-green-600 border rounded-md transition duration-300 ease-in-out hover:bg-green-600 hover:text-white">
          Run Campaign
        </button>
      </div>
    </div>
  );
};

export default Campaigns;
