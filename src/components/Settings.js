const Settings = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-center text-gray-800 lg:text-2xl mb-4">
        This page helps you set up details about yourself and information used
        across multiple campaigns
      </h2>
      <div className="flex items-center justify-around">
        <button className="px-4 py-2 bg-none text-sky-600 border-sky-600 border rounded-md transition duration-300 ease-in-out hover:bg-sky-600 hover:text-white">
          Connect LinkedIn
        </button>
        <button className="px-4 py-2 bg-none text-orange-600 border-orange-600 border rounded-md transition duration-300 ease-in-out hover:bg-orange-600 hover:text-white">
          Connect GMail
        </button>
      </div>
      <div className="m-4 border rounded-md p-4">
        <div className="flex my-2">
          <span className="w-32 text-left py-2 pl-2">Name</span>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md"
            placeholder="your name to be used when communicating with prospects"
          />
        </div>
        <div className="flex my-2">
          <span className="w-32 text-left py-2 pl-2">Designation</span>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md"
            placeholder="will be used for intro / email signature"
          />
        </div>
        <div className="flex my-2">
          <span className="w-32 text-left py-2 pl-2">Company</span>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md"
            placeholder="name of your company"
          />
        </div>
        <div className="flex my-2">
          <span className="w-32 text-left py-2 pl-2">Company Description</span>
          <textarea
            type="text"
            className="w-full px-4 py-2 border rounded-md"
            rows={4}
            placeholder="Enter details about your company / the product you want to sell, etc
            [Pluggingg in info from marketing one-pagers is a great start]"
          />
        </div>
        <div className="flex my-2">
          <span className="w-32 text-left py-2 pl-2">Scheduling Link</span>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-md"
            placeholder="link to your calendar to book a meeting (ex: Calendly)"
          />
        </div>

        <button className="px-8 py-1 bg-none text-green-600 border-green-600 border rounded-md transition duration-300 ease-in-out hover:bg-green-600 hover:text-white">
          Save
        </button>
      </div>
    </div>
  );
};

export default Settings;
