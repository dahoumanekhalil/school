"use client";
import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// temporary
const events = [
  {
    id: 1,
    title: "Lorem, ipsum dolor.",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    title: "Lorem, ipsum dolor.",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    title: "Lorem, ipsum dolor.",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="icon" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-beproGreen even:border-t-beproPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between ">
              <h1 className="font-semibold text-center">{event.title}</h1>
              <span className="text-gray-500 text-xs ">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
