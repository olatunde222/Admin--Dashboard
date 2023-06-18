import React from "react";
import "./Calendar.css";
// FROM FullCalendar importing calendar plugins

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

// imported from store folder
import useCalendar from "../../store/Calendar";
import { createEventId } from "../../data";

const Calendar = () => {
  const { currentEvents, setcurrentEvents } = useCalendar();

  const handleEvents = async (events) => {
    await Promise.resolve(setcurrentEvents(events));
  };

  //Handle Event function
  const handleDateSelect = (selectInfo) => {
    let title = prompt("please enter a titke for the event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.start,
        end: selectInfo.end,
        allDay: selectInfo.allDay,
      });
    }
  };

  // Event Click function
  const handleEventClick = (clickInfo) => {
    if (confirm("Are you sure you want to delete this event?")) {
      clickInfo.event.remove();
    }
  };
  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        headerToolbar={{
          left: "prev,next,today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        allDaySlot={false}
        initialView="timeGridWeek"
        slotDuration={"01:00:00"}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        nowIndicator={true}
        initialEvents={[currentEvents]}
        eventsSet={handleEvents}
        select={handleDateSelect}
        eventClick={handleEventClick}
      />
    </div>
  );
};

export default Calendar;
