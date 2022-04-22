import clipboardy from "clipboardy";

let text = `嘿！hello！
聽得見嗎？
該起床了！已經是個夏天了。
你有仔細地聽他們說話嗎？
他們的痛苦，他們的語言，他們的心，
都是無法被死亡粗暴地搶走的。
而這比起你的生命根本不算什麽。
你的生命正在展開，它還是嶄新的。
故事到這就結束了。你要回到現實了。
走之前，跟著我做：
把手掌貼在左胸口，使點勁！
感受到嗎？
你還有好多的勇氣和決心藏在你的心跳裏呢！
在落地之前，
你是自由的。`;
text = text.split("\n");
let output = JSON.stringify(text.map((t) => ({ text: t })));
clipboardy.writeSync(output);
