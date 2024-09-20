// data.js
// import snap from "../../Images/new-app/snap.png";
const appData = [
  {
    name: "Zomato",
    image: require("../../Images/new-app/zometo.png"),
    rating: 3.9,
  },
  {
    name: "Snapchat",
    image: require("../../Images/new-app/snap.png"),
    rating: 4.4,
  },
  {
    name: "Phone Pe",
    image: require("../../Images/new-app/phonepay.png"),
    rating: 4.4,
  },
  {
    name: "Whatsapp Messenger",
    image: require("../../Images/new-app/whatsapp.png"),
    rating: 4.1,
  },
  {
    name: "Amazon Prime Video",
    image: require("../../Images/new-app/amazone.png"),
    rating: 3.9,
  },
  {
    name: "McDonalds",
    image: require("../../Images/new-app/mcdonalt.png"),
    rating: 3.9,
  },
  {
    name: "Netflix",
    image: require("../../Images/new-app/netflix.png"),
    rating: 3.9,
  },
  {
    name: "Indigo Flight Booking App",
    image: require("../../Images/new-app/indigo.png"),
    rating: 3.9,
  },
  {
    name: "Adobe",
    image: require("../../Images/new-app/adobe.png"),
    rating: 3.9,
  },
  {
    name: "GitHub",
    image: require("../../Images/new-app/github.png"),
    rating: 3.9,
  },

  {
    name: "Skype",
    image: require("../../Images/new-app/skype.png"),
    rating: 3.9,
  },
  // Add more app objects here
];

const gamesdata = [
  {
    name: "Roblox",
    image: require("../../Images/popular-games/Rectangle1.png"),
    rating: 4.4,
  },
  {
    name: "Candy Crush Saga",
    image: require("../../Images/popular-games/Rectangle2.png"),
    rating: 4.4,
  },
  {
    name: "Fortnite",
    image: require("../../Images/popular-games/Rectangle3.png"),
    rating: 4.1,
  },
  {
    name: "Pubg Mobile",
    image: require("../../Images/popular-games/Rectangle4.png"),
    rating: 3.9,
  },
  {
    name: "Minecraft",
    image: require("../../Images/popular-games/Rectangle5.png"),
    rating: 3.9,
  },
  {
    name: "Clash of Clans",
    image: require("../../Images/popular-games/Rectangle6.png"),
    rating: 3.9,
  },
  {
    name: "Among us",
    image: require("../../Images/popular-games/Rectangle7.png"),
    rating: 3.9,
  },
  {
    name: "Call Of Duty: Infinite Warefare",
    image: require("../../Images/popular-games/Rectangle8.png"),
    rating: 3.9,
  },
  {
    name: "Subway Surfers",
    image: require("../../Images/popular-games/Rectangle9.png"),
    rating: 3.9,
  },
  // Add more app objects here
];

const trendingappsdata = [
  {
    imgSrc: require("../../Images/trending-apps/image1.png"),
    title: "Discord",
    rating: "4.5 ★",
    category: "Communication",
    cost: "Free",
  },
  {
    imgSrc: require("../../Images/trending-apps/image2.png"),
    title: "Venmo",
    rating: "4.5 ★",
    category: "Finance",
    cost: "Free",
  },
  {
    imgSrc: require("../../Images/trending-apps/image3.png"),
    title: "Triller",
    rating: "4.3 ★",
    category: "Social Video Platform",
    cost: "Free",
  },
  {
    imgSrc: require("../../Images/trending-apps/image4.png"),
    title: "Notion",
    rating: "4.7 ★",
    category: "Productivity",
    cost: "Free",
  },
  {
    imgSrc: require("../../Images/trending-apps/image1.png"),
    title: "Notion",
    rating: "4.7 ★",
    category: "Productivity",
    cost: "Free",
  },
  {
    imgSrc: require("../../Images/trending-apps/image2.png"),
    title: "Notion",
    rating: "4.7 ★",
    category: "Productivity",
    cost: "Free",
  },
  {
    imgSrc: require("../../Images/trending-apps/image3.png"),
    title: "Notion",
    rating: "4.7 ★",
    category: "Productivity",
    cost: "Free",
  },
  {
    imgSrc: require("../../Images/trending-apps/image4.png"),
    title: "Notion",
    rating: "4.7 ★",
    category: "Productivity",
    cost: "Free",
  },
];

const musicapps = [
  {
    name: "spotify",
    image: require("../../Images/music-apps/image1.png"),
    rating: 4.4,
  },
  {
    name: "Amazon Music",
    image: require("../../Images/music-apps/image2.png"),
    rating: 4.4,
  },
  {
    name: "Soundcloud",
    image: require("../../Images/music-apps/image3.png"),
    rating: 4.1,
  },
  {
    name: "Pandora",
    image: require("../../Images/music-apps/image4.png"),
    rating: 3.9,
  },
  {
    name: "Jio Saavan",
    image: require("../../Images/music-apps/image5.png"),
    rating: 3.9,
  },
  {
    name: "iHeartRadio",
    image: require("../../Images/music-apps/image6.png"),
    rating: 3.9,
  },
  {
    name: "JangoRadio",
    image: require("../../Images/music-apps/image7.png"),
    rating: 3.9,
  },
  {
    name: "MixCloud",
    image: require("../../Images/music-apps/image8.png"),
    rating: 3.9,
  },
  {
    name: "Shazam",
    image: require("../../Images/music-apps/image9.png"),
    rating: 3.9,
  },
  {
    name: "Musixmatch",
    image: require("../../Images/music-apps/image10.png"),
    rating: 3.9,
  },
  // {
  //   name: "Gaana",
  //   image: require("../../Images/music-apps/image11.png"),
  //   rating: 3.9,
  // },
  // Add more app objects here
];

// data.js
const newreleased = [
  {
    title: "Wuthering waves",
    subtitle: "now available on PC",
    imgSrc: require("../../Images/new-released/image1.png"),
    buttontitle: "Now Available",
  },
  {
    title: "counter Strike",
    subtitle: "now available on PC",
    imgSrc: require("../../Images/new-released/image4.jpg"),
    buttontitle: "Now Available",
  },
  {
    title: "",
    subtitle: "",
    imgSrc: require("../../Images/new-released/image3.png"),
    buttontitle: "Releasing Soon",
  },
  {
    title: "Wuthering waves",
    subtitle: "now available on PC",
    imgSrc: require("../../Images/new-released/image1.png"),
    buttontitle: "Now Available",
  },
  {
    title: "counter Strike",
    subtitle: "now available on PC",
    imgSrc: require("../../Images/new-released/image4.jpg"),
    buttontitle: "Now Available",
  },
  {
    title: "",
    subtitle: "",
    imgSrc: require("../../Images/new-released/image3.png"),
    buttontitle: "Releasing Soon",
  },
];

const advertisementData = [
  {
    name: "Snapchat",
    image: require("../../Images/new-app/snap.png"),
    rating: 4.4,
  },
  {
    name: "Phone Pe",
    image: require("../../Images/new-app/phonepay.png"),
    rating: 4.4,
  },
  {
    name: "Whatsapp Messenger",
    image: require("../../Images/new-app/whatsapp.png"),
    rating: 4.1,
  },
  {
    name: "Amazon Prime Video",
    image: require("../../Images/new-app/amazone.png"),
    rating: 3.9,
  },
  {
    name: "McDonalds",
    image: require("../../Images/new-app/mcdonalt.png"),
    rating: 3.9,
  },
  {
    name: "Netflix",
    image: require("../../Images/new-app/netflix.png"),
    rating: 3.9,
  },
  {
    name: "Indigo Flight Booking App",
    image: require("../../Images/new-app/indigo.png"),
    rating: 3.9,
  },
  // {
  //   name: "Adobe",
  //   image: require("../../Images/new-app/adobe.png"),
  //   rating: 3.9,
  // },
  // {
  //   name: "GitHub",
  //   image: require("../../Images/new-app/github.png"),
  //   rating: 3.9,
  // },
  // {
  //   name: "Zomato",
  //   image: require("../../Images/new-app/zometo.png"),
  //   rating: 3.9,
  // },
  // {
  //   name: "Skype",
  //   image: require("../../Images/new-app/skype.png"),
  //   rating: 3.9,
  // },
  // Add more app objects here
];

// data.js
const gameData = [
  {
    id: 1,
    title: "Exorcist: Fear of Phasmophobia",
    rating: 4.5,
    price: "Free",
    thumbnail: require("../../Images/game-section/thumbnail/image1.png"),
    banner: require("../../Images/game-section/banner/image1.png"),
  },
  {
    id: 1,
    title: "Exorcist: Fear of Phasmophobia",
    rating: 4.5,
    price: "Free",
    thumbnail: require("../../Images/game-section/thumbnail/image1.png"),
    banner: require("../../Images/game-section/banner/image1.png"),
  },
  {
    id: 1,
    title: "Exorcist: Fear of Phasmophobia",
    rating: 4.5,
    price: "Free",
    thumbnail: require("../../Images/game-section/thumbnail/image1.png"),
    banner: require("../../Images/game-section/banner/image1.png"),
  },
  {
    id: 1,
    title: "Exorcist: Fear of Phasmophobia",
    rating: 4.5,
    price: "Free",
    thumbnail: require("../../Images/game-section/thumbnail/image1.png"),
    banner: require("../../Images/game-section/banner/image1.png"),
  },
  {
    id: 1,
    title: "Exorcist: Fear of Phasmophobia",
    rating: 4.5,
    price: "Free",
    thumbnail: require("../../Images/game-section/thumbnail/image1.png"),
    banner: require("../../Images/game-section/banner/image1.png"),
  },
  {
    id: 1,
    title: "Exorcist: Fear of Phasmophobia",
    rating: 4.5,
    price: "Free",
    thumbnail: require("../../Images/game-section/thumbnail/image1.png"),
    banner: require("../../Images/game-section/banner/image1.png"),
  },
  {
    id: 1,
    title: "Exorcist: Fear of Phasmophobia",
    rating: 4.5,
    price: "Free",
    thumbnail: require("../../Images/game-section/thumbnail/image1.png"),
    banner: require("../../Images/game-section/banner/image1.png"),
  },
  {
    id: 1,
    title: "Exorcist: Fear of Phasmophobia",
    rating: 4.5,
    price: "Free",
    thumbnail: require("../../Images/game-section/thumbnail/image1.png"),
    banner: require("../../Images/game-section/banner/image1.png"),
  },
];

export default appData;

export {
  appData,
  gamesdata,
  trendingappsdata,
  musicapps,
  newreleased,
  advertisementData,
  gameData,
};
