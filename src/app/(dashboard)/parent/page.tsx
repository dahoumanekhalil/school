import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";

const ParentPage = () => {
  return (
    <div className="flex-1 p-4 flex gap-4 flex-col xl:flex-row">
      {/* left  */}
      <div className="w-full xl:w-[75%]">
        <div className="w-full bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">schedule (khalil)</h1>
          <BigCalendar />
        </div>
      </div>
      {/* right */}
      <div className="w-full xl:w-1/3">
        <div className="w-full xg:w-[25%] flex flex-col gap-8">
          {/* calendar  */}
          {/* <EventCalendar /> */}
          <Announcements />
        </div>
      </div>
    </div>
  );
};

export default ParentPage;
