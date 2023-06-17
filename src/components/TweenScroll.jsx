import { useEffect } from "react"
import { useTranslation } from 'react-i18next';
import i18n, { t } from 'i18next'
import { useState } from "react";



const changeLanguage = (language) => {
    

    return language
};


i18n.init({
    interpolation: { escapeValue: false }, // HTML ni to'liq render qilish uchun
    lng: "uz", // Boshlang'ich til
    resources: {
        uz: {
            translation: require('../languages/uz.json')
        },
        ru: {
            translation: require('../languages/ru.json')
        }

    }
});





export  {changeLanguage}