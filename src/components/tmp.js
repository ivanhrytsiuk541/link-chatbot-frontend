import "../App.css";
import Add from "./Add";
import { useState, useEffect } from "react";
import axios from "axios";

function Campaigns() {
  const [isNew, setIsNew] = useState(0);
  const [emails, setEmails] = useState([]);

  const getEmails = async () => {
    const response = await axios.post("http://localhost:9000/api/list");
    setEmails(response.data.emails);
  };

  useEffect(() => {
    getEmails();
  }, []);

  return (
    <div className="App">
      <main className="flex flex-row min-h-screen bg-gray-100">
        <div className="flex-1">
          <div className="px-6 py-8 mx-auto space-y-6 max-w-screen-2xl xl:px-12">
            <div className="bg-white rounded-md shadow-sm shadow-gray-200 ">
              <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200 lg:px-6">
                <div>
                  <h2 className="text-base font-semibold text-gray-800">
                    Email List
                  </h2>
                </div>
                <button
                  className="flex items-center px-4 py-3 space-x-1 text-sm font-semibold leading-4 transition-colors duration-300 bg-blue-600 rounded-md hover:bg-blue-700 text-blue-50"
                  onClick={() => setIsNew(1)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                  <span>New Email</span>
                </button>
              </div>
              <div className="px-4 divide-y divide-gray-200 lg:px-6">
                {emails.map((email, key) => (
                  <div
                    className="flex items-center justify-between py-3"
                    key={key}
                  >
                    <div className="flex space-x-4 justify-between w-full">
                      <span className="font-semibold text-gray-800">
                        URL : {email.url}
                      </span>
                      <span className="font-semibold text-gray-800">
                        Email : {email.email}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      {isNew === 1 ? (
        <Add setIsNew={setIsNew} setEmails={setEmails} emails={emails} />
      ) : null}
    </div>
  );
}

export default Campaigns;
