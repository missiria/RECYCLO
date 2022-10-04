import img2 from '../../assets/images/2.png'
import img3 from '../../assets/images/3.png'
import img4 from '../../assets/images/4.png'
import i18n from "i18next";


export const slides = [
    {
        id: 1,
        titleFr : "Protégez\nvotre planète!",
        titleAr : "إعادة التدوير",
        descriptionFr:"Protéger la nature est une priorité!",
        descriptionAr : "أكسب نقاطًا ونقودًا مقابل \n كل المواد القابلة لإعادة التدوير!",
        image: require('../../assets/images/2.png'),
    },
    {
        id: 2,
        titleFr : 'Zéro déchets!',
        titleAr : "تدوير البلاستيك",
        descriptionFr:`La collecte de vos déchets ${'\n'} est notre métier!`,
        descriptionAr : "خدمتنا \n جمع النفايات الخاصة بك!",
        image: require('../../assets/images/3.png'),
    },
    {
        id: 3,
        titleFr : `Protéger${'\n'}l'environnement!`,
        titleAr : "حماية البيئة",
        descriptionFr:`Réduisez votre impact sur ${'\n'} l'environnement!`,
        descriptionAr : "شاركنا في حماية كوكبنا وبيئتنا \n حماية الكوكب تبدأ بك!",
        image: require('../../assets/images/4.png'),
    },
]