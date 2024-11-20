import { useApi } from "@/services/api";
import { EventType } from "@/types/event";
import { Calendar, Users } from "lucide-react";
import { FC, useEffect, useState } from "react";

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

  const api = useApi();

  useEffect(() => {
    const getData = async () => {
      try {
        const resultOfAllEvents = await api.getAllEvents();

        if (resultOfAllEvents.data) {
          setEvents(resultOfAllEvents.data);
          setEventStats(calculateEventStats(resultOfAllEvents.data));
        }
      } catch (error) {}
    };
    getData();
  }, []);
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {/* Card 1 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Total Events
              </p>
              <h3 className="text-2xl font-bold dark:text-white">
                {eventStats.totalEvents}
              </h3>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
              <Calendar
                className="text-blue-600 dark:text-blue-400"
                size={24}
              />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Total Attendees
              </p>
              <h3 className="text-2xl font-bold dark:text-white">
                {eventStats.totalAttendees}
              </h3>
            </div>
            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
              <Users className="text-green-600 dark:text-green-400" size={24} />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Upcoming Events
              </p>
              <h3 className="text-2xl font-bold dark:text-white">
                {eventStats.upcomingEvents}
              </h3>
            </div>
            <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
              <Calendar
                className="text-purple-600 dark:text-purple-400"
                size={24}
              />
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                This Month
              </p>
              <h3 className="text-2xl font-bold dark:text-white">
                {eventStats.thisMonthEvents}
              </h3>
            </div>
            <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-lg">
              <Calendar
                className="text-yellow-600 dark:text-yellow-400"
                size={24}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold dark:text-white">
            Recent Events
          </h2>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-gray-200 dark:border-gray-700">
                  <th className="pb-4 font-semibold text-sm text-gray-600 dark:text-gray-300">
                    Event Name
                  </th>
                  <th className="pb-4 font-semibold text-sm text-gray-600 dark:text-gray-300">
                    Date
                  </th>
                  <th className="pb-4 font-semibold text-sm text-gray-600 dark:text-gray-300">
                    Attendees
                  </th>
                  <th className="pb-4 font-semibold text-sm text-gray-600 dark:text-gray-300">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {events.length > 0 &&
                  events.map((event: EventType) => (
                    <tr key={event._id} className="text-sm dark:text-gray-300">
                      <td className="py-4">{event.eventName}</td>
                      <td className="py-4">{formatDate(event.startDate)}</td>
                      <td className="py-4">{event.totalAttendees || 0}</td>
                      <td className="py-4">
                        {event.status === "active" ? (
                          <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full text-xs">
                            Active
                          </span>
                        ) : (
                          <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 rounded-full text-xs">
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
