import {useState, useEffect} from 'react'
import i18n  from 'i18next';

export const isRtl = () => {
    const [rtl, setRtl] = useState(false);
    useEffect(() => {
        const isRtl = i18n.language === 'ar' ? true : false;
        setRtl(isRtl);
    })
    return rtl;
}