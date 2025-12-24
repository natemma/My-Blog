// Тип для статьи (пока заглушка, потом подключим с бэкенда)
interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  createdAt: string;
  image: {
    url: string;
  } | null;
  category: {
    name: string;
    slug?: string;
  };
  author: {
    name: string;
  };
  tags: Array<{ name: string }>;
}

interface Category {
  name: string;
  id: string;
  slug: string;
  postsCount?: number;
}

   // Временные данные для демонстрации
//  export const mockArticles: Article[] = [
//     { id: 1, 
//       img: "/img/LUTT.jpg", 
//       title: "Light Up The Town, Released: November 28, 2025", 
//       excerpt: "Cozy, casual holiday game for all ages. Play as Bean, a precocious young ferret, and explore the town of Bellflower, Colorado as you hang up festive string lights around to spread holiday cheer. Click to throw a light or decoration; the only limit is your imagination." ,
//       createdAt: "November 28, 2024",
//       category: "Simulator",
//       author: "GameDev Studio",
//       tags: ["#indiegame", "#holiday", "#cozy", "#simulator"]
//     },
//     { id: 2,  
//       img: "/img/REPO.jpg",
//       title: "R.E.P.O. has a big Halloween update", 
//       content: "The cooperative horror game R.E.P.O. has received a major update, The Monster Update, which is timed to coincide with Halloween. This is the second significant patch for the game since its release in February 2025. The update has added ten new types of enemies, redesigned the behavior of existing monsters, and allowed players to control their character's head after death. Additionally, the developers have expanded three locations - Swiftbroom Academy, Headman Manor, and the Museum of Human Art - and added new rooms and valuable items. In addition, the patch added visual improvements, sound redesigns, control optimizations, and new Steam and Discord integration features: now you can see which location your friends are playing on and join their sessions directly. The save process has been optimized, and the damage system and some items have been improved. Bugs that disrupt gameplay have also been fixed.",
//       excerpt: "An online co-op horror game with up to 6 players. Locate valuable, fully physics-based objects and handle them with care as you retrieve and extract to satisfy your creator's desires.",
//       createdAt: "October 31, 2024",
//       category: "Horror",
//       author: "Dev Team",
//       tags: ["#update", "#halloween", "#horror"]
//     },
//     { id: 3,  
//       img: "/img/Peak.jpg",  
//       title: "Peak gets a Root biome and balance fixes: a new update for a fun simulator" ,   
//       content: "The Peak climbing simulator has received a major update that brings a fresh Root biome and a variety of balance changes to the game. The new location is a mysterious forest filled with bizarre mushrooms and eerie creatures, offering players a challenging exploration experience. Root introduces 11 unique icons and exclusive items, including a rescue claw, a magical book, and a variety of mushroom species that can only be found in this enigmatic wilderness. The developers have also fixed a number of critical bugs: characters no longer lose consciousness when their stamina bar is full, ping from unconscious players is displayed correctly, and items with a limited number of uses no longer restore unexpectedly. In addition, the update improves the highlighting of interactive objects and slightly adjusts the cooking mechanics, making interaction with the environment more intuitive and convenient. Peak was released on PC on June 16 and has already achieved impressive results.", 
//       excerpt:"PEAK is a co-op climbing game where the slightest mistake can spell your doom. Either solo or as a group of lost nature scouts, your only hope of rescue from a mysterious island is to scale the mountain at its center. Do you have what it takes to reach the PEAK?",
//       createdAt: "November 15, 2024",
//       category: "Simulator",
//       author: "Game Studio",
//       tags: ["#update", "#simulator", "#gaming"]
//     },
//     { id: 4,  
//       img: "/img/Thrifty Business.webp",
//       title: "Thrifty Business", 
//       content: "Spellgarden Games has announced Thrifty Business, a simulation game about running a thrift store. The game will be released on PC in 2026.In Thrifty Business, you will take on the role of a 90s-style store owner. You will have to unpack boxes of clothes, toys, and old items, display them in the store, and find new owners for each item. You can decorate the store with furniture, wallpaper, decor, and flooring. The goal of gamers is to create a cozy place where locals will want to come, chat and relax. Thrifty Business encourages experimentation with the placement of goods and the design of space. Players will be able to group items by color, theme or purpose, and a well-organized display will bring additional points that unlock new items for the store. At the same time, the game does not involve a tough economic race: there is no need to set prices, bargain or face impatient customers.",
//       excerpt: "The colorful Thrifty Business simulator will show the life of a thrift store in 2026",
//       category: "Simulator",
//       createdAt: "December 1, 2024",
//       author: "Indie Dev",
//       tags: ["#simulator", "#business", "#upcoming"]
//     },
//     { id: 5,  
//       img: "/img/Rroblox.jpg",
//       title: "Roblox has been blocked in the Russia", 
//       excerpt: "Roskomnadzor has imposed restrictions against the Roblox gaming platform, Interfax reports, citing the agency's press service. The reason was the identification of the facts of the mass distribution of undesirable materials such as extremist propaganda and LGBT topics. Users started reporting failures in Roblox in Russia a few weeks ago, but the most active messages about the unavailability of the game began to arrive the day before — on December 3. Roskomnadzor has stated that children in the game are subjected to sexual harassment, have their intimate photos stolen, and are encouraged to engage in depraved acts and violence. Additionally, the gaming environment contains a large amount of inappropriate content that can negatively impact children's spiritual and moral development, creating conditions and prerequisites for committing illegal actions.",
//       category: "News",
//       createdAt: "December 3, 2025",
//       author: "News Reporter",
//       tags: ["#roblox", "#news", "#ban"]
//     },
//     { id: 6,  
//       img: "/img/stardewValley.jpg", 
//       title: "Stardew Valley became the most-rated game on Steam, surpassing Portal 2 and Terraria", 
//       content: "Stardew Valley continues to amaze even nine years after its release. The game, created by a single individual, Eric Barone (aka ConcernedApe), has not only sold over 10 million copies, but has also made history on Steam. Stardew Valley is now the highest-rated game on the Valve platform. Portal 2 and Terraria have been left behind. At the time of publication, Stardew Valley's approval rating is 98.4% based on nearly 900,000 reviews, with over 882,000 of them being positive. In comparison, Portal 2 has half as many reviews. The new surge in popularity is likely due to the Steam Summer Sale, where the game is currently available at a 50% discount.",
//       excerpt: "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?",
//       category: "Games",
//       createdAt: "July 4, 2025",
//       author: "Gaming News",
//       tags: ["#stardewvalley", "#achievement", "#steam"]},
//   ];