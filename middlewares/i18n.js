import { assert } from "console";
import i18next from "i18next";
// import traductionFr from url === '/' ? "../traductions/home/fr.json" : "../traductions" + url + "/fr.json" assert { type: "json" };
// import traductionEn from url === '/' ? "../traductions/home/en.json" : "../traductions" + url + "/en.json" assert { type: "json" }; 

const url = req.path;
import traductionFr from "../traductions/home/fr.json" assert { type: "json" };
import traductionRestFr from "../traductions/${url}/fr.json" assert { type: "json" };

import traductionEn from "../traductions/home/en.json" assert { type: "json" };






export const i18n = (req, res, next) => {

    const url = req.path;


    



    i18next.init({
        lng: "fr",
        fallbackLng: i18next.options.fallbackLng || "fr",

        debug: true,
        resources: {
            fr : {
                translation:  url === '/' ? traductionFr : traductionRestFr
               // translation:  import (url === '/' ? "../traductions/home/fr.json" : "../traductions" + url + "/fr.json")

            },
            en: {
                translation: traductionEn
               // translation: JSON.stringify(import (url === '/' ? "../traductions/home/en.json" : "../traductions" + url + "/en.json"))
            }
        },
    });
    





    const locale =  req.headers["accept-language"] || i18next.options.fallbackLng;
    i18next.changeLanguage(locale);


  


    res.locals.t = i18next.t.bind(i18next);
    next();
}



