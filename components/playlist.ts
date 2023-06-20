type Video = {
    id: {
      videoId: string;
    };
    snippet: {
      title: string;
      description: string;
    };
    // duration: string;
  };
  
  type Playlists = {
    [key: string]: Video[];
  };
  
  const playlists: Playlists = {
    "fish recommendation": [
      {
        id: {
          videoId: "qzwsQTY-99o"
        },
        snippet: {
          title: "楓",
          description: "Jay Chou feng"
        },
      },

      {
        id: {
          videoId: "BliOkLi4fss"
        },
        snippet: {
          title: "黑洞裏",
          description: "Khalil Fong Hei Dong Li"
        },
      },

      {
        id: {
          videoId: "YJfHuATJYsQ"
        },
        snippet: {
          title: "擱淺",
          description: "Jay Chou geqian"
        },
      },

      {
        id: {
          videoId: "Oi2261-l7nY"
        },
        snippet: {
          title: "半句再見",
          description: "SunYanZi Half Goodbye"
        },
      },

      {
        id: {
          videoId: "2zxc27bvrO8"
        },
        snippet: {
          title: "最長的電影",
          description: "Jay Chou geqian"
        },
      },

      {
        id: {
          videoId: "NuiAOSii_sk"
        },
        snippet: {
          title: "想自由",
          description: "Yoga Freedom"
        },
      },

      {
        id: {
          videoId: "6d0v2InyN_w"
        },
        snippet: {
          title: "我落淚 情緒零碎",
          description: "Jay Chou woluolei"
        },
      },

      {
        id: {
          videoId: "_N9D8AR9Qxo"
        },
        snippet: {
          title: "過客別墅",
          description: "Hins Cheung Castle"
        },
      },

      {
        id: {
          videoId: "0-4mm0e2h44"
        },
        snippet: {
          title: "退後",
          description: "Jay Chou tueihou"
        },
      },

      {
        id: {
          videoId: "SDlY5WXq4bA"
        },
        snippet: {
          title: "留下來的人",
          description: "C AllStar the one who stay"
        },
      },

      {
        id: {
          videoId: "ftfJRzW0MPo"
        },
        snippet: {
          title: "說謊",
          description: "Yoga Fairy Tale"
        },
      },

      {
        id: {
          videoId: "1kenSheA9o0"
        },
        snippet: {
          title: "再不再見",
          description: "C AllStar Say GoodBye"
        },
      },

      {
        id: {
          videoId: "k6DMaEwAFU4"
        },
        snippet: {
          title: "忽而今夏",
          description: "Sudden Summer"
        },
      },

      {
        id: {
          videoId: "KCBGvqrZ9JI"
        },
        snippet: {
          title: "我也難過的",
          description: "I am sad too"
        },
      },
      
      {
        id: {
          videoId: "KKsioz-zaZY"
        },
        snippet: {
          title: "說了再見",
          description: "Jay Chou Say Goodbye"
        },
      },

      {
        id: {
          videoId: "m78lJuzftcc"
        },
        snippet: {
          title: "刻在我心底的名字",
          description: "Your Name Engraved Herein"
        },
      },

      {
        id: {
          videoId: "xVTI5eSzwzQ"
        },
        snippet: {
          title: "心雨",
          description: "Jay Chou Heart Rain"
        },
      },

      {
        id: {
          videoId: "Shxik4JT_hE"
        },
        snippet: {
          title: "Love Song",
          description: "Khalil fong Love Song"
        },
      },

      {
        id: {
          videoId: "L229QDxDakU"
        },
        snippet: {
          title: "一路向北",
          description: "Jay Chou All The Way North"
        },
      },

      {
        id: {
          videoId: "812omgU1tHs"
        },
        snippet: {
          title: "愛愛愛",
          description: "Khalil Fong love love love"
        },
      },

      {
        id: {
          videoId: "v6xC1U3j2G0"
        },
        snippet: {
          title: "我不是神，我只是平凡卻直拗愛著你的人",
          description: "Yoga Wordless Groans"
        },
      },

      {
        id: {
          videoId: "_VxLOj3TB5k"
        },
        snippet: {
          title: "不該",
          description: "Shouldn't be"
        },
      },

      {
        id: {
          videoId: "Mqr-kjvXsk8"
        },
        snippet: {
          title: "兜圈",
          description: "Detour"
        },
      },

      {
        id: {
          videoId: "Dnj5Tcpev0Q"
        },
        snippet: {
          title: "年少有為",
          description: "If I Were Young"
        },
      },

      {
        id: {
          videoId: "FDi5TulrPG4"
        },
        snippet: {
          title: "缺",
          description: "Lack of"
        },
      },
    ],
    // ... other playlists ...
  };
  
  export default playlists;
  