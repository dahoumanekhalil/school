"use client";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// temporary
// const events = [
//   {
//     id: 1,
//     title: "Lorem, ipsum dolor.",
//     time: "12:00 PM - 2:00 PM",
//     description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
//   },
//   {
//     id: 2,
//     title: "Lorem, ipsum dolor.",
//     time: "12:00 PM - 2:00 PM",
//     description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
//   },
//   {
//     id: 3,
//     title: "Lorem, ipsum dolor.",
//     time: "12:00 PM - 2:00 PM",
//     description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
//   },
// ];

const EventCalendar = () => {
  return <div>eventCalendar</div>;
};

export default EventCalendar;
