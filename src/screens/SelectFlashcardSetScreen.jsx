import { useFlashcardContext } from '@/contexts/FlashcardContext';
import { Button, Checkbox, Divider, Grid, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from '@mui/material';
import { useState } from "react";
import { Link } from "react-router";

const groups = [
    {
        name: "orders",
        label: "Insect Orders",
        folder: "orders",
        sets: [
            { label: "Blattodea", name: "blattodea" },
            { label: "Coleoptera", name: "coleoptera" },
            { label: "Diptera", name: "diptera" },
            { label: "Ephemeroptera", name: "ephemeroptera" },
            { label: "Hemiptera", name: "hemiptera" },
            { label: "Hymenoptera", name: "hymenoptera" },
            { label: "Lepidoptera", name: "lepidoptera" },
            { label: "Mantodea", name: "mantodea" },
            { label: "Megaloptera", name: "megaloptera" },
            { label: "Neuroptera", name: "neuroptera" },
            { label: "Odonata", name: "odonata" },
            { label: "Orthoptera", name: "orthoptera" },
            //{ label: "Trichoptera", name: "trichoptera" },
        ]
    },
    {
        name: "classes",
        label: "Arthropod Classes",
        folder: "classes",
        sets: [
            { label: "Arachnida", name: "arachnida" },
            { label: "Branchiopoda", name: "branchiopoda" },
            { label: "Chilopoda", name: "chilopoda" },
            { label: "Diplopoda", name: "diplopoda" },
            { label: "Insecta", name: "insecta" },
            { label: "Malacostraca", name: "malacostraca" },
        ]
    },
    {
        name: "general",
        label: "General",
        folder: "general",
        sets: [
            { label: "Metamorphosis", name: "metamorphosis" },
            { label: "Defense Mechanisms", name: "defense-mechanisms" },
        ]
    },
    {
        name: "species",
        label: "Species",
        folder: "2025-species",
        sets: [
            { label: "Identification", name: "identification" },
            //{ label: "Conservation Status", name: "conservation-status" },
            { label: "Characteristics", name: "general-questions" },
        ]
    }
];

const findFolder = (name) => {
    for (const group of groups) {
        for (const set of group.sets) {
            if (set.name === name) {
                return group.folder;
            }
        }
    }
    return null; // Return null if the value is not found
}

const getFullName = (name) => {
    return name;
    //return `${findFolder(name)}/${name}`;
}

const SelectFlashcardSetScreen = () => {
    const [selectedSets, setSelectedSets] = useState([]);
    const { loadAndShuffleSets } = useFlashcardContext();

    const onSetChanged = (event) => {
        const checked = event.target.checked;
        const name = event.target.value;

        const fullName = getFullName(name);

        const newSets = checked
            ? [...selectedSets, fullName]
            : selectedSets.filter(item => item !== fullName);

        setSelectedSets(newSets);
    };

    const onSelectAllGroupChanged = (event) => {
        const checked = event.target.checked;
        const group = groups.find(group => group.name === event.target.value);

        const folderName = group.folder;
        const sets = group.sets.map(set => set.name);
        //const sets = group.sets.map(set => `${folderName}/${set.name}`);

        const newSets = checked
            ? selectedSets.concat(sets.filter(name => !selectedSets.includes(name)))
            : selectedSets.filter(name => !sets.includes(name));

        setSelectedSets(newSets);
    };


    return (
        <Stack display="flex" alignItems="center" spacing={5} mt={10} mb={10}>
            <Typography variant="h4" fontSize={36}>
                Select Flashcard Sets
            </Typography>
            <Grid container spacing={5} minWidth="300px" flexGrow={1} maxWidth={"sm"}>

                {groups.map(group => {
                    return (
                        <Grid key={group.name} size={6} >
                            <Stack display="flex" alignItems={"center"}>

                                <Typography fontSize={20} variant="h5" mb={1}>
                                    {group.label}
                                </Typography>

                                <List>
                                    <ListItem disablePadding>
                                        <Checkbox
                                            value={group.name}
                                            onChange={onSelectAllGroupChanged}
                                        />
                                        <ListItemText>Select All</ListItemText>
                                    </ListItem>

                                    <Divider sx={{ m: 1, maxWidth: "200px" }} />

                                    {
                                        group.sets.map(set => (
                                            <ListItem disablePadding key={set.name}>
                                                <Checkbox
                                                    value={set.name}
                                                    checked={selectedSets.includes(getFullName(set.name))}
                                                    onChange={onSetChanged}
                                                />
                                                <ListItemText>{set.label}</ListItemText>
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            </Stack>
                        </Grid>
                    );
                })}


            </Grid>
            <Button
                variant='contained'
                disableElevation
                disabled={selectedSets.length < 1}
                component={Link}
                onClick={() => loadAndShuffleSets(selectedSets)}
                to={`flashcards`}
            >
                Start!
            </Button>
        </Stack>
    );
};

export default SelectFlashcardSetScreen;
