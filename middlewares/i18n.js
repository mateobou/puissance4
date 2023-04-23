import i18next from "i18next";
import traductionFr from "../traductions/home/fr.json" assert { type: "json" };
import traductionEn from "../traductions/home/en.json" assert { type: "json" }; 



i18next.init({
    lng: "fr",
    fallbackLng: "fr",
    debug: true,
    resources: {
        fr : {
            translation:  traductionFr
        },
        en: {
            translation: traductionEn
        }
    },
});


export const i18n = (req, res, next) => {
    const locale =  req.headers["accept-language"] || i18next.options.fallbackLng;
    i18next.changeLanguage(locale);

    res.locals.t = i18next.t.bind(i18next);
    next();
}



