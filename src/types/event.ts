export interface EventType {
  _id: string;
  eventName: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  timezone: string;
  venueName: string;
  venueAddress: string;
  themephoto: string;
  createdBy: string;
  status: "closed" | "active" | "draft";
  shortUrl: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  totalAttendees: number;
}
