const igdbMockData = [
  {
    id: 1,
    name: "The Legend of Zelda: Breath of the Wild",
    summary:
      "An open-world action-adventure game where players control Link in his quest to defeat Calamity Ganon and save Hyrule.",
    release_dates: [
      {
        id: 1001,
        human: "2017-03-03",
        date: 1488499200,
        platform: {
          id: 41,
          name: "Nintendo Switch",
        },
      },
      {
        id: 1002,
        human: "2017-03-03",
        date: 1488499200,
        platform: {
          id: 130,
          name: "Wii U",
        },
      },
    ],
    genres: [
      {
        id: 31,
        name: "Adventure",
      },
      {
        id: 12,
        name: "Role-playing (RPG)",
      },
    ],
    platforms: [
      {
        id: 41,
        name: "Nintendo Switch",
      },
      {
        id: 130,
        name: "Wii U",
      },
    ],
    cover: {
      id: 2001,
      url: "//images.igdb.com/igdb/image/upload/t_cover_big/breath_of_the_wild.jpg",
      width: 264,
      height: 352,
    },
    screenshots: [
      {
        id: 3001,
        url: "//images.igdb.com/igdb/image/upload/t_screenshot_huge/zelda_screenshot1.jpg",
      },
    ],
    videos: [
      {
        id: 4001,
        video_id: "zw47_q9wbBE",
        name: "Breath of the Wild Trailer",
        url: "https://www.youtube.com/watch?v=zw47_q9wbBE",
      },
    ],
    rating: 97.0,
    rating_count: 4550,
    involved_companies: [
      {
        id: 5001,
        company: {
          id: 70,
          name: "Nintendo",
        },
        developer: true,
        publisher: true,
      },
    ],
  },
  {
    id: 2,
    name: "The Witcher 3: Wild Hunt",
    summary:
      "An action RPG set in a detailed fantasy world where players control Geralt of Rivia, a monster hunter on a quest to find his adopted daughter.",
    release_dates: [
      {
        id: 1003,
        human: "2015-05-19",
        date: 1431993600,
        platform: {
          id: 6,
          name: "PC",
        },
      },
      {
        id: 1004,
        human: "2015-05-19",
        date: 1431993600,
        platform: {
          id: 48,
          name: "PlayStation 4",
        },
      },
      {
        id: 1005,
        human: "2015-05-19",
        date: 1431993600,
        platform: {
          id: 49,
          name: "Xbox One",
        },
      },
    ],
    genres: [
      {
        id: 12,
        name: "Role-playing (RPG)",
      },
      {
        id: 31,
        name: "Adventure",
      },
    ],
    platforms: [
      {
        id: 6,
        name: "PC",
      },
      {
        id: 48,
        name: "PlayStation 4",
      },
      {
        id: 49,
        name: "Xbox One",
      },
    ],
    cover: {
      id: 2002,
      url: "//images.igdb.com/igdb/image/upload/t_cover_big/witcher3.jpg",
      width: 264,
      height: 352,
    },
    screenshots: [
      {
        id: 3002,
        url: "//images.igdb.com/igdb/image/upload/t_screenshot_huge/witcher3_screenshot1.jpg",
      },
    ],
    videos: [
      {
        id: 4002,
        video_id: "c0i88t0Kacs",
        name: "The Witcher 3 Trailer",
        url: "https://www.youtube.com/watch?v=c0i88t0Kacs",
      },
    ],
    rating: 93.0,
    rating_count: 8123,
    involved_companies: [
      {
        id: 5002,
        company: {
          id: 101,
          name: "CD Projekt Red",
        },
        developer: true,
        publisher: true,
      },
    ],
  },
  {
    id: 3,
    name: "Red Dead Redemption 2",
    summary:
      "An open-world Western game set in a meticulously recreated 19th-century America where players take on the role of outlaw Arthur Morgan.",
    release_dates: [
      {
        id: 1006,
        human: "2018-10-26",
        date: 1540512000,
        platform: {
          id: 6,
          name: "PC",
        },
      },
      {
        id: 1007,
        human: "2018-10-26",
        date: 1540512000,
        platform: {
          id: 48,
          name: "PlayStation 4",
        },
      },
      {
        id: 1008,
        human: "2018-10-26",
        date: 1540512000,
        platform: {
          id: 49,
          name: "Xbox One",
        },
      },
    ],
    genres: [
      {
        id: 31,
        name: "Adventure",
      },
      {
        id: 5,
        name: "Action",
      },
    ],
    platforms: [
      {
        id: 6,
        name: "PC",
      },
      {
        id: 48,
        name: "PlayStation 4",
      },
      {
        id: 49,
        name: "Xbox One",
      },
    ],
    cover: {
      id: 2003,
      url: "//images.igdb.com/igdb/image/upload/t_cover_big/red_dead_redemption2.jpg",
      width: 264,
      height: 352,
    },
    screenshots: [
      {
        id: 3003,
        url: "//images.igdb.com/igdb/image/upload/t_screenshot_huge/red_dead_screenshot1.jpg",
      },
    ],
    videos: [
      {
        id: 4003,
        video_id: "eaW0tYpxyp0",
        name: "Red Dead Redemption 2 Trailer",
        url: "https://www.youtube.com/watch?v=eaW0tYpxyp0",
      },
    ],
    rating: 96.0,
    rating_count: 9432,
    involved_companies: [
      {
        id: 5003,
        company: {
          id: 2,
          name: "Rockstar Games",
        },
        developer: true,
        publisher: true,
      },
    ],
  },
  {
    id: 4,
    name: "Cyberpunk 2077",
    summary:
      "A futuristic open-world RPG set in the dystopian Night City, where players take on the role of a mercenary named V.",
    release_dates: [
      {
        id: 1009,
        human: "2020-12-10",
        date: 1607558400,
        platform: {
          id: 6,
          name: "PC",
        },
      },
      {
        id: 1010,
        human: "2020-12-10",
        date: 1607558400,
        platform: {
          id: 48,
          name: "PlayStation 4",
        },
      },
      {
        id: 1011,
        human: "2020-12-10",
        date: 1607558400,
        platform: {
          id: 49,
          name: "Xbox One",
        },
      },
    ],
    genres: [
      {
        id: 12,
        name: "Role-playing (RPG)",
      },
      {
        id: 5,
        name: "Action",
      },
    ],
    platforms: [
      {
        id: 6,
        name: "PC",
      },
      {
        id: 48,
        name: "PlayStation 4",
      },
      {
        id: 49,
        name: "Xbox One",
      },
    ],
    cover: {
      id: 2004,
      url: "//images.igdb.com/igdb/image/upload/t_cover_big/cyberpunk_2077.jpg",
      width: 264,
      height: 352,
    },
    screenshots: [
      {
        id: 3004,
        url: "//images.igdb.com/igdb/image/upload/t_screenshot_huge/cyberpunk_screenshot1.jpg",
      },
    ],
    videos: [
      {
        id: 4004,
        video_id: "8X2kIfS6fb8",
        name: "Cyberpunk 2077 Trailer",
        url: "https://www.youtube.com/watch?v=8X2kIfS6fb8",
      },
    ],
    rating: 85.0,
    rating_count: 7230,
    involved_companies: [
      {
        id: 5004,
        company: {
          id: 101,
          name: "CD Projekt Red",
        },
        developer: true,
        publisher: true,
      },
    ],
  },
  {
    id: 5,
    name: "Hades",
    summary:
      "A rogue-like dungeon crawler where players control Zagreus, son of Hades, as he tries to escape the Underworld.",
    release_dates: [
      {
        id: 1012,
        human: "2020-09-17",
        date: 1600300800,
        platform: {
          id: 6,
          name: "PC",
        },
      },
      {
        id: 1013,
        human: "2020-09-17",
        date: 1600300800,
        platform: {
          id: 130,
          name: "Nintendo Switch",
        },
      },
    ],
    genres: [
      {
        id: 25,
        name: "Rogue-like",
      },
      {
        id: 5,
        name: "Action",
      },
    ],
    platforms: [
      {
        id: 6,
        name: "PC",
      },
      {
        id: 130,
        name: "Nintendo Switch",
      },
    ],
    cover: {
      id: 2005,
      url: "//images.igdb.com/igdb/image/upload/t_cover_big/hades.jpg",
      width: 264,
      height: 352,
    },
    screenshots: [
      {
        id: 3005,
        url: "//images.igdb.com/igdb/image/upload/t_screenshot_huge/hades_screenshot1.jpg",
      },
    ],
    videos: [
      {
        id: 4005,
        video_id: "n4ptqRjGhFw",
        name: "Hades Trailer",
        url: "https://www.youtube.com/watch?v=n4ptqRjGhFw",
      },
    ],
    rating: 94.0,
    rating_count: 5129,
    involved_companies: [
      {
        id: 5005,
        company: {
          id: 1401,
          name: "Supergiant Games",
        },
        developer: true,
        publisher: true,
      },
    ],
  },
  {
    id: 6,
    name: "The Last of Us Part II",
    summary:
      "An action-adventure game focusing on the struggles of Ellie in a post-apocalyptic world as she seeks revenge.",
    release_dates: [
      {
        id: 1001,
        human: "2020-06-19",
        date: 1592524800,
        platform: {
          id: 48,
          name: "PlayStation 4",
        },
      },
    ],
    genres: [
      {
        id: 31,
        name: "Adventure",
      },
      {
        id: 5,
        name: "Shooter",
      },
    ],
    platforms: [
      {
        id: 48,
        name: "PlayStation 4",
      },
    ],
    cover: {
      id: 2001,
      url: "//images.igdb.com/igdb/image/upload/t_cover_big/the_last_of_us_part_ii.jpg",
      width: 264,
      height: 352,
    },
    screenshots: [
      {
        id: 3001,
        url: "//images.igdb.com/igdb/image/upload/t_screenshot_huge/tlou2_screenshot1.jpg",
      },
    ],
    videos: [
      {
        id: 4001,
        video_id: "II5UsqP2JAk",
        name: "The Last of Us Part II Trailer",
        url: "https://www.youtube.com/watch?v=II5UsqP2JAk",
      },
    ],
    rating: 93.0,
    rating_count: 7800,
    involved_companies: [
      {
        id: 5001,
        company: {
          id: 255,
          name: "Naughty Dog",
        },
        developer: true,
        publisher: false,
      },
      {
        id: 5002,
        company: {
          id: 1,
          name: "Sony Interactive Entertainment",
        },
        developer: false,
        publisher: true,
      },
    ],
  },
  {
    id: 7,
    name: "God of War",
    summary:
      "An action-adventure game following Kratos and his son Atreus in a world based on Norse mythology.",
    release_dates: [
      {
        id: 1010,
        human: "2018-04-20",
        date: 1524182400,
        platform: {
          id: 48,
          name: "PlayStation 4",
        },
      },
    ],
    genres: [
      {
        id: 31,
        name: "Adventure",
      },
      {
        id: 25,
        name: "Hack and slash/Beat 'em up",
      },
    ],
    platforms: [
      {
        id: 48,
        name: "PlayStation 4",
      },
    ],
    cover: {
      id: 2005,
      url: "//images.igdb.com/igdb/image/upload/t_cover_big/god_of_war.jpg",
      width: 264,
      height: 352,
    },
    screenshots: [
      {
        id: 3005,
        url: "//images.igdb.com/igdb/image/upload/t_screenshot_huge/gow_screenshot1.jpg",
      },
    ],
    videos: [
      {
        id: 4005,
        video_id: "K0u_kAWLJOA",
        name: "God of War Trailer",
        url: "https://www.youtube.com/watch?v=K0u_kAWLJOA",
      },
    ],
    rating: 94.0,
    rating_count: 8200,
    involved_companies: [
      {
        id: 5006,
        company: {
          id: 325,
          name: "Santa Monica Studio",
        },
        developer: true,
        publisher: false,
      },
      {
        id: 5007,
        company: {
          id: 1,
          name: "Sony Interactive Entertainment",
        },
        developer: false,
        publisher: true,
      },
    ],
  },

  {
    id: 8,
    name: "Grand Theft Auto V",
    summary:
      "An open-world action-adventure game where players control three criminals in their heists across the city of Los Santos.",
    release_dates: [
      {
        id: 1008,
        human: "2013-09-17",
        date: 1379376000,
        platform: {
          id: 48,
          name: "PlayStation 4",
        },
      },
      {
        id: 1009,
        human: "2015-04-14",
        date: 1428960000,
        platform: {
          id: 6,
          name: "PC (Microsoft Windows)",
        },
      },
    ],
    genres: [
      {
        id: 31,
        name: "Adventure",
      },
      {
        id: 5,
        name: "Shooter",
      },
    ],
    platforms: [
      {
        id: 48,
        name: "PlayStation 4",
      },
      {
        id: 6,
        name: "PC (Microsoft Windows)",
      },
    ],
    cover: {
      id: 2004,
      url: "//images.igdb.com/igdb/image/upload/t_cover_big/gtav.jpg",
      width: 264,
      height: 352,
    },
    screenshots: [
      {
        id: 3004,
        url: "//images.igdb.com/igdb/image/upload/t_screenshot_huge/gtav_screenshot1.jpg",
      },
    ],
    videos: [
      {
        id: 4004,
        video_id: "QkkoHAzjnUs",
        name: "Grand Theft Auto V Trailer",
        url: "https://www.youtube.com/watch?v=QkkoHAzjnUs",
      },
    ],
    rating: 97.0,
    rating_count: 10000,
    involved_companies: [
      {
        id: 5005,
        company: {
          id: 66,
          name: "Rockstar Games",
        },
        developer: true,
        publisher: true,
      },
    ],
  },

  {
    id: 9,
    name: "Dark Souls III",
    summary:
      "An action role-playing game known for its challenging combat and intricate world design.",
    release_dates: [
      {
        id: 1014,
        human: "2016-04-12",
        date: 1460419200,
        platform: {
          id: 6,
          name: "PC (Microsoft Windows)",
        },
      },
      {
        id: 1015,
        human: "2016-04-12",
        date: 1460419200,
        platform: {
          id: 48,
          name: "PlayStation 4",
        },
      },
      {
        id: 1016,
        human: "2016-04-12",
        date: 1460419200,
        platform: {
          id: 49,
          name: "Xbox One",
        },
      },
    ],
    genres: [
      {
        id: 25,
        name: "Hack and slash/Beat 'em up",
      },
      {
        id: 12,
        name: "Role-playing (RPG)",
      },
    ],
    platforms: [
      {
        id: 6,
        name: "PC (Microsoft Windows)",
      },
      {
        id: 48,
        name: "PlayStation 4",
      },
      {
        id: 49,
        name: "Xbox One",
      },
    ],
    cover: {
      id: 2007,
      url: "//images.igdb.com/igdb/image/upload/t_cover_big/dark_souls_3.jpg",
      width: 264,
      height: 352,
    },
    screenshots: [
      {
        id: 3007,
        url: "//images.igdb.com/igdb/image/upload/t_screenshot_huge/ds3_screenshot1.jpg",
      },
    ],
    videos: [
      {
        id: 4007,
        video_id: "Yg0l2HODuMs",
        name: "Dark Souls III Trailer",
        url: "https://www.youtube.com/watch?v=Yg0l2HODuMs",
      },
    ],
    rating: 90.0,
    rating_count: 8500,
    involved_companies: [
      {
        id: 5009,
        company: {
          id: 312,
          name: "FromSoftware",
        },
        developer: true,
        publisher: false,
      },
      {
        id: 5010,
        company: {
          id: 82,
          name: "Bandai Namco Entertainment",
        },
        developer: false,
        publisher: true,
      },
    ],
  },
  {
    id: 10,
    name: "Minecraft",
    summary:
      "A sandbox game where players build and explore randomly generated worlds made of blocks, with survival and creative modes.",
    release_dates: [
      {
        id: 1017,
        human: "2011-11-18",
        date: 1321574400,
        platform: {
          id: 6,
          name: "PC (Microsoft Windows)",
        },
      },
      {
        id: 1018,
        human: "2013-12-17",
        date: 1387238400,
        platform: {
          id: 48,
          name: "PlayStation 4",
        },
      },
    ],
    genres: [
      {
        id: 33,
        name: "Sandbox",
      },
      {
        id: 15,
        name: "Survival",
      },
    ],
    platforms: [
      {
        id: 6,
        name: "PC (Microsoft Windows)",
      },
      {
        id: 48,
        name: "PlayStation 4",
      },
    ],
    cover: {
      id: 2008,
      url: "//images.igdb.com/igdb/image/upload/t_cover_big/minecraft.jpg",
      width: 264,
      height: 352,
    },
    screenshots: [
      {
        id: 3008,
        url: "//images.igdb.com/igdb/image/upload/t_screenshot_huge/minecraft_screenshot1.jpg",
      },
    ],
    videos: [
      {
        id: 4008,
        video_id: "MmB9b5njVbA",
        name: "Minecraft Trailer",
        url: "https://www.youtube.com/watch?v=MmB9b5njVbA",
      },
    ],
    rating: 91.0,
    rating_count: 9000,
    involved_companies: [
      {
        id: 5011,
        company: {
          id: 7049,
          name: "Mojang Studios",
        },
        developer: true,
        publisher: true,
      },
    ],
  },
  {
    id: 11,
    name: "Super Mario Odyssey",
    summary:
      "An open-world platformer where Mario embarks on a globe-trotting adventure to rescue Princess Peach from Bowser.",
    release_dates: [
      {
        id: 1021,
        human: "2017-10-27",
        date: 1509062400,
        platform: {
          id: 41,
          name: "Nintendo Switch",
        },
      },
    ],
    genres: [
      {
        id: 8,
        name: "Platform",
      },
    ],
    platforms: [
      {
        id: 41,
        name: "Nintendo Switch",
      },
    ],
    cover: {
      id: 2010,
      url: "//images.igdb.com/igdb/image/upload/t_cover_big/super_mario_odyssey.jpg",
      width: 264,
      height: 352,
    },
    screenshots: [
      {
        id: 3010,
        url: "//images.igdb.com/igdb/image/upload/t_screenshot_huge/odyssey_screenshot1.jpg",
      },
    ],
    videos: [
      {
        id: 4010,
        video_id: "5kcdRBHM7kM",
        name: "Super Mario Odyssey Trailer",
        url: "https://www.youtube.com/watch?v=5kcdRBHM7kM",
      },
    ],
    rating: 97.0,
    rating_count: 6000,
    involved_companies: [
      {
        id: 5013,
        company: {
          id: 70,
          name: "Nintendo",
        },
        developer: true,
        publisher: true,
      },
    ],
  },

  {
    id: 12,
    name: "Hollow Knight",
    summary:
      "A challenging action-adventure metroidvania game set in the decaying, insect-filled kingdom of Hallownest.",
    release_dates: [
      {
        id: 1022,
        human: "2017-02-24",
        date: 1487894400,
        platform: {
          id: 6,
          name: "PC (Microsoft Windows)",
        },
      },
      {
        id: 1023,
        human: "2018-06-12",
        date: 1528761600,
        platform: {
          id: 41,
          name: "Nintendo Switch",
        },
      },
    ],
    genres: [
      {
        id: 8,
        name: "Platform",
      },
      {
        id: 25,
        name: "Hack and slash/Beat 'em up",
      },
    ],
    platforms: [
      {
        id: 6,
        name: "PC (Microsoft Windows)",
      },
      {
        id: 41,
        name: "Nintendo Switch",
      },
    ],
    cover: {
      id: 2011,
      url: "//images.igdb.com/igdb/image/upload/t_cover_big/hollow_knight.jpg",
      width: 264,
      height: 352,
    },
    screenshots: [
      {
        id: 3011,
        url: "//images.igdb.com/igdb/image/upload/t_screenshot_huge/hk_screenshot1.jpg",
      },
    ],
    videos: [
      {
        id: 4011,
        video_id: "UAO2urG23S4",
        name: "Hollow Knight Trailer",
        url: "https://www.youtube.com/watch?v=UAO2urG23S4",
      },
    ],
    rating: 91.0,
    rating_count: 5200,
    involved_companies: [
      {
        id: 5014,
        company: {
          id: 13634,
          name: "Team Cherry",
        },
        developer: true,
        publisher: true,
      },
    ],
  },

  {
    id: 13,
    name: "Celeste",
    summary:
      "A platformer where players control Madeline as she makes her way up the challenging Celeste Mountain, battling her inner demons.",
    release_dates: [
      {
        id: 1024,
        human: "2018-01-25",
        date: 1516838400,
        platform: {
          id: 6,
          name: "PC (Microsoft Windows)",
        },
      },
      {
        id: 1025,
        human: "2018-01-25",
        date: 1516838400,
        platform: {
          id: 41,
          name: "Nintendo Switch",
        },
      },
    ],
    genres: [
      {
        id: 8,
        name: "Platform",
      },
    ],
    platforms: [
      {
        id: 6,
        name: "PC (Microsoft Windows)",
      },
      {
        id: 41,
        name: "Nintendo Switch",
      },
    ],
    cover: {
      id: 2012,
      url: "//images.igdb.com/igdb/image/upload/t_cover_big/celeste.jpg",
      width: 264,
      height: 352,
    },
    screenshots: [
      {
        id: 3012,
        url: "//images.igdb.com/igdb/image/upload/t_screenshot_huge/celeste_screenshot1.jpg",
      },
    ],
    videos: [
      {
        id: 4012,
        video_id: "ioOe_U0f4gk",
        name: "Celeste Trailer",
        url: "https://www.youtube.com/watch?v=ioOe_U0f4gk",
      },
    ],
    rating: 92.0,
    rating_count: 6100,
    involved_companies: [
      {
        id: 5015,
        company: {
          id: 16335,
          name: "Matt Makes Games",
        },
        developer: true,
        publisher: true,
      },
    ],
  },

  {
    id: 14,
    name: "Undertale",
    summary:
      "A role-playing game where players navigate a world of monsters, with combat options that allow for pacifism or aggression.",
    release_dates: [
      {
        id: 1026,
        human: "2015-09-15",
        date: 1442275200,
        platform: {
          id: 6,
          name: "PC (Microsoft Windows)",
        },
      },
      {
        id: 1027,
        human: "2018-09-18",
        date: 1537228800,
        platform: {
          id: 41,
          name: "Nintendo Switch",
        },
      },
    ],
    genres: [
      {
        id: 12,
        name: "Role-playing (RPG)",
      },
      {
        id: 31,
        name: "Adventure",
      },
    ],
    platforms: [
      {
        id: 6,
        name: "PC (Microsoft Windows)",
      },
      {
        id: 41,
        name: "Nintendo Switch",
      },
    ],
    cover: {
      id: 2013,
      url: "//images.igdb.com/igdb/image/upload/t_cover_big/undertale.jpg",
      width: 264,
      height: 352,
    },
    screenshots: [
      {
        id: 3013,
        url: "//images.igdb.com/igdb/image/upload/t_screenshot_huge/undertale_screenshot1.jpg",
      },
    ],
    videos: [
      {
        id: 4013,
        video_id: "1Hojv0m3TqA",
        name: "Undertale Trailer",
        url: "https://www.youtube.com/watch?v=1Hojv0m3TqA",
      },
    ],
    rating: 93.0,
    rating_count: 10000,
    involved_companies: [
      {
        id: 5016,
        company: {
          id: 16336,
          name: "Toby Fox",
        },
        developer: true,
        publisher: true,
      },
    ],
  },

  {
    id: 15,
    name: "Stardew Valley",
    summary:
      "A farming simulation game where players inherit a farm and work to restore it while engaging with a close-knit community.",
    release_dates: [
      {
        id: 1028,
        human: "2016-02-26",
        date: 1456444800,
        platform: {
          id: 6,
          name: "PC (Microsoft Windows)",
        },
      },
      {
        id: 1029,
        human: "2017-10-05",
        date: 1507161600,
        platform: {
          id: 41,
          name: "Nintendo Switch",
        },
      },
    ],
    genres: [
      {
        id: 13,
        name: "Simulator",
      },
      {
        id: 32,
        name: "Indie",
      },
    ],
    platforms: [
      {
        id: 6,
        name: "PC (Microsoft Windows)",
      },
      {
        id: 41,
        name: "Nintendo Switch",
      },
    ],
    cover: {
      id: 2014,
      url: "//images.igdb.com/igdb/image/upload/t_cover_big/stardew_valley.jpg",
      width: 264,
      height: 352,
    },
    screenshots: [
      {
        id: 3014,
        url: "//images.igdb.com/igdb/image/upload/t_screenshot_huge/stardew_screenshot1.jpg",
      },
    ],
    videos: [
      {
        id: 4014,
        video_id: "ot7uXNQskhs",
        name: "Stardew Valley Trailer",
        url: "https://www.youtube.com/watch?v=ot7uXNQskhs",
      },
    ],
    rating: 89.0,
    rating_count: 7500,
    involved_companies: [
      {
        id: 5017,
        company: {
          id: 16337,
          name: "ConcernedApe",
        },
        developer: true,
        publisher: true,
      },
    ],
  },

  {
    id: 16,
    name: "Outer Wilds",
    summary:
      "A space exploration game where players explore a hand-crafted solar system trapped in a 22-minute time loop.",
    release_dates: [
      {
        id: 1032,
        human: "2019-05-28",
        date: 1559001600,
        platform: {
          id: 6,
          name: "PC (Microsoft Windows)",
        },
      },
      {
        id: 1033,
        human: "2019-10-15",
        date: 1571097600,
        platform: {
          id: 48,
          name: "PlayStation 4",
        },
      },
      {
        id: 1034,
        human: "2021-06-18",
        date: 1623974400,
        platform: {
          id: 49,
          name: "Xbox One",
        },
      },
    ],
    genres: [
      {
        id: 31,
        name: "Adventure",
      },
    ],
    platforms: [
      {
        id: 6,
        name: "PC (Microsoft Windows)",
      },
      {
        id: 48,
        name: "PlayStation 4",
      },
      {
        id: 49,
        name: "Xbox One",
      },
    ],
    cover: {
      id: 2016,
      url: "//images.igdb.com/igdb/image/upload/t_cover_big/outer_wilds.jpg",
      width: 264,
      height: 352,
    },
    screenshots: [
      {
        id: 3016,
        url: "//images.igdb.com/igdb/image/upload/t_screenshot_huge/outer_wilds_screenshot1.jpg",
      },
    ],
    videos: [
      {
        id: 4016,
        video_id: "d-8eGrbx1wY",
        name: "Outer Wilds Trailer",
        url: "https://www.youtube.com/watch?v=d-8eGrbx1wY",
      },
    ],
    rating: 92.0,
    rating_count: 4300,
    involved_companies: [
      {
        id: 5019,
        company: {
          id: 16338,
          name: "Mobius Digital",
        },
        developer: true,
      },
      {
        id: 5020,
        company: {
          id: 15639,
          name: "Annapurna Interactive",
        },
        publisher: true,
      },
    ],
  },

  {
    id: 17,
    name: "Nuclear Throne",
    summary:
      "A fast-paced, rogue-lite, top-down shooter set in a post-apocalyptic world, where mutants fight for control of the wasteland.",
    release_dates: [
      {
        id: 1035,
        human: "2015-12-05",
        date: 1449273600,
        platform: {
          id: 6,
          name: "PC (Microsoft Windows)",
        },
      },
      {
        id: 1036,
        human: "2015-12-05",
        date: 1449273600,
        platform: {
          id: 46,
          name: "PlayStation Vita",
        },
      },
      {
        id: 1037,
        human: "2015-12-05",
        date: 1449273600,
        platform: {
          id: 48,
          name: "PlayStation 4",
        },
      },
    ],
    genres: [
      {
        id: 5,
        name: "Shooter",
      },
      {
        id: 32,
        name: "Indie",
      },
    ],
    platforms: [
      {
        id: 6,
        name: "PC (Microsoft Windows)",
      },
      {
        id: 46,
        name: "PlayStation Vita",
      },
      {
        id: 48,
        name: "PlayStation 4",
      },
    ],
    cover: {
      id: 2017,
      url: "//images.igdb.com/igdb/image/upload/t_cover_big/nuclear_throne.jpg",
      width: 264,
      height: 352,
    },
    screenshots: [
      {
        id: 3017,
        url: "//images.igdb.com/igdb/image/upload/t_screenshot_huge/nuclear_throne_screenshot1.jpg",
      },
    ],
    videos: [
      {
        id: 4017,
        video_id: "CvmZkfOX0DY",
        name: "Nuclear Throne Trailer",
        url: "https://www.youtube.com/watch?v=CvmZkfOX0DY",
      },
    ],
    rating: 87.0,
    rating_count: 2200,
    involved_companies: [
      {
        id: 5021,
        company: {
          id: 16339,
          name: "Vlambeer",
        },
        developer: true,
        publisher: true,
      },
    ],
  },

  {
    id: 18,
    name: "Persona 5 Royal",
    summary:
      "An enhanced version of Persona 5, where players control a group of high school students who live dual lives as phantom thieves, reforming the hearts of corrupted individuals.",
    release_dates: [
      {
        id: 1038,
        human: "2019-10-31",
        date: 1572480000,
        platform: {
          id: 48,
          name: "PlayStation 4",
        },
      },
      {
        id: 1039,
        human: "2022-10-21",
        date: 1666310400,
        platform: {
          id: 6,
          name: "PC (Microsoft Windows)",
        },
      },
    ],
    genres: [
      {
        id: 12,
        name: "Role-playing (RPG)",
      },
      {
        id: 31,
        name: "Adventure",
      },
    ],
    platforms: [
      {
        id: 48,
        name: "PlayStation 4",
      },
      {
        id: 6,
        name: "PC (Microsoft Windows)",
      },
    ],
    cover: {
      id: 2018,
      url: "//images.igdb.com/igdb/image/upload/t_cover_big/persona_5_royal.jpg",
      width: 264,
      height: 352,
    },
    screenshots: [
      {
        id: 3018,
        url: "//images.igdb.com/igdb/image/upload/t_screenshot_huge/persona_5_royal_screenshot1.jpg",
      },
    ],
    videos: [
      {
        id: 4018,
        video_id: "2yPsH65FGrA",
        name: "Persona 5 Royal Trailer",
        url: "https://www.youtube.com/watch?v=2yPsH65FGrA",
      },
    ],
    rating: 95.0,
    rating_count: 8500,
    involved_companies: [
      {
        id: 5022,
        company: {
          id: 149,
          name: "Atlus",
        },
        developer: true,
        publisher: true,
      },
    ],
  },
];
   
  export default igdbMockData


  /* 
  name
  genres.name,
  platforms.name,
  involved_companies.company.name
  */
  
