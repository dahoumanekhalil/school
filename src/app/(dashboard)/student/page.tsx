import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import EventCalendar from "@/components/EventCalendar";

const StudentPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col xl:flex-row">
      {/* left  */}
      <div className="w-full xl:w-[75%]">
        <div className="w-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">schedule (4A)</h1>
          <BigCalendar />
        </div>
      </div>
      {/* right */}
      <div className="w-full xl:w-1/3">
        <div className="w-full xg:w-[25%] flex flex-col gap-8">
          {/* calendar  */}
          <EventCalendar />
          <Announcements />
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
