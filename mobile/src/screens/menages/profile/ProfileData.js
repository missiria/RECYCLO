import i18n from "i18next"
export const ProfileData = [
    {
        id: 1,
        title: i18n.t("profile.edit_profile"),
        icon : 'user',
        goTo : 'EditProfile',
    },
    {
        id: 2,
        title: i18n.t("profile.language"),
        icon : 'setting',
        goTo : 'Langs',
    },
    {
        id: 3,
        title: i18n.t("profile.payment_method"),
        icon : 'wallet',
        goTo : 'MenageModePayment', //pending create route
    },
    {
        id: 4,
        title: i18n.t("profile.feadback"),
        icon : 'wallet',
        goTo : 'Feedback', 
    },
    {
        id: 5,
        title: i18n.t("profile.q&a"),
        icon : 'message1',
        goTo : 'FAQs',
    },
    {
        id: 6,
        title: i18n.t("profile.suport"),
        icon : 'exception1',
        goTo : 'CollectSupport',
    },
    {
        id: 7,
        title: i18n.t("profile.logout"),
        icon : 'logout',
        goTo : 'Logout',
    },
]