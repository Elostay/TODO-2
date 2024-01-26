"use client";

import Link from "next/link";
import { useState } from "react";

const Form = ({ type, task, setTask, submitting, handleSubmit }) => {
  const [activeBtn, setActiveBtn] = useState(0);

  const buttons = [
    {
      value: 1,
      color: "blue-bg_gradient",
    },
    {
      value: 2,
      color: "blue-yellow-bg_gradient",
    },
    {
      value: 3,
      color: "yellow-bg_gradient",
    },
    {
      value: 4,
      color: "yellow-red-bg_gradient",
    },
    {
      value: 5,
      color: "red-bg_gradient ",
    },
  ];

  const makeOptionClassName = (index, color) => {
    const optionClasses = [
      "w-10",
      "h-10",
      "text-white",
      "rounded-full",
      "flex",
      "items-center",
      "justify-center",
      `${color}`,
    ];
    if (index === activeBtn) {
      optionClasses.push("active");
    }
    return optionClasses.join(" ");
  };

  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Task</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share your task with other users
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span
            className="font-satoshi font-semibold
			 text-base text-gray-700"
          >
            Your Task
          </span>
          <textarea
            value={task.task}
            onChange={(e) => setTask({ ...task, task: e.target.value })}
            placeholder="Write your task here"
            required
            className="form_textarea"
          />
        </label>

        <div className="flex gap-3 mt-1 items-center font-satoshi font-semibold">
          Choose rating
          {buttons.map(({ color, value }, idx) => (
            <button
              key={idx}
              type="button"
              className={makeOptionClassName(idx, color)}
              value={value}
              onClick={(e) => {
                setActiveBtn(idx);
                return setTask({ ...task, rate: Number(e.target.value) });
              }}
            >
              {value}
            </button>
          ))}
        </div>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
