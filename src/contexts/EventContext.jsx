import { buildAllEvents } from "@/flashcards";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const EventContext = createContext(null);

function mapEventsByLevel(eventTree) {
  const levelMap = {};

  if(!eventTree) {
    return levelMap;
  }

  for (const [eventKey, eventNode] of Object.entries(eventTree)) {
    const level = eventNode.meta?.level || "unknown";

    if (!levelMap[level]) levelMap[level] = [];
    levelMap[level].push({
      key: eventKey,
      displayName: eventNode.meta?.displayName || eventKey,
      meta: eventNode.meta,
    });
  }

  return levelMap;
}

export const EventProvider = ({ children }) => {
    const [eventTree, setEventTree] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            buildAllEvents()
                .then(setEventTree)
                .finally(() => setLoading(false));
        })();
    }, []);

    const eventsByLevel = mapEventsByLevel(eventTree);
    console.log(eventsByLevel);

    const value = useMemo(() => ({
        eventsByLevel,
        events: eventTree,
    }), [eventsByLevel, eventsByLevel])

    return (
        <EventContext.Provider
            value={value}
        >
            {children}
        </EventContext.Provider>
    );
};

export const useEventContext = () => useContext(EventContext);
