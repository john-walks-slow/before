import clipboardy from "clipboardy";

let text = `隨著一聲巨響，你掉進了一片黑色。
一片黑色……這有點不真實。
上一個瞬間，你明明還在屋頂呀，漫畫風格的屋頂。
你想起來了。你是滑下去了、然後就掉下去了。
你的腦袋昏昏沈沈的，好像做了一整天的夢。
當你睜開眼的時候，你發現自己在一片星空裏。
只能這麽形容了……你在一片星空裏。
這是一片你沒見過的星空，掛著一些白色的星星。
要是你的頻率與它們重疊，就能聽見它們的聲音。`;
text = text.split("\n");
let output = JSON.stringify(text.map((t) => ({ text: t })));
clipboardy.writeSync(output);
