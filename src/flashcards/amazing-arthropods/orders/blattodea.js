import { getImageResolver } from "@/util/resolveImage";

const resolveImage = getImageResolver(import.meta.url);

const array = [
    {
        question: "Which insect order contains cockroaches and termites?",
        answer: "Blattodea",
    },
    {
        question: "What does blattodea mean?",
        answer: "Shuns/avoids light",
    },
    {
        question: "What type of metamorphosis does blattodea undergo?",
        answer: "Gradual",
    },
    {
        question: "Which order is this insect in?",
        answer: "Blattodea (termite)",
        image: new URL("@/assets/images/termite.jpg", import.meta.url).href,
    },
    {
        question: "Which order is this insect in?",
        answer: "Blattodea (winged termite)",
        image: new URL("@/assets/images/termite-winged.jpg", import.meta.url).href,
    },
    {
        question: "Which order is this insect in?",
        answer: "Blattodea (American cockroach)",
        image: new URL("@/assets/images/american-cockroach-2.jpg", import.meta.url).href,
    },
    {
        question: "Do you usually find blattodea in dark or light places? (hint: think of the name meaning)",
        answer: "Dark",
    },
    {
        question: "What type of mouthparts does blattodea have?",
        answer: "Chewing",
        image: new URL("@/assets/images/termite-mouthparts.jpg", import.meta.url).href,
    },
    {
        question: "What is a cockroach or termite egg case called?",
        answer: "Ootheca",
        image: new URL("@/assets/images/cockroach-ootheca.jpg", import.meta.url).href,
    },
];

export default array;