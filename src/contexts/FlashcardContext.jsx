import { createContext, useState, useContext, useEffect } from "react";
import { manifest } from "@/flashcards/manifest";
import { shuffle } from "lodash-es";

const FlashcardContext = createContext(null);

const STORAGE_KEY = "flashcardState";

export const FlashcardProvider = ({ children }) => {
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


    const loadAndShuffleSets = async (sets) => {
        const modules = await Promise.all(
            sets.map((name) =>
                manifest[name]()
            )
        );

        // Flatten all sets
        const allCards = shuffle(modules.flatMap((m) => m.default));

        setFlashcards(allCards);
        setCurrentIndex(0);
    };

    const numCards = flashcards.length;

    const goPrevious = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    const goNext = () => {
        setCurrentIndex((prev) => Math.min(prev + 1, flashcards.length - 1));
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
