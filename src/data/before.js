export default {
  parameters: {
    text_panel: {
      size: ["95%", "30%"],
      color: "rgba(238,235,239,0.88)",
      color_text: "#000",
      indent_text: "1.4em",
      indent_bottom: "32px",
      size_text: "1.3em",
      dialog_speed: "35",
      art: { "zh-Hant": "" },
      className: "text_panel",
      position: ["2.5%", "2.5%", "0"],
      font_family: "Arial",
      style: "border-radius:10px;",
    },
    name_panel: {
      size: ["222px", "48px"],
      position: ["0", "0", "-48px", "0"],
      indent_text: "8px",
      size_text: "18px",
      color_text: "#000",
      align: ["flex-start", "center"],
      art: { "zh-Hant": "" },
      className: "",
      font_family: "",
      color: "",
    },
    launch_story: "hidden",
    // key: { next: "Space", back: "Backspace" },
    languares: ["zh-Hant"],
    buttons: [
      {
        name: "tue_next",
        style: "border-radius:26px;",
        position: [0, 0, 0, 0],
        size: ["100vw", "100vh"],
        color: "rgba(0,255,255,0)",
        color_text: "#000",
        size_text: "28px",
        text: { "zh-Hant": "" },
        art: { "zh-Hant": "" },
        sound: { "zh-Hant": "click" },
        hotspot: ["0%", "0%"],
        angle: "",
      },
      {
        name: "tue_back",
        style: "border-radius:5px;cursor: pointer;",
        position: ["3.15%", 0, "2.90%", 0],
        size: ["35px", "32px"],
        color: "rgba(0,0,0,0.45)",
        color_text: "rgb(255,255,255)",
        size_text: "20px",
        text: { "zh-Hant": "◀" },
        art: { "zh-Hant": "" },
        sound: { "zh-Hant": "" },
        hotspot: ["0%", "0%"],
        className: "backButton",
      },
    ],
    style_file: "",
    autosave: false,
    font: "Arial",
    font_size: "1.5em",
    plugins: ["terrain_map"],
    icon: "",
    font_files: {},
    variables: {},
    characters: {},
    sounds: {
      click: require("@/assets/compressed/click.mp3"),
      rm: require("@/assets/compressed/rm.mp3"),
      laugh: require("@/assets/compressed/laugh.mp3"),
      phone: require("@/assets/compressed/phone.mp3"),
      glass: require("@/assets/compressed/glass.mp3"),
      crash: require("@/assets/compressed/crash.mp3"),
      city: require("@/assets/compressed/city.mp3"),
      whoosh: require("@/assets/compressed/whoosh.mp3"),
    },
  },
  blocks: {
    hidden: ["124.458px", "355.229px", "block", false],
    intro: ["428.179px", "355.504px", "block", false],
    outro: ["1027.95px", "356.125px", "block", false],
    interlude: ["728.275px", "354.6px", "block", false],
  },
  hidden: [{ dialogs: [{ controll: "hidden_here" }] }],
  intro: [
    {
      dialogs: [
        {
          controll: "hidden_here",
          timer: [500, "tue_go"],
          js: "tuesday.classList.add('white');",
        },
        {
          text: "在開始前，我們想提醒你：本次旅程可能包含令人不安的內容，觸發負面情緒。",
        },
        { text: "請在確保情緒穩定的情況下游玩、體驗！" },
        { text: "……" },
        { text: "…………" },
        { text: "………………" },
        { text: "那麼，我們要出發了。" },
        { text: "這是“她”的故事，" },
        { text: "也是“你”的故事。" },
        { controll: "hidden_here", timer: [2500, "tue_go"], js: "" },
      ],
      background_image: require("@/assets/compressed/black.webp"),
    },
    {
      dialogs: [
        {
          controll: "hidden_here",
          timer: [3000, "tue_go"],
          js: "tuesday.fade();tuesday.style.backgroundPositionX='10%';tuesday.style.backgroundPositionY='100%';tuesday.classList.remove('white');",
        },
        {
          text: "小學二年級時，你的爸爸和其他家人在內地，媽媽帶著你和妹妹在香港住。",
          js: "tuesday.tilt('100%','0%');tuesday.tiltX('10%','50%')",
        },
        { text: "媽媽要上班還要照顧你們，很忙。" },
        { text: "她對你的學習抓得特別緊，但幾乎沒有和你聊過天。" },
        {
          text: "難過的時候、失落的時候、恐懼的時候，你只能躲起來試圖自己解決。",
        },
      ],
      background_image: require("@/assets/compressed/Story1A.webp"),
      background_align: "20%",
      background_music: require("@/assets/compressed/School_days.mp3"),
    },
    {
      background_image: require("@/assets/compressed/Story1B.webp"),
      background_align: "20%",

      dialogs: [
        {
          text: "你覺得家人從沒傾聽過你的想法，只想控制你。",
          js: "tuesday.tilt('100%','0%');tuesday.tiltX()",
        },
        { text: "家庭關係落入冰點，你很無措，卻不知道要怎麼改變。" },
        {
          text: "終於考上了大學，但你並不開心。你讀著一個隨意選擇的專業，看不到絲毫未來的方向。",
        },
      ],
      background_music: require("@/assets/compressed/School_days.mp3"),
    },
    {
      background_image: require("@/assets/compressed/Story1C.webp"),
      dialogs: [
        {
          text: "一天，你在宿舍門前聽見室友們在討論你……",
          js: "tuesday.tilt('14%','100%',100000)",
        },
        {
          text: "「你們覺不覺得她好土啊？她穿的衣服像我外婆的一樣。」",
          sound: "rm",
        },
        { text: "之後傳來一陣開朗的笑聲。", sound: "laugh" },
        {
          text: "從那以後，她們就喜歡拿你開玩笑，還給你取了外號叫「大山」。",
        },
        {
          text: "大學宿舍的生活環境也很不好，滴著水的衣物掛在昏暗閉塞的走廊裡，",
        },
        {
          text: "小小的房間堆滿雜物，根本落不了腳，經常有你害怕的蟲子出沒。",
        },
        { text: "你每天都過得心驚膽戰、唯唯諾諾的。" },
      ],
      background_music: require("@/assets/compressed/School_days.mp3"),
    },
    {
      background_image: require("@/assets/compressed/Story1D.webp"),
      background_align: "20%",

      dialogs: [
        {
          text: "上週末，你照例和唯一能夠聊天的外教爺爺打電話，卻沒有人接。",
          js: "tuesday.tilt('80%','0%',50000);tuesday.tiltX()",
          sound: "phone",
        },
        {
          text: "過去一整年裡，每周你們都會有固定的時間聊天，因此那週沒人接的時候，你陷入了極度的焦慮之中。",
        },
        { text: "幾天后終於聯繫到外教爺爺，卻得知了他突然去世的消息。" },
        {
          text: "那一刻，你覺得彷彿有什麼東西永遠地失去了。",
          sound_stop: "phone",
        },
      ],
      background_music: require("@/assets/compressed/School_days.mp3"),
    },
    {
      background_image: require("@/assets/compressed/Story1E.webp"),
      dialogs: [
        {
          text: "今天，你和舍友說去買點東西，一個人走上大樓的天台。",
          js: "tuesday.tilt('65%','0%');tuesday.tiltX()",
        },
        { text: "你翻過天台的圍欄，坐在圍欄上。天空是淡淡的灰藍色。" },
        {
          text: "向下望，城市還是這麼嘈雜。汽車喇叭聲、狗吠聲、人群的聲音混成一團。",
          sound: "city",
        },
        { text: "這一刻你好像是自由的。" },
        {
          text: "人生中美好的事情在你腦中浮現。你回憶起中學時的好朋友、外教爺爺和藹的面孔⋯⋯",
          sound_stop: "city",
        },
      ],
      background_music: require("@/assets/compressed/School_days.mp3"),
    },
    {
      dialogs: [
        {
          text: "這時，你腳底突然一滑。",
          art: [
            {
              position: ["", "0%", "", "50%"],
              size: ["75%", "75%"],
              url: require("@/assets/compressed/Avatar_Fall_Animation.webp"),
              fit: "contain",
              hotspot: ["0%", "0%"],
              className: "falling",
              move: "1",
            },
          ],
        },
        {
          text: "還沒反應過來，你的身體就隨著重力向下滑落。你本能地想抓住欄桿卻抓空了。",
          sound: "whoosh",

          art: [
            {
              position: ["", "10%", "", "25%"],
              size: ["105%", "105%"],
              url: require("@/assets/compressed/Avatar_Fall_Animation.webp"),
              fit: "contain",
              hotspot: ["0%", "0%"],
              className: "falling",
              move: "1",
            },
          ],
        },
        {
          text: "這個瞬間，時間好像靜止了。你開始墜落,",
          art: [
            {
              position: ["", "10%", "", "25%"],
              size: ["105%", "105%"],
              url: require("@/assets/compressed/Avatar_Fall_Animation.webp"),
              fit: "contain",
              hotspot: ["0%", "0%"],
              className: "falling",
              move: "4",
            },
          ],
          js: "tuesday.classList.add('no-color');tuesday.transition()",
        },
        {
          text: "不可避免地墜落。",
          art: [
            {
              position: ["", "10%", "", "25%"],
              size: ["105%", "105%"],
              url: require("@/assets/compressed/Avatar_Fall_Animation.webp"),
              fit: "contain",
              hotspot: ["0%", "0%"],
              className: "falling",
              move: "4",
            },
          ],
        },
        {
          controll: "hidden_here",
          go_to: "interlude",
          event: "intro_end",
          art: [
            {
              position: ["", "10%", "", "25%"],
              size: ["105%", "105%"],
              url: require("@/assets/compressed/Avatar_Fall_Animation.webp"),
              fit: "contain",
              hotspot: ["0%", "0%"],
              className: "falling",
              move: "2",
              opacity: "0",
            },
          ],
        },
      ],
      background_color: "rgb(0,0,0)",
      background_music: require("@/assets/compressed/School_days.mp3"),
    },
  ],
  interlude: [
    {
      dialogs: [
        {
          controll: "hidden_here",
          timer: [500, "tue_go"],
          js: "tuesday.classList.remove('no-color');tuesday.classList.add('white');",
        },
        { text: "隨著一聲巨響，你掉進了一片黑色。", sound: "crash" },
        { text: "一片黑色？這有點不真實。" },
        { text: "上一個瞬間，你明明還在屋頂呀，漫畫風格的屋頂。" },
        { text: "你想起來了。你是滑下去了、然後就墜落了。" },
        { text: "你的腦袋昏昏沈沈的，好像做了一整天的夢。" },
      ],
      background_music: require("@/assets/compressed/Fragile.mp3"),
      background_color: "rgb(0,0,0)",
      background_image: require("@/assets/compressed/Avatar_Fall.webp"),
    },
    {
      dialogs: [
        {
          controll: "hidden_here",
          timer: [2000, "tue_go"],
          js: "tuesday.fade();",
          event: "interlude_bg",
        },
        { text: "當你睜開眼的時候，你發現自己在一片星空裏。" },
        { text: "只能這麼形容了……你在一片星空裏。" },
        { text: "這是一片你沒見過的星空，掛著一些白色的星星。" },
        { text: "要是你的頻率與它們重疊，" },
        { text: "就能聽見它們的聲音。" },
        {
          controll: "hidden_here",
          event: "interlude_end",
        },
        { text: "" },
      ],
      background_music: require("@/assets/compressed/Fragile.mp3"),
      background_image: require("@/assets/compressed/galaxy.webp"),
      background_color: "transparent",
    },
  ],
  outro: [
    {
      dialogs: [
        {
          text: "嘿！",
          js: "tuesday.classList.remove('white');tuesday.transition()",
        },
        { text: "Hello！" },
        { text: "聽得見嗎？" },
      ],
      background_image: require("@/assets/compressed/white.webp"),
    },
    {
      dialogs: [
        {
          controll: "hidden_here",
          timer: [3000, "tue_go"],
          js: "tuesday.fade();tuesday.style.backgroundPositionY='100%';tuesday.style.backgroundPositionX='30%';",
        },
        { text: "該起床了！已經是個夏天了。" },
        {
          text: "你有仔細地聽他們說話嗎？",
          js: "tuesday.tilt('100%','0%');tuesday.tiltX('30%','100%')",
        },
        { text: "他們的痛苦，他們的語言，他們的心，" },
        { text: "都是無法被死亡粗暴地搶走的。" },
        { text: "而這比起你的生命根本不算什麼，" },
        { text: "你的生命正在展開，它還是嶄新的。" },
      ],
      background_music: require("@/assets/compressed/Way_to_home.mp3"),
      background_image: require("@/assets/compressed/summer1.webp"),
    },
    {
      background_image: require("@/assets/compressed/white.webp"),
      background_music: require("@/assets/compressed/Way_to_home.mp3"),
      dialogs: [
        {
          text: "故事到這就結束了，你要回到現實了。",
          art: [
            {
              position: ["30%", "0", "10%", "0"],
              size: ["80%", "80%"],
              url: require("@/assets/compressed/Avatar_End_Animation.webp"),
              fit: "contain",
              hotspot: ["0%", "0%"],
            },
          ],
        },
        {
          text: "走之前，跟著我做：",
          art: [
            {
              position: ["30%", "0", "10%", "0"],
              size: ["80%", "80%"],
              url: require("@/assets/compressed/Avatar_End_Animation.webp"),
              fit: "contain",
              hotspot: ["0%", "0%"],
            },
          ],
        },
        {
          text: "把手掌貼在左胸口，使點勁！",
          art: [
            {
              position: ["-20%", "0", "-40%", "0"],
              size: ["200%", "200%"],
              url: require("@/assets/compressed/Avatar_Line_White.webp"),
              fit: "contain",
              hotspot: ["0%", "0%"],
              align: ["left", "center"],
              move: "15",
              className: "Avatar_Line",
            },
          ],
        },
        {
          text: "感受到嗎？",
          art: [
            {
              position: ["-20%", "0", "-15%", "0"],
              size: ["200%", "200%"],
              url: require("@/assets/compressed/Avatar_Line_White.webp"),
              fit: "contain",
              hotspot: ["0%", "0%"],
              align: ["left", "center"],
              move: "5",
              className: "Avatar_Line",
            },
          ],
        },
        {
          text: "你還有好多的勇氣和決心藏在你的心跳裏呢！",
          art: [
            {
              position: ["-20%", "0", "-15%", "0"],
              size: ["250%", "250%"],
              url: require("@/assets/compressed/Avatar_Line_White.webp"),
              fit: "contain",
              hotspot: ["0%", "0%"],
              align: ["left", "center"],
              move: "5",
              className: "Avatar_Line",
            },
          ],
        },
        {
          text: "我們每個人，從出生起就開始墜落……",
          art: [
            {
              position: ["-20%", "0", "-15%", "0"],
              size: ["250%", "250%"],
              url: require("@/assets/compressed/Avatar_Line_White.webp"),
              fit: "contain",
              hotspot: ["0%", "0%"],
              align: ["left", "center"],
              move: "5",
              className: "Avatar_Line",
            },
          ],
        },
        {
          text: "死亡沒法逃避，但是，我們可以用自己的方式活著。",
          art: [
            {
              position: ["-20%", "0", "-15%", "0"],
              size: ["250%", "250%"],
              url: require("@/assets/compressed/Avatar_Line_White.webp"),
              fit: "contain",
              hotspot: ["0%", "0%"],
              align: ["left", "center"],
              move: "5",
              className: "Avatar_Line",
            },
          ],
        },
        {
          text: "在落地之前，",
          art: [
            {
              position: ["-20%", "0", "-15%", "0"],
              size: ["250%", "250%"],
              url: {
                "zh-Hant": require("@/assets/compressed/Avatar_Line_White.webp"),
              },
              fit: "contain",
              hotspot: ["0%", "0%"],
              align: ["left", "center"],
              move: "15",
              opacity: "1",
              className: "Avatar_Line",
            },
            {
              position: ["-20%", "0", "-15%", "0"],
              size: ["250%", "250%"],
              url: {
                "zh-Hant": require("@/assets/compressed/Avatar_Line_Color2.webp"),
              },
              fit: "contain",
              hotspot: ["0%", "0%"],
              align: ["left", "center"],
              move: "15",
              opacity: "0",
              className: "Avatar_Line_Color",
            },
          ],
        },
        {
          text: "我們是自由的。",
          art: [
            {
              position: ["-20%", "0", "-15%", "0"],
              size: ["250%", "250%"],
              url: {
                "zh-Hant": require("@/assets/compressed/Avatar_Line_White.webp"),
              },
              fit: "contain",
              hotspot: ["0%", "0%"],
              align: ["left", "center"],
              move: "15",
              opacity: "0",
              className: "Avatar_Line",
            },
            {
              position: ["-20%", "0", "-15%", "0"],
              size: ["250%", "250%"],
              url: {
                "zh-Hant": require("@/assets/compressed/Avatar_Line_Color2.webp"),
              },
              fit: "contain",
              hotspot: ["0%", "0%"],
              align: ["left", "center"],
              move: "15",
              opacity: "1",
              className: "Avatar_Line_Color",
            },
          ],
        },
        {
          text: "(The end)",
          art: [
            {
              position: ["-20%", "0", "-15%", "0"],
              size: ["250%", "250%"],
              url: {
                "zh-Hant": require("@/assets/compressed/Avatar_Line_White.webp"),
              },
              fit: "contain",
              hotspot: ["0%", "0%"],
              align: ["left", "center"],
              move: "15",
              opacity: "0",
              className: "Avatar_Line",
            },
            {
              position: ["-20%", "0", "-15%", "0"],
              size: ["250%", "250%"],
              url: {
                "zh-Hant": require("@/assets/compressed/Avatar_Line_Color2.webp"),
              },
              fit: "contain",
              hotspot: ["0%", "0%"],
              align: ["left", "center"],
              move: "15",
              opacity: "1",
              className: "Avatar_Line_Color",
            },
          ],
        },
        {
          controll: "hidden_here",
          event: "outro_end",
        },
      ],
    },
  ],
};
