import { useMemo } from "react";
import {
  Calendar as ReactBigCalendar,
  momentLocalizer,
} from "react-big-calendar";
import CustomToolbar from "./CalendarCustomToolbar";
import moment from "moment";

import "./big-calendar.scss"; // do not swap places!
import "react-big-calendar/lib/css/react-big-calendar.css"; // do not swap places!

const Calendar = ({ handleEventClick, lessons }) => {
  const localizer = useMemo(() => momentLocalizer(moment), []);

  // Customize how day numbers are displayed
  const dateFormat = useMemo(
    () => ({
      dateFormat: "D",
    }),
    []
  );

  return (
    <ReactBigCalendar
      localizer={localizer} // Set up the calendar localization
      components={{
        toolbar: CustomToolbar, // Use the custom toolbar component
      }}
      views={["month"]} // Display the calendar in month view
      events={lessons} // Use the user's lessons as calendar events
      eventPropGetter={(event) => ({
        className: event.className || "",
      })}
      startAccessor="lessonDate" // Start date property for events
      endAccessor="endTime" // End date property for events
      titleAccessor={"dayOfMonth"} // Title property for events
      onSelectEvent={handleEventClick} // Click event handler for events
      formats={dateFormat}
    />
  );
};
export default Calendar;
