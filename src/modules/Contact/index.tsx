import React, { useState, useRef } from "react";
import axios from "axios";

export default function ContactUs() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isBusy, setIsBusy] = useState(false);
  const [response, setResponse] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isBusy || isDisabled) return;

    setIsBusy(true);
    setIsDisabled(true);

    try {
      const formData = {
        name: (e.currentTarget.elements.namedItem("name") as HTMLInputElement)
          .value,
        tguser: (
          e.currentTarget.elements.namedItem("tguser") as HTMLInputElement
        ).value,
        protocol: (
          e.currentTarget.elements.namedItem("protocol") as HTMLInputElement
        ).value,
        website: (
          e.currentTarget.elements.namedItem("website") as HTMLInputElement
        ).value,
        date: (e.currentTarget.elements.namedItem("date") as HTMLInputElement)
          ?.value,
        github: (
          e.currentTarget.elements.namedItem("github") as HTMLInputElement
        )?.value,
        message: (
          e.currentTarget.elements.namedItem("message") as HTMLTextAreaElement
        ).value,
      };

      axios
        .post("/api/telegram", formData)
        .then((): void => {
          setResponse(
            "Thank you for your message. We will get back to you as soon as possible!"
          );
        })
        .catch((): void => {
          setResponse(
            "We are sorry, but something went wrong. Please try again later."
          );
        })
        .finally((): void => {
          formRef.current?.reset();
          setIsBusy(false);
          setTimeout((): void => {
            setIsDisabled(false);
          }, 10000);
        });
    } catch (error) {
      console.error("Error:", error);
      setResponse("Sorry, something went wrong. Please try again later.");
      setIsBusy(false);
      setTimeout(() => setIsDisabled(false), 10000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact</h2>
          <p className="text-xl text-gray-600">
            Request an audit or ask a question. We dont just read code, we read
            your messages too.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 hover:-translate-y-1 transition-transform duration-300">
            {response ? (
              <div
                className={`mt-4 p-4 ${
                  response.includes("sorry")
                    ? "bg-red-50 text-red-700"
                    : "bg-green-50 text-deepblue"
                }`}
              >
                {response}
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Your name*
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Telegram username*
                    </label>
                    <input
                      type="text"
                      name="tguser"
                      required
                      className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Protocol name*
                  </label>
                  <input
                    type="text"
                    name="protocol"
                    required
                    className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Website URL*
                  </label>
                  <input
                    type="url"
                    name="website"
                    required
                    className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Preferred audit completion date
                  </label>
                  <input
                    type="date"
                    name="date"
                    min={new Date().toISOString().split("T")[0]}
                    className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Github repo link
                  </label>
                  <input
                    type="url"
                    name="github"
                    className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Scope and additional information
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isDisabled}
                    className={`w-full flex justify-center py-3 px-4 border text-sm font-medium
                    ${
                      isDisabled
                        ? "bg-gray-400 text-white cursor-not-allowed border-gray-400"
                        : "text-white bg-deepblue hover:bg-white hover:text-deepblue border-deepblue duration-700"
                    }`}
                  >
                    {isBusy ? "Sending..." : "Send request"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
