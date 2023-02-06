import image from '../assets/banner.png';

const SLIDES = [
    {
        id: 1,
        background: "#f4efe9",
        url: image,
        text: "New shoes",
        button: {
            url: "/",
            text: "Приобрести"
        }
    },
    {
        id: 2,
        background: "#fff",
        url: "https://nike-off.ru/wp-content/uploads/2021/09/nike-air-force-1-low-07-what-the-NY-CT3610_100-3-scaled.jpg",
        text: "Nike Air Force 1",
        button: {
            url: "/",
            text: "Купить"
        }
    },
    {
        id: 3,
        background: "#f2f2f2",
        url: "https://rostov-na-donu.streetfoot.ru/wp-content/uploads/2021/01/adidas-niteball-serye-sinie-40-44.jpg",
        text: "Adidas Night Ball",
        button: {
            url: "/",
            text: "Купить"
        }
    }
];

export default SLIDES;