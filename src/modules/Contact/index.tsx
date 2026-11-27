"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

// The services a request can be about. The Services pages link here with
// ?service=<value>, so the request arrives tagged with the option the visitor
// picked; they can still change it.
const SERVICES = [
  { value: "full-audit", label: "Full Audit" },
  { value: "focused-audit", label: "Focused Audit" },
  { value: "yagent-review", label: "yAgent Review" },
  { value: "update-review", label: "Update Review" },
  { value: "zk-audit", label: "ZK Audit" },
  { value: "boosted-audit", label: "Boosted Audit" },
  { value: "not-sure", label: "Not sure yet" },
];

// The site has no forms plugin, so the fields get their border here.
const fieldClass =
  "block w-full border border-zinc-300 bg-white px-3 text-zinc-950 outline-none transition-colors placeholder:text-zinc-400 focus:border-deepblue";
const inputClass = `mt-2 h-12 ${fieldClass}`;

// The site defines sm, md and lg as ranges (tailwind.config.ts): a class
// that applies from 768px up needs both "md:" and "lg:".
const fullWidthClass = "md:col-span-2 lg:col-span-2";

function Label({ htmlFor, required, children }: {
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-semibold text-zinc-700">
      {children}
      {required && <span className="text-deepblue">*</span>}
    </label>
  );
}

export default function ContactUs() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isBusy, setIsBusy] = useState(false);
  const [formResponse, setFormResponse] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);

  // Preselect the service named in the URL. The page is exported as static
  // HTML, so the URL is only known in the browser.
  useEffect(() => {
    const service = new URLSearchParams(window.location.search).get("service");
    if (serviceRef.current && SERVICES.some((option) => option.value === service)) {
      serviceRef.current.value = service as string;
    }
  }, []);

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
      service:
        SERVICES.find(
          (option) => option.value === (form.elements.namedItem("service") as HTMLSelectElement).value
        )?.label ?? "",
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

  const disabled = isBusy || isDisabled;

  return (
    <div className="mx-6 my-16 lg:mx-[20vw]">
      <h1 className="lg:text-5xl text-4xl font-bold">Contact</h1>
      <p className="mt-4 text-xl text-zinc-500">
        Request an audit or ask a question. We don&apos;t just read code, we read your
        messages too.
      </p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        aria-busy={isBusy}
        className="mt-10 grid gap-6 border border-zinc-200 p-6 md:grid-cols-2 md:p-8 lg:grid-cols-2 lg:p-10"
      >
        {formResponse && (
          <div
            role="status"
            aria-live="polite"
            className={`${fullWidthClass} border p-4 text-sm ${
              formResponse.type === "error"
                ? "border-red-200 bg-red-50 text-red-700"
                : "border-deepblue/30 bg-deepblue/5 text-deepblue"
            }`}
          >
            {formResponse.message}
          </div>
        )}

        <div>
          <Label htmlFor="name" required>Your name</Label>
          <input id="name" type="text" name="name" required className={inputClass} />
        </div>
        <div>
          <Label htmlFor="tguser" required>Telegram username</Label>
          <input
            id="tguser"
            type="text"
            name="tguser"
            required
            placeholder="@username"
            className={inputClass}
          />
        </div>

        <div>
          <Label htmlFor="service" required>Service</Label>
          <div className="relative mt-2">
            <select
              ref={serviceRef}
              id="service"
              name="service"
              required
              defaultValue=""
              className={`h-12 appearance-none pr-10 ${fieldClass}`}
            >
              <option value="">Select a service</option>
              {SERVICES.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="protocol" required>Protocol name</Label>
          <input id="protocol" type="text" name="protocol" required className={inputClass} />
        </div>

        <div>
          <Label htmlFor="website" required>Website URL</Label>
          <input
            id="website"
            type="url"
            name="website"
            required
            placeholder="https://"
            className={inputClass}
          />
        </div>
        <div>
          <Label htmlFor="date">Preferred audit completion date</Label>
          <input
            id="date"
            type="date"
            name="date"
            min={new Date().toISOString().split("T")[0]}
            className={inputClass}
          />
        </div>

        <div className={fullWidthClass}>
          <Label htmlFor="github">GitHub repo link</Label>
          <input
            id="github"
            type="url"
            name="github"
            placeholder="https://github.com/org/repo"
            className={inputClass}
          />
        </div>

        <div className={fullWidthClass}>
          <Label htmlFor="message">Scope and additional information</Label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Contracts in scope, commit, timeline, anything we should know."
            className={`mt-2 py-3 ${fieldClass}`}
          />
        </div>

        <div
          className={`${fullWidthClass} flex flex-col-reverse gap-4 md:flex-row md:items-center md:justify-between lg:flex-row lg:items-center lg:justify-between`}
        >
          <p className="text-sm text-zinc-500">
            <span className="text-deepblue">*</span> Required
          </p>
          <button
            type="submit"
            disabled={disabled}
            className={`w-full border px-10 py-3 font-bold transition-colors duration-700 md:w-auto lg:w-auto ${
              disabled
                ? "cursor-not-allowed border-zinc-300 bg-zinc-300 text-white"
                : "border-deepblue bg-deepblue text-white hover:bg-white hover:text-deepblue"
            }`}
          >
            {isBusy ? "Sending..." : "Send request"}
          </button>
        </div>
      </form>
    </div>
  );
}
