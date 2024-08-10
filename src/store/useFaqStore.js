import { create } from "zustand";

const useFaqStore = create((set) => ({
  faqs: [
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
      isOpen: false,
    },
    {
      id: 2,
      question: "What are components?",
      answer: "Components are reusable UI elements in React.",
      isOpen: false,
    },
    {
      id: 3,
      question: "What is JSX?",
      answer: "JSX is a syntax extension for JavaScript used in React.",
      isOpen: false,
    },
    {
      id: 4,
      question: "What is state in React?",
      answer:
        "State is a built-in object that stores data or information about the component.",
      isOpen: false,
    },
    {
      id: 5,
      question: "What are props in React?",
      answer:
        "Props are short for properties and are used to pass data between components.",
      isOpen: false,
    },
  ],

  toggleFaq: (id) =>
    set((state) => ({
      faqs: state.faqs.map((faq) =>
        faq.id === id
          ? { ...faq, isOpen: !faq.isOpen }
          : { ...faq, isOpen: false }
      ),
    })),
}));

export default useFaqStore;
