
interface FooterLink {
    title: string;
    url: string;
  }
  
  interface FooterSection {
    title: string;
    links: FooterLink[];
  }
  
  export const FOOTER_SECTIONS: FooterSection[] = [
    {
      title: "",
      links: [
        { title: "О движении", url: "/about" },
        { title: "Направления деятельности", url: "/news" },
        { title: "Проекты", url: "/contacts" },
        { title: "Мероприятия", url: "/events" },
        { title: "Региональные отделения", url: "" },
      ],
    },
    {
      title: "",
      links: [
        { title: "Новости", url: "" },
        { title: "Бренд материалы", url: "" },
        { title: "Медиа", url: "" },
       
      ],
    },
    {
      title: "",
      links: [
        { title: "Наши соцсети:", url: "" },
        { title: "Instagram", url: "https://instagram.com/your_club" },
        { title: "Facebook", url: "https://facebook.com/your_club" },
        { title: "YouTube", url: "https://youtube.com/your_club" },
      ],
    },
    {
      title: "",
      links: [
        { title: "Контакты:", url: "#" }, 
        { title: "WhatsApp", url: "#" }, 
        { title: "Telegram", url: "tel:+996XXXXXXXXX" },
      ],
    },
    {
      title: "",
      links: [
        { title: "Электронная почта:", url: "" },
        { title: "gmail.com", url: "#" },
      ],
    },
    {
      title: "",
      links: [
        { title: "Адрес:", url: "#" }, 
        { title: "Улица, Дом", url: "" },
      ],
    },
  ];