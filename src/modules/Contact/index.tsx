"use client";

import React, { useState, useRef } from "react";

export default function ContactUs() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isBusy, setIsBusy] = useState(false);
  const [formResponse, setFormResponse] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isBusy || isDisabled) return;

    setIsBusy(true);
    setIsDisabled(true);
    setFormResponse(null);

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      tguser: (form.elements.namedItem("tguser") as HTMLInputElement).value,
      protocol: (form.elements.namedItem("protocol") as HTMLInputElement).value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
      date: (form.elements.namedItem("date") as HTMLInputElement)?.value,
      github: (form.elements.namedItem("github") as HTMLInputElement)?.value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status}`);
      }

      setFormResponse({
        type: "success",
        message:
          "Thank you for your message. We will get back to you as soon as possible!",
      });
      formRef.current?.reset();
    } catch {
      setFormResponse({
        type: "error",
        message: "We are sorry, but something went wrong. Please try again later.",
      });
    } finally {
      setIsBusy(false);
      setTimeout(() => {
        setIsDisabled(false);
      }, 10000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact</h1>
          <p className="text-xl text-gray-600">
            Request an audit or ask a question. We dont just read code, we read
            your messages too.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-8 hover:-translate-y-1 transition-transform duration-300">
            {formResponse && (
              <div
                role="status"
                aria-live="polite"
                className={`mt-4 p-4 ${
                  formResponse.type === "error"
                    ? "bg-red-50 text-red-700"
                    : "bg-green-50 text-deepblue"
                }`}
              >
                {formResponse.message}
              </div>
            )}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
              aria-busy={isBusy}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your name*
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="tguser"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Telegram username*
                  </label>
                  <input
                    id="tguser"
                    type="text"
                    name="tguser"
                    required
                    className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="protocol"
                  className="block text-sm font-medium text-gray-700"
                >
                  Protocol name*
                </label>
                <input
                  id="protocol"
                  type="text"
                  name="protocol"
                  required
                  className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50"
                />
              </div>

              <div>
                <label
                  htmlFor="website"
                  className="block text-sm font-medium text-gray-700"
                >
                  Website URL*
                </label>
                <input
                  id="website"
                  type="url"
                  name="website"
                  required
                  className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50"
                />
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Preferred audit completion date
                </label>
                <input
                  id="date"
                  type="date"
                  name="date"
                  min={new Date().toISOString().split("T")[0]}
                  className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50"
                />
              </div>

              <div>
                <label
                  htmlFor="github"
                  className="block text-sm font-medium text-gray-700"
                >
                  Github repo link
                </label>
                <input
                  id="github"
                  type="url"
                  name="github"
                  className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Scope and additional information
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 bg-gray-50"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isBusy || isDisabled}
                  className={`w-full flex justify-center py-3 px-4 border text-sm font-medium
                  ${
                    isBusy || isDisabled
                      ? "bg-gray-400 text-white cursor-not-allowed border-gray-400"
                      : "text-white bg-deepblue hover:bg-white hover:text-deepblue border-deepblue duration-700"
                  }`}
                >
                  {isBusy ? "Sending..." : "Send request"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
