"use client";

import { useState } from "react";
import type { FC } from "react";

interface RadioOptionProps {
  name: string;
  id: string;
  label: string;
  defaultChecked?: boolean;
}

const RadioOption: FC<RadioOptionProps> = ({
  name,
  id,
  label,
  defaultChecked = false,
}) => (
  <div className="relative flex items-center gap-x-2">
    <input
      id={id}
      name={name}
      type="radio"
      defaultChecked={defaultChecked}
      className="peer absolute h-full w-full cursor-pointer opacity-0"
    />
    <div
      className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-muted-foreground transition-colors peer-checked:border-[#006B5C]"
      aria-hidden="true"
    >
      <div className="h-2 w-2 rounded-full bg-[#006B5C] scale-0 transition-transform peer-checked:scale-100" />
    </div>
    <label htmlFor={id} className="cursor-pointer text-sm text-foreground">
      {label}
    </label>
  </div>
);

const SearchOptions = () => {
  const [activeTab, setActiveTab] = useState("Courses");

  const tabs = ["Courses", "Destinations", "Colleges/Campuses", "Resources"];

  return (
    <section className="bg-white py-8 md:py-16">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <h2 className="mb-12 text-center text-[2.5rem] font-bold leading-tight text-gray-800">
          Search our study options
        </h2>
        <div className="border border-border">
          <div className="border-b border-border">
            <nav className="flex overflow-x-auto" aria-label="Tabs">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="group relative shrink-0 whitespace-nowrap px-4 py-4 text-sm font-medium outline-none md:px-6 md:text-base"
                >
                  <span
                    className={`transition-colors duration-200 ease-in-out ${
                      activeTab === tab
                        ? "text-foreground"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {tab}
                  </span>
                  <span
                    className={`absolute inset-x-0 bottom-0 h-0.5 bg-foreground transform transition-transform duration-300 ease-out ${
                      activeTab === tab
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              ))}
            </nav>
          </div>

          <div className="p-4 md:p-8">
            {activeTab === "Courses" && (
              <div>
                <h3 className="mb-6 text-2xl font-bold text-foreground">
                  Find an undergraduate course
                </h3>
                <div className="space-y-4">
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <input
                      type="text"
                      placeholder="Search by subject name"
                      className="w-full flex-grow rounded-[4px] border-input bg-white px-4 py-3 text-base text-foreground placeholder:text-muted-foreground focus:border-[#006B5C] focus:outline-none focus:ring-1 focus:ring-[#006B5C]"
                    />
                    <button className="shrink-0 rounded-[4px] bg-[#C4008C] px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-[#a10070]">
                      Search
                    </button>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2">
                    <RadioOption
                      name="course-level"
                      id="undergraduate"
                      label="Undergraduate"
                      defaultChecked
                    />
                    <RadioOption
                      name="course-level"
                      id="postgraduate"
                      label="Postgraduate"
                    />
                    <RadioOption
                      name="course-level"
                      id="english"
                      label="English"
                    />
                  </div>
                </div>
              </div>
            )}
            {activeTab === "Destinations" && (
              <div className="py-8 text-center text-muted-foreground">
                Destinations content will be displayed here.
              </div>
            )}
            {activeTab === "Colleges/Campuses" && (
              <div className="py-8 text-center text-muted-foreground">
                Colleges/Campuses content will be displayed here.
              </div>
            )}
            {activeTab === "Resources" && (
              <div className="py-8 text-center text-muted-foreground">
                Resources content will be displayed here.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchOptions;