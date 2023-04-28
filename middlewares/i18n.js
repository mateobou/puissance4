import { assert } from "console";
import i18next from "i18next";
// import traductionFr from url === '/' ? "../traductions/home/fr.json" : "../traductions" + url + "/fr.json" assert { type: "json" };
// import traductionEn from url === '/' ? "../traductions/home/en.json" : "../traductions" + url + "/en.json" assert { type: "json" }; 


import traductionHomeFr from "../traductions/home/fr.json" assert { type: "json" };
import traductionHomeEn from "../traductions/home/en.json" assert { type: "json" };

import traductionExempleFR from "../traductions/exemple/fr.json" assert { type: "json" };
import traductionExempleEn from "../traductions/exemple/en.json" assert { type: "json" };





export const i18n = (req, res, next) => {

    const url = req.path;


    let routeFR, routeEN;
    if (url === '/') {
        routeFR = traductionHomeFr;
        routeEN = traductionHomeEn;
    } else if (url === '/exemple') {
        routeFR = traductionExempleFR;
        routeEN = traductionExempleEn;
    } else {
        console.error('Désolé, la page demandée n\'existe pas en fichier de traduction');
        routeFR = {};
        routeEN = {};
    }


    i18next.init({
        lng: "fr",
        fallbackLng: i18next.options.fallbackLng || "fr",

        debug: true,
        resources: {
            fr : {
                translation: routeFR
                }
               // translation:  import (url === '/' ? "../traductions/home/fr.json" : "../traductions" + url + "/fr.json")
            },
            en: {
                translation: routeEN
               // translation: JSON.stringify(import (url === '/' ? "../traductions/home/en.json" : "../traductions" + url + "/en.json"))
            }
    });
    


    const locale =  req.headers["accept-language"] || i18next.options.fallbackLng;
    i18next.changeLanguage(locale);

    res.locals.t = i18next.t.bind(i18next);
    next();
}


