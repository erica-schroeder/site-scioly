import { manifest } from "@/flashcards/manifest";
import { createContext, useContext, useMemo, useState } from "react";

const EventContext = createContext(null);

export const EventProvider = ({ children }) => {
    // Convert manifest into useful structures
    const { events, eventsByLevel } = useMemo(() => {
        const events = Object.entries(manifest).map(([eventId, eventData]) => ({
            key: eventId,
            displayName: eventData.displayName,
            level: eventData.level,
            groups: Object.entries(eventData.groups).map(([groupId, groupData]) => ({
                key: groupId,
                displayName: groupData.displayName,
                sets: Object.entries(groupData.sets).map(([setId, setData]) => ({
                    key: setId,
                    displayName: setData.displayName
                }))
            }))
        }));

        // Build level → events map
        const eventsByLevel = events.reduce((acc, event) => {
            if (!acc[event.level]) acc[event.level] = [];
            acc[event.level].push(event);
            return acc;
        }, {});

        return { events, eventsByLevel };
    }, []);


    // the currently selected event (default to first for convenience)
    const [selectedEventKey, setSelectedEventKey] = useState(events[0]?.key ?? null);
    const selectedEvent = selectedEventKey ? events.find(e => e.key === selectedEventKey) : null;

    return (
        <EventContext.Provider
            value={{
                setSelectedEventKey,
                selectedEvent,
                eventsByLevel,
            }}
        >
            {children}
        </EventContext.Provider>
    );
};

export const useEventContext = () => useContext(EventContext);
