import { EventType } from "@/types/event";
import { Calendar, Users } from "lucide-react";
import { FC, useState } from "react";

export const VerifiedDashBoard: FC = () => {
  const [events, setEvents] = useState([]);
  const [eventStats, setEventStats] = useState({
    totalEvents: 0,
    totalAttendees: 0,
    upcomingEvents: 0,
    thisMonthEvents: 0,
  });
  const calculateEventStats = (events: EventType[]) => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    return {
      totalEvents: events.length,
      totalAttendees: events.reduce(
        (sum, event) => sum + (event.totalAttendees || 0),
        0
      ),
      upcomingEvents: events.filter(
        (event) => new Date(event.startDate) > today
      ).length,
      thisMonthEvents: events.filter((event) => {
        const eventDate = new Date(event.startDate);
        return (
          eventDate.getMonth() === currentMonth &&
          eventDate.getFullYear() === currentYear
        );
      }).length,
    };
  };
  return (
    <div className="p-6">
      {/* Dashboard Stats */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Events</p>
              <h3 className="text-2xl font-bold">{eventStats.totalEvents}</h3>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Calendar className="text-blue-600" size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Attendees</p>
              <h3 className="text-2xl font-bold">
                {eventStats.totalAttendees}
              </h3>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <Users className="text-green-600" size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Upcoming Events</p>
              <h3 className="text-2xl font-bold">
                {eventStats.upcomingEvents}
              </h3>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Calendar className="text-purple-600" size={24} />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">This Month</p>
              <h3 className="text-2xl font-bold">
                {eventStats.thisMonthEvents}
              </h3>
            </div>
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Calendar className="text-yellow-600" size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Events */}
      <div className="bg-white rounded-lg shadow-2xl">
        <div className="p-6 border-b">
          <h2 className="text-lg font-semibold">Recent Events</h2>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b">
                  <th className="pb-4 font-semibold text-sm text-gray-600">
                    Event Name
                  </th>
                  <th className="pb-4 font-semibold text-sm text-gray-600">
                    Date
                  </th>
                  <th className="pb-4 font-semibold text-sm text-gray-600">
                    Attendees
                  </th>
                  <th className="pb-4 font-semibold text-sm text-gray-600">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {events.length > 0 &&
                  events.map((event: EventType) => (
                    <tr key={event._id} className="text-sm">
                      <td className="py-4">{event.eventName}</td>
                      <td className="py-4">{formatDate(event.startDate)}</td>

                      <td className="py-4">{event.totalAttendees || 0}</td>
                      <td className="py-4">
                        {event.status === "active" ? (
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                            Active
                          </span>
                        ) : (
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                            Closed
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
