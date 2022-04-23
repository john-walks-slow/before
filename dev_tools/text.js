import clipboardy from "clipboardy";

let text = `你在哪儿呢？
坐在电脑前？还是对着一块6.5英寸的发光玻璃？
坐在椅子上？还是说，你安稳地躺在被窝里了？
别装死呀。你还活着。我也还活着！`;
text = text.split("\n");
let output = JSON.stringify(text.map((t) => ({ text: t })));
clipboardy.writeSync(output);
