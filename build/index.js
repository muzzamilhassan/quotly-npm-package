import { motivationalQuotes } from "./quotes.js";
export const getQuotes = () => {
    return motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
};
