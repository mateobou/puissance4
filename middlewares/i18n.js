import i18next from "i18next";



const languages = ["en", "fr"];
const directory = `${__dirname}/../locales`;
const defaultLanguage = "fr";


export const i18n = (req, res, next) => {
    const locale = req.headers["accept-language"];
    i18next.changeLanguage(locale);
    next();
}
