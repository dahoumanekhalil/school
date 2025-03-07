import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import Usercard from "@/components/Usercard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* left */}
      <div className="w-full lg:w-[75%] flex flex-col gap-8">
        {/* user cards  */}
        <div className="flex gap-4 justify-between flex-wrap">
          <Usercard type="student" />
          <Usercard type="teacher" />
          <Usercard type="parent" />
          <Usercard type="staff" />
        </div>
        {/* middle cahart  */}
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          <div className="w-full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>
        {/* bottem chart */}
        <div className="w-full h-[500px]">
          <FinanceChart />
        </div>
      </div>

      {/* right */}
      <div className="w-full lg:w-[25%] flex flex-col gap-8">
        {/* calendar  */}
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
