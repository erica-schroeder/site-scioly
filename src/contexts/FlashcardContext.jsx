import { shuffle } from "lodash-es";
import { createContext, useContext, useEffect, useState } from "react";
import { useEventContext } from "./EventContext";

const FlashcardContext = createContext(null);

const STORAGE_KEY = "flashcardState";

export const FlashcardProvider = ({ children }) => {
    const { events } = useEventContext();

    const [flashcards, setFlashcards] = useState(() => {
        try {
            const stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
            return stored?.flashcards || [];
        } catch (e) {
            console.warn("Failed to parse flashcard state from storage", e);
            return [];
        }
    });

    const [currentIndex, setCurrentIndex] = useState(() => {
        try {
            const stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
            return stored?.currentIndex ?? 0;
        } catch (e) {
            console.warn("Failed to parse flashcard state from storage", e);
            return 0;
        }
    });


    // Update sessionStorage when state changes
    useEffect(() => {
        const stateToStore = {
            flashcards,
            currentIndex,
        };
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stateToStore));
    }, [flashcards, currentIndex]);


    // Helper to find a set in the tree by ID
    function findSetInTree(setId) {
        let found = null;

        function traverse(node) {
            if (found) return;
            const match = node.sets.find((s) => s.id === setId);
            if (match) {
                found = match;
                return;
            }
            Object.values(node.groups || {}).forEach(traverse);
        }

        Object.values(events || {}).forEach(traverse);
        return found;
    }

    const loadAndShuffleSets = async (setIds) => {
        const setsToLoad = setIds
            .map((id) => findSetInTree(id))
            .filter(Boolean); // remove any missing sets

        const modules = await Promise.all(
            setsToLoad.map((s) => s.load())
        );

        // Flatten all sets
        const allCards = shuffle(modules.flatMap((m) => m.cards));

        console.log("allCards");

        setFlashcards(allCards);
        setCurrentIndex(0);
    };

    const numCards = flashcards.length;

    const goPrevious = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const goNext = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, flashcards.length));
    };

    const currentCard = flashcards[currentIndex] || null;

    return (
        <FlashcardContext.Provider
            value={{
                loadAndShuffleSets,
                numCards,
                currentIndex,
                currentCard,
                goPrevious,
                goNext
            }} >
            {children}
        </FlashcardContext.Provider>
    );
};

export const useFlashcardContext = () => useContext(FlashcardContext);
