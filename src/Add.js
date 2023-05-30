import { useState } from "react";
import axios from "axios";

const Add = (props) => {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");

  const AddNew = async (e) => {
    let formData = new FormData();
    formData.append("url", url);
    formData.append("email", email);
    const response = await axios.post(
      "http://localhost:5000/api/insert",
      formData
    );
    let emails = [...props.emails, response.data.email];
    props.setEmails(emails);
    props.setIsNew(0);
  };

  return (
    <div
      className="fixed inset-0 z-30 flex items-start justify-between p-4 pt-20 md:items-center md:pt-0"
      x-data="{ modalOpen: false }"
      x-init="setTimeout(() => modalOpen = true, 300)"
      x-show="modalOpen"
    >
      <div
        className="absolute inset-0 bg-gray-600 bg-opacity-30"
        x-show="modalOpen"
      >
        &nbsp;
      </div>
      <div
        className="relative z-50 w-full max-w-2xl pt-1 mx-auto overflow-y-auto bg-white rounded shadow-xl shadow-gray-300 max-h-[calc(100%_-_4rem)] lg:max-h-[calc(100%_-_10rem)]"
        x-show="modalOpen"
      >
        <div className="flex items-center justify-between px-4 py-3 md:px-6">
          <div className="relative flex items-center space-x-2">
            <h2 className="text-base font-semibold text-gray-800">
              Add new URL and Email
            </h2>
          </div>
          <button
            onClick={() => props.setIsNew(0)}
            className="flex items-center justify-center w-8 h-8 p-1 text-gray-600 transition-colors duration-300 translate-x-3 bg-white rounded-full hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="relative h-full px-4 py-4 border-t border-gray-200 md:py-4 md:px-6 ">
          <form action="#" className="space-y-4">
            <div className="space-y-2">
              <div className="w-full pt-1">
                <label
                  htmlFor="name"
                  className="block font-semibold text-gray-700 text-left"
                >
                  Linked in Profile URL :
                </label>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="https://www.linkedin.com/in/priyank-ahuja/"
                  className="w-full p-2 border rounded-md"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="w-full pt-1">
                <label
                  htmlFor="name"
                  className="block font-semibold text-gray-700 text-left"
                >
                  Email :
                </label>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="admin@gmail.com"
                  className="w-full p-2 border rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-around items-center">
              <button
                className="px-4 py-3 space-x-1 text-sm font-semibold leading-4 transition-colors duration-300 bg-blue-600 rounded-md hover:bg-blue-700 text-blue-50"
                onClick={() => AddNew()}
              >
                <span>Save</span>
              </button>
              <button
                className="px-4 py-3 space-x-1 text-sm font-semibold leading-4 transition-colors duration-300 bg-blue-600 rounded-md hover:bg-blue-700 text-blue-50"
                onClick={() => props.setIsNew(0)}
              >
                <span>Cancel</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
