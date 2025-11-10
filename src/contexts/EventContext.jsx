import { useEvents } from "@/api/hooks/useEvents";
import { createContext, useContext, useEffect, useState } from "react";

const EventContext = createContext(null);

export const EventProvider = ({ children }) => {
    const [selectedEventKey, setSelectedEventKey] = useState(null);
    const { data: levels } = useEvents();

    // Load saved selection from localStorage on mount
    useEffect(() => {
        const savedKey = localStorage.getItem("selectedEventKey");
        if (savedKey) setSelectedEventKey(savedKey);
    }, []);

    // Persist selection to localStorage whenever it changes
    useEffect(() => {
        if (selectedEventKey) {
            localStorage.setItem("selectedEventKey", selectedEventKey);
        }
    }, [selectedEventKey]);

    const navItems = levels?.map(level => ({
        label: level.title,
        submenu: level.events.map(event => ({
            label: event.title,
            to: `/events/${event.key}`
        }))
    })) ?? null 

    const getEventByKey = (key) => {
        if (!key) return null
        for (const level of levels) {
            for (const event of level.events ?? []) {
                if (event.key === key) {
                    return event;
                }
            }
        }
        return null
    };

    return (
        <EventContext.Provider
            value={{
                navItems,
                getEventByKey,
                setSelectedEventKey,
                selectedEventKey,
            }}
        >
            {children}
        </EventContext.Provider>
    );
};

export const useEventContext = () => useContext(EventContext);
