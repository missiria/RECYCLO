import img2 from '../../assets/images/2.png'
import img3 from '../../assets/images/3.png'
import img4 from '../../assets/images/4.png'
import i18n from "i18next";


export const slides = [
    {
        id: 1,
        title : i18n.t("onboardingScreenOne.title"),
        description: i18n.t("onboardingScreenOne.subtitle"),
        image: img2,
    },
    {
        id: 2,
        title : i18n.t("onboardingScreenTwo.title"),
        description: i18n.t("onboardingScreenTwo.subtitle"),
        image: img3,
    },
    {
        id: 3,
        title :  i18n.t("onboardingScreenThree.title"),
        description: i18n.t("onboardingScreenThree.subtitle"),
        image: img4,
    },
]