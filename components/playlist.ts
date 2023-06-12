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
          videoId: "YJfHuATJYsQ"
        },
        snippet: {
          title: "擱淺",
          description: "Jay Chou geqian"
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
          videoId: "6d0v2InyN_w"
        },
        snippet: {
          title: "我落淚 情緒零碎",
          description: "Jay Chou woluolei"
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
          videoId: "1kenSheA9o0"
        },
        snippet: {
          title: "再不再見",
          description: "C AllStar Say GoodBye"
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
      
    ],
    // ... other playlists ... 
  };
  
  export default playlists;
  