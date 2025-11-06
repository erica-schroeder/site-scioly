import { useEventContext } from "@/contexts/EventContext";

export const useNavItems = () => {
    const { eventsByLevel } = useEventContext();

    const navItems = Object.entries(eventsByLevel).map(([level, events]) => {
        // Capitalize level for the label
        const label = level.charAt(0).toUpperCase() + level.slice(1);

        // If there are events, create a submenu array
        const submenu = events.map((event) => ({
            label: event.displayName,
            to: `/events/${event.key}`,
        }));

        return submenu.length > 0
            ? { label, submenu }
            : { label }; // just a label if no events
    });

    return navItems;
};
