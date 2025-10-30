import { useEventContext } from "@/contexts/EventContext";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export const NavigationList = ({ onNavigate }) => {
    const { eventsByLevel } = useEventContext();

    const navigate = useNavigate();
    const [openLevels, setOpenLevels] = useState({});

    const handleToggleLevel = (level) => {
        setOpenLevels((prev) => ({ ...prev, [level]: !prev[level] }));
    };

    return (
        <List>
            {Object.entries(eventsByLevel).map(([level, events]) => (
                <React.Fragment key={level}>
                    <ListItemButton onClick={() => handleToggleLevel(level)}>
                        <ListItemText primary={level.charAt(0).toUpperCase() + level.slice(1)} />
                        {openLevels[level] ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                    <Collapse in={openLevels[level]} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {events.map((event) => (
                                <ListItemButton
                                    key={event.key}
                                    sx={{ pl: 4 }}
                                    onClick={() => {
                                        navigate(`/events/${event.key}`);
                                        onNavigate();
                                    }}
                                >
                                    <ListItemText primary={event.displayName} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Collapse>
                </React.Fragment>
            ))}
        </List>
    );
}