(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const S="brightstart-html-css-progress-v1",E="brightstart-theme-v1",l=[{module:"HTML Basics",badge:"Tag Starter",title:"What tags do",explanation:"HTML tags are labels for page parts. Change one tag and the browser changes what people see.",xp:10,starter:`<h1>My first page</h1>
<p>This page is waking up.</p>`,tasks:[{text:"Add one more paragraph with your name or nickname.",check:e=>/<p[\s>][\s\S]*<\/p>/gi.test(e)&&(e.match(/<p[\s>]/gi)||[]).length>=2},{text:"Use an opening tag and a closing tag.",check:e=>/<[^/!][^>]*>[\s\S]*<\/[^>]+>/.test(e)}],hint:"A paragraph starts with <p> and ends with </p>. Try adding it under the first paragraph."},{module:"HTML Basics",badge:"Tag Starter",title:"Headings and paragraphs",explanation:"Headings name a section. Paragraphs hold regular text. Together they make a page easy to scan.",xp:10,starter:`<h1>About Me</h1>
<p>I am learning how websites are made.</p>`,tasks:[{text:"Add an <h2> heading for a hobby.",check:e=>/<h2[\s>][\s\S]*<\/h2>/i.test(e)},{text:"Add a paragraph under that heading.",check:e=>(e.match(/<p[\s>]/gi)||[]).length>=2}],hint:"Try <h2>My hobby</h2> and then a new <p> sentence below it."},{module:"HTML Basics",badge:"Tag Starter",title:"Links",explanation:"Links let a page jump somewhere else. The href part tells the browser where to go.",xp:10,starter:`<h1>Things I Like</h1>
<p>Here is a useful link:</p>
<a href="https://developer.mozilla.org/">Learn web basics</a>`,tasks:[{text:"Add a second link.",check:e=>(e.match(/<a\s/gi)||[]).length>=2},{text:"Make sure the link uses href.",check:e=>/<a\s+[^>]*href=/i.test(e)}],hint:'Copy the first <a href="...">text</a> line and change the words between the tags.'},{module:"HTML Basics",badge:"Tag Starter",title:"Images",explanation:"Images make a page feel real. The alt text describes the image if it cannot load.",xp:10,starter:`<h1>My Mood Board</h1>
<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 340'%3E%3Crect width='600' height='340' fill='%23dff3ed'/%3E%3Ccircle cx='455' cy='98' r='52' fill='%23f0a93b'/%3E%3Cpath d='M0 250 150 135l120 85 92-70 238 158v32H0z' fill='%231f7a6d'/%3E%3Cpath d='M0 284h600v56H0z' fill='%233e6ea8'/%3E%3C/svg%3E" alt="Sunrise over a field">
<p>A picture can set the feeling of a page.</p>`,tasks:[{text:"Change the image alt text.",check:e=>/alt=(["'])(?!(Sunrise over a field)\1).+?\1/i.test(e)},{text:"Add a sentence below the image.",check:e=>(e.match(/<p[\s>]/gi)||[]).length>=2}],hint:'Look for alt="Sunrise over a field" and replace the words inside the quotes.'},{module:"HTML Basics",badge:"Tag Starter",title:"Lists",explanation:"Lists are good for quick ideas. Use ul for the list and li for each item.",xp:10,starter:`<h1>My Favorites</h1>
<ul>
  <li>Favorite food</li>
  <li>Favorite song</li>
</ul>`,tasks:[{text:"Add a third list item.",check:e=>(e.match(/<li[\s>]/gi)||[]).length>=3},{text:"Keep the items inside the list.",check:e=>/<ul[\s\S]*<li[\s\S]*<\/li>[\s\S]*<\/ul>/i.test(e)}],hint:"Add a new <li>Favorite game</li> before the closing </ul> tag."},{module:"HTML Basics",badge:"Intro Builder",title:"Mini project: intro card",explanation:"Put the basics together. A small intro card can have a name, image, list, and link.",xp:20,starter:`<article>
  <h1>Hello, I am Alex</h1>
  <p>I am building my first web card.</p>
</article>`,tasks:[{text:"Add an image with alt text.",check:e=>/<img\s+[^>]*alt=/i.test(e)},{text:"Add a list with at least two items.",check:e=>/<ul[\s\S]*<\/ul>/i.test(e)&&(e.match(/<li[\s>]/gi)||[]).length>=2},{text:"Add one link.",check:e=>/<a\s+[^>]*href=/i.test(e)}],hint:"Build one piece at a time: image first, then a list, then a link."},{module:"Page Structure",badge:"Page Planner",title:"Header, main, footer",explanation:"Structure tags help people and tools understand the page. Header starts it, main holds the important part, footer closes it.",xp:10,starter:`<header>
  <h1>My Weekend</h1>
</header>
<main>
  <p>This page is about a good weekend.</p>
</main>`,tasks:[{text:"Add a footer.",check:e=>/<footer[\s>][\s\S]*<\/footer>/i.test(e)},{text:"Keep the main content inside <main>.",check:e=>/<main[\s>][\s\S]*<\/main>/i.test(e)}],hint:"Put <footer>Made by me</footer> under the closing </main> tag."},{module:"Page Structure",badge:"Page Planner",title:"Sections",explanation:"Sections group related content. Each section should usually have its own heading.",xp:10,starter:`<main>
  <section>
    <h2>My hobby</h2>
    <p>I like making things.</p>
  </section>
</main>`,tasks:[{text:"Add a second section.",check:e=>(e.match(/<section[\s>]/gi)||[]).length>=2},{text:"Give the new section a heading.",check:e=>(e.match(/<h2[\s>]/gi)||[]).length>=2}],hint:"Copy the whole section block, paste it below, and change the heading."},{module:"Page Structure",badge:"Page Planner",title:"Nesting",explanation:"Nesting means putting one element inside another. Clean nesting helps the browser read your page.",xp:10,starter:`<article>
  <h1>My Favorite Place</h1>
  <p>The park is quiet and bright.</p>
</article>`,tasks:[{text:"Add a section inside the article.",check:e=>/<article[\s\S]*<section[\s\S]*<\/section>[\s\S]*<\/article>/i.test(e)},{text:"Put a paragraph inside that section.",check:e=>/<section[\s\S]*<p[\s>][\s\S]*<\/p>[\s\S]*<\/section>/i.test(e)}],hint:"Place <section><p>One detail...</p></section> before the closing </article> tag."},{module:"Page Structure",badge:"Page Planner",title:"Simple navigation",explanation:"Navigation is a small set of links that helps people move around a page.",xp:10,starter:`<header>
  <h1>My Site</h1>
  <nav>
    <a href="#home">Home</a>
  </nav>
</header>
<main id="home">
  <p>Welcome.</p>
</main>`,tasks:[{text:"Add two more nav links.",check:e=>/<nav[\s\S]*<\/nav>/i.test(e)&&(e.match(/<a\s/gi)||[]).length>=3},{text:"Use # links for page sections.",check:e=>/href="#[^"]+"/i.test(e)}],hint:'Inside nav, add <a href="#hobbies">Hobbies</a> and <a href="#gallery">Gallery</a>.'},{module:"Page Structure",badge:"Hobby Page",title:"Mini project: hobby page",explanation:"A hobby page needs structure: a title, navigation, sections, and a footer.",xp:20,starter:`<header>
  <h1>My Hobby Page</h1>
</header>
<main>
  <section>
    <h2>Why I like it</h2>
    <p>It helps me feel focused.</p>
  </section>
</main>`,tasks:[{text:"Add a nav with at least two links.",check:e=>/<nav[\s\S]*<\/nav>/i.test(e)&&(e.match(/<a\s/gi)||[]).length>=2},{text:"Add at least two sections.",check:e=>(e.match(/<section[\s>]/gi)||[]).length>=2},{text:"Add a footer.",check:e=>/<footer[\s>][\s\S]*<\/footer>/i.test(e)}],hint:"Use header, nav, main, section, and footer like building blocks."},{module:"CSS Basics",badge:"Style Starter",title:"Selectors",explanation:"CSS selectors choose what to style. A selector like h1 changes every h1 on the page.",xp:10,starter:`<style>
h1 {
  color: darkgreen;
}
</style>
<h1>My Style Page</h1>
<p>This page has CSS.</p>`,tasks:[{text:"Add a CSS rule for p.",check:e=>/p\s*\{[\s\S]*\}/i.test(e)},{text:"Change at least one color.",check:e=>/color\s*:\s*[^;]+;/i.test(e)}],hint:"Inside the style tag, add p { color: navy; }."},{module:"CSS Basics",badge:"Style Starter",title:"Colors",explanation:"Color can show personality. Use it to make important parts stand out.",xp:10,starter:`<style>
body {
  background: white;
}
h1 {
  color: black;
}
</style>
<h1>Color Practice</h1>
<p>Change the mood with color.</p>`,tasks:[{text:"Change the page background.",check:e=>/background\s*:\s*(?!white\b)[^;]+;/i.test(e)},{text:"Change the heading color.",check:e=>/h1\s*\{[\s\S]*color\s*:\s*(?!black\b)[^;]+;[\s\S]*\}/i.test(e)}],hint:"Try background: lavender; and color: teal; inside the CSS rules."},{module:"CSS Basics",badge:"Style Starter",title:"Fonts",explanation:"Fonts change the voice of a page. Keep them readable and simple.",xp:10,starter:`<style>
body {
  font-family: Arial, sans-serif;
}
</style>
<h1>Readable Text</h1>
<p>Good pages are easy to read.</p>`,tasks:[{text:"Add a font-size rule.",check:e=>/font-size\s*:\s*[^;]+;/i.test(e)},{text:"Keep a font-family rule.",check:e=>/font-family\s*:\s*[^;]+;/i.test(e)}],hint:"Try p { font-size: 18px; } under the body rule."},{module:"CSS Basics",badge:"Style Starter",title:"Spacing",explanation:"Spacing gives your content room to breathe. Padding adds space inside an element. Margin adds space outside it.",xp:10,starter:`<style>
.card {
  background: white;
}
</style>
<div class="card">
  <h1>My Card</h1>
  <p>This card needs space.</p>
</div>`,tasks:[{text:"Add padding to the card.",check:e=>/\.card\s*\{[\s\S]*padding\s*:\s*[^;]+;[\s\S]*\}/i.test(e)},{text:"Add margin somewhere.",check:e=>/margin\s*:\s*[^;]+;/i.test(e)}],hint:"Inside .card, add padding: 20px; and margin: 20px;."},{module:"CSS Basics",badge:"Style Starter",title:"Borders",explanation:"Borders outline content. They help cards, images, and buttons feel separate from the page.",xp:10,starter:`<style>
.card {
  padding: 20px;
  background: white;
}
</style>
<div class="card">
  <h1>Border Practice</h1>
  <p>Make this card stand out.</p>
</div>`,tasks:[{text:"Add a border to .card.",check:e=>/\.card\s*\{[\s\S]*border\s*:\s*[^;]+;[\s\S]*\}/i.test(e)},{text:"Add border-radius for softer corners.",check:e=>/border-radius\s*:\s*[^;]+;/i.test(e)}],hint:"Try border: 2px solid teal; and border-radius: 8px;."},{module:"CSS Basics",badge:"Profile Styler",title:"Mini project: styled profile card",explanation:"Now style a personal card so it looks like a finished piece.",xp:20,starter:`<style>
.card {
  padding: 20px;
  background: white;
}
</style>
<article class="card">
  <h1>Alex</h1>
  <p>I like learning new skills.</p>
</article>`,tasks:[{text:"Style .card with padding, border, and border-radius.",check:e=>/\.card\s*\{[\s\S]*padding\s*:[\s\S]*border\s*:[\s\S]*border-radius\s*:/i.test(e)},{text:"Change text or background color.",check:e=>/(color|background)\s*:\s*[^;]+;/i.test(e)},{text:"Add one more detail to the card.",check:e=>(e.match(/<p[\s>]/gi)||[]).length>=2||/<ul[\s\S]*<\/ul>/i.test(e)}],hint:"Make the card first, then add one personal detail like a sentence or short list."},{module:"Layout",badge:"Layout Builder",title:"Box model",explanation:"Every element is a box. Content, padding, border, and margin decide how much room it uses.",xp:10,starter:`<style>
.box {
  background: lightyellow;
}
</style>
<div class="box">Box one</div>
<div class="box">Box two</div>`,tasks:[{text:"Add padding to .box.",check:e=>/\.box\s*\{[\s\S]*padding\s*:\s*[^;]+;[\s\S]*\}/i.test(e)},{text:"Add margin to .box.",check:e=>/\.box\s*\{[\s\S]*margin\s*:\s*[^;]+;[\s\S]*\}/i.test(e)},{text:"Add a border to .box.",check:e=>/\.box\s*\{[\s\S]*border\s*:\s*[^;]+;[\s\S]*\}/i.test(e)}],hint:"Inside .box, add padding, margin, and border on separate lines."},{module:"Layout",badge:"Layout Builder",title:"Flexbox basics",explanation:"Flexbox lines items up. It is great for cards, nav bars, and button rows.",xp:10,starter:`<style>
.row {
  background: #eef;
}
.card {
  padding: 12px;
  background: white;
}
</style>
<div class="row">
  <div class="card">One</div>
  <div class="card">Two</div>
  <div class="card">Three</div>
</div>`,tasks:[{text:"Make .row use display: flex.",check:e=>/\.row\s*\{[\s\S]*display\s*:\s*flex\s*;[\s\S]*\}/i.test(e)},{text:"Add a gap between items.",check:e=>/gap\s*:\s*[^;]+;/i.test(e)}],hint:"Inside .row, add display: flex; and gap: 12px;."},{module:"Layout",badge:"Layout Builder",title:"Responsive widths",explanation:"Responsive pages fit different screens. max-width keeps a page readable, and width: 100% lets it shrink.",xp:10,starter:`<style>
.page {
  background: white;
  padding: 20px;
}
</style>
<main class="page">
  <h1>Responsive Page</h1>
  <p>This should fit many screens.</p>
</main>`,tasks:[{text:"Add width: 100% to .page.",check:e=>/\.page\s*\{[\s\S]*width\s*:\s*100%\s*;[\s\S]*\}/i.test(e)},{text:"Add max-width to .page.",check:e=>/\.page\s*\{[\s\S]*max-width\s*:\s*[^;]+;[\s\S]*\}/i.test(e)},{text:"Center it with margin.",check:e=>/margin\s*:\s*[^;]*auto[^;]*;/i.test(e)}],hint:"Try width: 100%; max-width: 700px; margin: 0 auto;."},{module:"Layout",badge:"Gallery Maker",title:"Mini project: gallery page",explanation:"A gallery is a perfect flexbox practice project. Cards line up, wrap, and keep space between them.",xp:20,starter:`<style>
.gallery {
  display: flex;
}
.item {
  background: white;
  padding: 12px;
}
</style>
<section class="gallery">
  <div class="item">Photo idea</div>
  <div class="item">Music idea</div>
  <div class="item">Game idea</div>
</section>`,tasks:[{text:"Add gap to .gallery.",check:e=>/\.gallery\s*\{[\s\S]*gap\s*:\s*[^;]+;[\s\S]*\}/i.test(e)},{text:"Allow wrapping with flex-wrap.",check:e=>/flex-wrap\s*:\s*wrap\s*;/i.test(e)},{text:"Style .item with border or border-radius.",check:e=>/\.item\s*\{[\s\S]*(border|border-radius)\s*:[\s\S]*\}/i.test(e)}],hint:"Add gap and flex-wrap to the gallery. Then make each item look like a small card."},{module:"Final Project",badge:"Website Finisher",title:"Build a personal website",explanation:"Use everything together: structure, text, style, layout, and a few personal details.",xp:30,starter:`<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
}
header {
  padding: 24px;
  background: #dff3ed;
}
main {
  padding: 24px;
}
</style>
<header>
  <h1>My Personal Website</h1>
  <nav>
    <a href="#home">Home</a>
  </nav>
</header>
<main id="home">
  <section>
    <h2>About me</h2>
    <p>I am learning HTML and CSS.</p>
  </section>
</main>`,tasks:[{text:"Add nav links for hobbies and gallery.",check:e=>/href="#hobbies"/i.test(e)&&/href="#gallery"/i.test(e)},{text:"Add sections with ids hobbies and gallery.",check:e=>/<section[^>]*id=["']hobbies["']/i.test(e)&&/<section[^>]*id=["']gallery["']/i.test(e)},{text:"Use flexbox or responsive width.",check:e=>/display\s*:\s*flex\s*;|max-width\s*:/i.test(e)},{text:"Add a footer.",check:e=>/<footer[\s>][\s\S]*<\/footer>/i.test(e)}],hint:"Add two sections first. Then style the page. Finish with a footer at the bottom."},{module:"JavaScript Basics",badge:"Script Starter",title:"What JavaScript does",explanation:"JavaScript can make a page react. Start with a script that writes a message to the console.",mode:"console",xp:10,starter:`<h1>JavaScript is awake</h1>
<p>The page can run code now.</p>
<script>
  console.log("Hello from JavaScript!");
<\/script>`,tasks:[{text:"Keep a <script> tag in the page.",check:e=>/<script[\s>][\s\S]*<\/script>/i.test(e)},{text:"Log a new message to the console.",check:e=>/console\.log\s*\(\s*["'`](?!Hello from JavaScript!)[\s\S]+?["'`]\s*\)/i.test(e)}],hint:'Change the words inside console.log("..."). The console output panel will show your message.'},{module:"JavaScript Basics",badge:"Script Starter",title:"Variables",explanation:"A variable is a named box for a value. Use const when the value does not need to change.",mode:"console",xp:10,starter:`<h1>Variable Practice</h1>
<script>
  const name = "Alex";
  console.log(name);
<\/script>`,tasks:[{text:"Create a const variable.",check:e=>/const\s+\w+\s*=\s*["'`][\s\S]+?["'`]\s*;/i.test(e)},{text:"Change the value to a favorite thing or name.",check:e=>/const\s+\w+\s*=\s*["'`](?!Alex)[\s\S]+?["'`]\s*;/i.test(e)},{text:"Log the variable.",check:e=>/console\.log\s*\(\s*\w+\s*\)/i.test(e)}],hint:'Try const favorite = "music"; and then console.log(favorite);.'},{module:"JavaScript Basics",badge:"Script Starter",title:"Text and numbers",explanation:"JavaScript can combine words and numbers. This is useful for scores, ages, counts, and labels.",mode:"console",xp:10,starter:`<h1>Text and Numbers</h1>
<script>
  const points = 5;
  console.log("Points: " + points);
<\/script>`,tasks:[{text:"Store a number in a const variable.",check:e=>/const\s+\w+\s*=\s*\d+\s*;/i.test(e)},{text:"Use + to combine text and a value.",check:e=>/console\.log\s*\([\s\S]*["'`][\s\S]+?["'`]\s*\+\s*\w+[\s\S]*\)/i.test(e)},{text:"Change the number from 5.",check:e=>!/const\s+points\s*=\s*5\s*;/i.test(e)&&/const\s+\w+\s*=\s*\d+\s*;/i.test(e)}],hint:"Change points to a new number, then log a sentence plus the variable."},{module:"JavaScript Basics",badge:"Function Maker",title:"Functions",explanation:"A function is a named action. You can run it whenever you need that action.",mode:"console",xp:10,starter:`<h1>Function Practice</h1>
<script>
  function sayHello() {
    console.log("Hello!");
  }

  sayHello();
<\/script>`,tasks:[{text:"Keep a function in the script.",check:e=>/function\s+\w+\s*\(\s*\)\s*\{[\s\S]*\}/i.test(e)},{text:"Change what the function logs.",check:e=>/console\.log\s*\(\s*["'`](?!Hello!)[\s\S]+?["'`]\s*\)/i.test(e)},{text:"Call the function after creating it.",check:e=>/function\s+(\w+)\s*\(\s*\)[\s\S]*\}\s*\1\s*\(\s*\)\s*;/i.test(e)}],hint:"Change the message inside the function, then make sure the function name appears again with ()."},{module:"Page Interaction",badge:"DOM Explorer",title:"Select an element",explanation:"The DOM is the page that JavaScript can touch. querySelector chooses one element from the page.",mode:"both",xp:10,starter:`<h1 id="title">Pick me</h1>
<p>JavaScript can find page elements.</p>
<script>
  const title = document.querySelector("#title");
  console.log(title.textContent);
<\/script>`,tasks:[{text:"Use document.querySelector.",check:e=>/document\.querySelector\s*\(/i.test(e)},{text:"Select an element by id with #.",check:e=>/querySelector\s*\(\s*["'`]#[\w-]+["'`]\s*\)/i.test(e)},{text:"Log the selected element text.",check:e=>/console\.log\s*\([\s\S]*\.textContent[\s\S]*\)/i.test(e)}],hint:'The # means id. document.querySelector("#title") finds the element with id="title".'},{module:"Page Interaction",badge:"DOM Explorer",title:"Change text",explanation:"textContent changes the words inside an element. This is one of the fastest ways to make a page feel alive.",mode:"both",xp:10,starter:`<h1 id="message">Old message</h1>
<button>Message button</button>
<script>
  const message = document.querySelector("#message");
  message.textContent = "New message from JavaScript";
<\/script>`,tasks:[{text:"Select #message with querySelector.",check:e=>/querySelector\s*\(\s*["'`]#message["'`]\s*\)/i.test(e)},{text:"Use .textContent to change the page.",check:e=>/\.textContent\s*=\s*["'`][\s\S]+?["'`]\s*;/i.test(e)},{text:"Change the starter message text.",check:e=>!/New message from JavaScript/i.test(e)&&/\.textContent\s*=/i.test(e)}],hint:"Edit the words after message.textContent = and watch the preview update."},{module:"Page Interaction",badge:"DOM Explorer",title:"Change styles",explanation:"JavaScript can change CSS through the style property. Use it for quick visual reactions.",mode:"both",xp:10,starter:`<h1 id="title">Style me</h1>
<p>JavaScript can change color.</p>
<script>
  const title = document.querySelector("#title");
  title.style.color = "teal";
<\/script>`,tasks:[{text:"Select an element with querySelector.",check:e=>/document\.querySelector\s*\(/i.test(e)},{text:"Use .style to change CSS.",check:e=>/\.style\.[a-zA-Z]+\s*=/i.test(e)},{text:"Change color or background with JavaScript.",check:e=>/\.style\.(color|background|backgroundColor)\s*=\s*["'`][\s\S]+?["'`]\s*;/i.test(e)}],hint:'Try title.style.backgroundColor = "lightyellow"; or change the color value.'},{module:"Page Interaction",badge:"Click Handler",title:"Button clicks",explanation:"addEventListener lets JavaScript wait for a click, then run code.",mode:"both",xp:10,starter:`<h1 id="message">Click the button</h1>
<button id="changeButton">Change message</button>
<script>
  const message = document.querySelector("#message");
  const button = document.querySelector("#changeButton");

  button.addEventListener("click", function () {
    message.textContent = "Button clicked!";
    console.log("Clicked");
  });
<\/script>`,tasks:[{text:"Select the button with querySelector.",check:e=>/querySelector\s*\(\s*["'`]#changeButton["'`]\s*\)/i.test(e)},{text:"Use addEventListener for a click.",check:e=>/\.addEventListener\s*\(\s*["'`]click["'`]/i.test(e)},{text:"Change text inside the click function.",check:e=>/addEventListener\s*\([\s\S]*\.textContent\s*=/i.test(e)}],hint:"The code inside the click function runs only after the button is clicked in the preview."},{module:"Mini Projects",badge:"Mood Maker",title:"Mood button",explanation:"Make one button change the mood of the page with a message and a color.",mode:"both",xp:20,starter:`<style>
  body { transition: background 0.2s ease; }
</style>
<h1 id="moodText">How do you feel?</h1>
<button id="moodButton">Change mood</button>
<script>
  const moodText = document.querySelector("#moodText");
  const moodButton = document.querySelector("#moodButton");

  moodButton.addEventListener("click", function () {
    moodText.textContent = "Focused and ready";
    document.body.style.background = "#dff3ed";
  });
<\/script>`,tasks:[{text:"Use a click event on #moodButton.",check:e=>/#moodButton/i.test(e)&&/addEventListener\s*\(\s*["'`]click["'`]/i.test(e)},{text:"Change the mood text on click.",check:e=>/moodText\.textContent\s*=\s*["'`][\s\S]+?["'`]\s*;/i.test(e)},{text:"Change a style on click.",check:e=>/addEventListener\s*\([\s\S]*\.style\.[a-zA-Z]+\s*=/i.test(e)}],hint:"Change the text and background color inside the click function."},{module:"Mini Projects",badge:"Counter Builder",title:"Counter",explanation:"A counter uses a number variable and a button click. It is a small but real app pattern.",mode:"both",xp:20,starter:`<h1>Counter</h1>
<p id="count">0</p>
<button id="addButton">Add one</button>
<script>
  let count = 0;
  const countText = document.querySelector("#count");
  const addButton = document.querySelector("#addButton");

  addButton.addEventListener("click", function () {
    count = count + 1;
    countText.textContent = count;
    console.log(count);
  });
<\/script>`,tasks:[{text:"Create a count variable with let.",check:e=>/let\s+count\s*=\s*\d+\s*;/i.test(e)},{text:"Increase the count on click.",check:e=>/count\s*=\s*count\s*\+\s*1\s*;|count\+\+/i.test(e)},{text:"Show the count with textContent.",check:e=>/countText\.textContent\s*=\s*count\s*;/i.test(e)}],hint:"The variable changes first, then the page text changes to match the variable."},{module:"Mini Projects",badge:"List Builder",title:"List maker",explanation:"JavaScript can create new page elements. Use it to add a new item to a list.",mode:"both",xp:20,starter:`<h1>My Ideas</h1>
<ul id="ideaList">
  <li>Build a profile card</li>
</ul>
<button id="addIdea">Add idea</button>
<script>
  const ideaList = document.querySelector("#ideaList");
  const addIdea = document.querySelector("#addIdea");

  addIdea.addEventListener("click", function () {
    const item = document.createElement("li");
    item.textContent = "Practice JavaScript";
    ideaList.append(item);
  });
<\/script>`,tasks:[{text:"Create an li with document.createElement.",check:e=>/document\.createElement\s*\(\s*["'`]li["'`]\s*\)/i.test(e)},{text:"Set the new item text.",check:e=>/item\.textContent\s*=\s*["'`][\s\S]+?["'`]\s*;/i.test(e)},{text:"Append the item to the list.",check:e=>/ideaList\.append\s*\(\s*item\s*\)/i.test(e)}],hint:"Create the item, give it text, then append it to the list."},{module:"Mini Projects",badge:"Interactive Profile",title:"Final JS project: interactive profile card",explanation:"Finish with a card that reacts to a button click using text, style, and console output.",mode:"both",xp:30,starter:`<style>
  .card {
    max-width: 360px;
    padding: 20px;
    border: 2px solid #1f7a6d;
    border-radius: 8px;
    background: white;
  }
</style>
<article class="card">
  <h1 id="name">Alex</h1>
  <p id="status">Learning HTML, CSS, and JavaScript.</p>
  <button id="profileButton">Update profile</button>
</article>
<script>
  const name = document.querySelector("#name");
  const status = document.querySelector("#status");
  const button = document.querySelector("#profileButton");

  button.addEventListener("click", function () {
    name.textContent = "Future Web Builder";
    status.textContent = "I can make pages interactive.";
    status.style.color = "#1f7a6d";
    console.log("Profile updated");
  });
<\/script>`,tasks:[{text:"Use querySelector for the card parts.",check:e=>(e.match(/document\.querySelector\s*\(/gi)||[]).length>=3},{text:"Use a button click event.",check:e=>/\.addEventListener\s*\(\s*["'`]click["'`]/i.test(e)},{text:"Change text and style on click.",check:e=>/addEventListener\s*\([\s\S]*\.textContent\s*=[\s\S]*\.style\.[a-zA-Z]+\s*=/i.test(e)},{text:"Log a completion message.",check:e=>/console\.log\s*\(\s*["'`][\s\S]+?["'`]\s*\)/i.test(e)}],hint:"Keep the click function small: change the name, change the status, change one style, then log a message."},{module:"Real Web Skills",badge:"Form Starter",title:"Form basics",explanation:"Forms collect information. A good small form uses a label, an input, and a button.",mode:"preview",xp:10,starter:`<h1>Contact Practice</h1>
<form>
  <label for="name">Your name</label>
  <input id="name" type="text">
  <button type="button">Say hello</button>
</form>`,tasks:[{text:"Keep a form on the page.",check:e=>/<form[\s>][\s\S]*<\/form>/i.test(e)},{text:"Add an input inside the form.",check:e=>/<form[\s\S]*<input\s+[^>]*>[\s\S]*<\/form>/i.test(e)},{text:'Use a label with for="name" and an input with id="name".',check:e=>/<label\s+[^>]*for=["']name["'][^>]*>/i.test(e)&&/<input\s+[^>]*id=["']name["'][^>]*>/i.test(e)},{text:"Keep a button in the form.",check:e=>/<form[\s\S]*<button[\s\S]*<\/button>[\s\S]*<\/form>/i.test(e)}],hint:'A label points to an input when label for="name" matches input id="name".'},{module:"Real Web Skills",badge:"Form Starter",title:"Accessible labels",explanation:"Labels make forms easier to click, read, and understand. Helpful button text also tells users what will happen.",mode:"preview",xp:10,starter:`<h1>Favorite Thing</h1>
<form>
  <label for="favorite">Favorite thing</label>
  <input id="favorite" type="text">
  <button type="button">Save favorite</button>
</form>`,tasks:[{text:"Use a label with a for attribute.",check:e=>/<label\s+[^>]*for=["'][\w-]+["'][^>]*>[\s\S]*<\/label>/i.test(e)},{text:"Use a matching input id.",check:e=>{const t=e.match(/<label\s+[^>]*for=["']([\w-]+)["'][^>]*>/i);return!!t&&new RegExp(`<input\\\\s+[^>]*id=["']${t[1]}["']`,"i").test(e)}},{text:"Use button text that says the action.",check:e=>/<button[^>]*>(?!(click|go|ok)\s*<\/button>)[\s\S]{5,}<\/button>/i.test(e)}],hint:"Avoid vague button words like OK. Try Save favorite, Send message, or Show greeting."},{module:"Real Web Skills",badge:"Grid Builder",title:"CSS Grid",explanation:"CSS Grid places items in rows and columns. It is useful for galleries, dashboards, and card layouts.",mode:"preview",xp:10,starter:`<style>
.grid {
  display: grid;
}
.card {
  padding: 16px;
  background: #dff3ed;
}
</style>
<section class="grid">
  <div class="card">HTML</div>
  <div class="card">CSS</div>
  <div class="card">JavaScript</div>
</section>`,tasks:[{text:"Use display: grid on .grid.",check:e=>/\.grid\s*\{[\s\S]*display\s*:\s*grid\s*;[\s\S]*\}/i.test(e)},{text:"Add grid-template-columns.",check:e=>/grid-template-columns\s*:\s*[^;]+;/i.test(e)},{text:"Add a gap between cards.",check:e=>/gap\s*:\s*[^;]+;/i.test(e)}],hint:"Inside .grid, add grid-template-columns: 1fr 1fr 1fr; and gap: 12px;."},{module:"Real Web Skills",badge:"Grid Builder",title:"Responsive grid",explanation:"A responsive grid can make cards fit wide and narrow screens without rewriting the layout.",mode:"preview",xp:10,starter:`<style>
.gallery {
  display: grid;
  gap: 12px;
}
.item {
  padding: 16px;
  border: 2px solid #1f7a6d;
  border-radius: 8px;
}
</style>
<section class="gallery">
  <div class="item">Profile</div>
  <div class="item">Hobby</div>
  <div class="item">Contact</div>
</section>`,tasks:[{text:"Use repeat() in grid-template-columns.",check:e=>/grid-template-columns\s*:\s*repeat\s*\(/i.test(e)},{text:"Use minmax() so cards can shrink and grow.",check:e=>/minmax\s*\(\s*[^,]+,\s*[^)]+\)/i.test(e)},{text:"Style each .item like a card.",check:e=>/\.item\s*\{[\s\S]*(border|border-radius|background)\s*:[\s\S]*\}/i.test(e)}],hint:"Try grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));."},{module:"Real Web Skills",badge:"Grid Builder",title:"Media queries",explanation:"Media queries let CSS change at different screen widths. Use them when a layout needs a special rule on small screens.",mode:"preview",xp:10,starter:`<style>
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 12px;
}
.card {
  padding: 16px;
  border: 2px solid #1f7a6d;
  border-radius: 8px;
  background: #dff3ed;
}
</style>
<section class="cards">
  <article class="card">Profile</article>
  <article class="card">Hobbies</article>
  <article class="card">Contact</article>
</section>`,tasks:[{text:"Add an @media rule.",check:e=>/@media\s*\([^)]+\)\s*\{/i.test(e)},{text:"Use max-width inside the media query.",check:e=>/@media\s*\(\s*max-width\s*:\s*[^)]+\)/i.test(e)},{text:"Change layout or spacing inside the media query.",check:e=>/@media[\s\S]*\{[\s\S]*(grid-template-columns|gap|padding|font-size)\s*:\s*[^;]+;[\s\S]*\}/i.test(e)},{text:"Use the Mobile preview preset to check it.",check:e=>/@media\s*\(\s*max-width\s*:\s*[^)]+\)/i.test(e)&&/grid-template-columns\s*:\s*1fr\s*;/i.test(e)}],hint:"Try @media (max-width: 600px) { .cards { grid-template-columns: 1fr; } }, then click Mobile in the preview."},{module:"Real Web Skills",badge:"Logic Starter",title:"Conditions",explanation:"Conditions let JavaScript choose. if and else are useful when the page should react differently.",mode:"console",xp:10,starter:`<h1>Decision Practice</h1>
<script>
  const energy = 7;

  if (energy >= 5) {
    console.log("Ready to build");
  } else {
    console.log("Take a short break");
  }
<\/script>`,tasks:[{text:"Use an if statement.",check:e=>/if\s*\([\s\S]+?\)\s*\{/i.test(e)},{text:"Use else for the other choice.",check:e=>/else\s*\{/i.test(e)},{text:"Base the condition on a value.",check:e=>/const\s+\w+\s*=\s*[^;]+;[\s\S]*if\s*\(\s*\w+\s*(>=|<=|>|<|===|!==)/i.test(e)}],hint:"Change the energy number and watch which message logs."},{module:"Real Web Skills",badge:"Logic Starter",title:"Form message",explanation:"JavaScript can read form input and show a custom message on the page.",mode:"both",xp:20,starter:`<h1>Greeting Form</h1>
<label for="learnerName">Name</label>
<input id="learnerName" type="text" value="Alex">
<button id="greetButton" type="button">Show greeting</button>
<p id="result">Your greeting will appear here.</p>
<script>
  const input = document.querySelector("#learnerName");
  const button = document.querySelector("#greetButton");
  const result = document.querySelector("#result");

  button.addEventListener("click", function () {
    result.textContent = "Hello, " + input.value + "!";
  });
<\/script>`,tasks:[{text:"Select the input with querySelector.",check:e=>/querySelector\s*\(\s*["'`]#learnerName["'`]\s*\)/i.test(e)},{text:"Read the input with .value.",check:e=>/\.value/i.test(e)},{text:"Use a click event.",check:e=>/\.addEventListener\s*\(\s*["'`]click["'`]/i.test(e)},{text:"Show the message with textContent.",check:e=>/result\.textContent\s*=/i.test(e)}],hint:"The button click should read input.value and put it into result.textContent."},{module:"Real Web Skills",badge:"Array Builder",title:"Arrays",explanation:"An array is a list of values. Use arrays for favorites, cards, menu items, and project ideas.",mode:"console",xp:10,starter:`<h1>Array Practice</h1>
<script>
  const skills = ["HTML", "CSS", "JavaScript"];
  console.log(skills);
<\/script>`,tasks:[{text:"Create an array with square brackets.",check:e=>/const\s+\w+\s*=\s*\[[\s\S]*\]\s*;/i.test(e)},{text:"Include at least three items.",check:e=>{const t=e.match(/\[[\s\S]*?\]/);return!!t&&(t[0].match(/["'`][\s\S]*?["'`]/g)||[]).length>=3}},{text:"Log the array.",check:e=>/console\.log\s*\(\s*\w+\s*\)/i.test(e)}],hint:'Try const favorites = ["music", "games", "coding"]; then log favorites.'},{module:"Real Web Skills",badge:"Array Builder",title:"Render an array",explanation:"Rendering an array means turning list data into page elements people can see.",mode:"both",xp:20,starter:`<h1>Skill List</h1>
<ul id="skillList"></ul>
<script>
  const skills = ["HTML", "CSS", "JavaScript"];
  const skillList = document.querySelector("#skillList");

  skills.forEach(function (skill) {
    const item = document.createElement("li");
    item.textContent = skill;
    skillList.append(item);
  });
<\/script>`,tasks:[{text:"Create an array.",check:e=>/const\s+\w+\s*=\s*\[[\s\S]*\]\s*;/i.test(e)},{text:"Loop through the array with forEach or for.",check:e=>/\.forEach\s*\(|for\s*\(/i.test(e)},{text:"Create a list item.",check:e=>/document\.createElement\s*\(\s*["'`]li["'`]\s*\)/i.test(e)},{text:"Append each item to the list.",check:e=>/\.append\s*\(\s*item\s*\)/i.test(e)}],hint:"The pattern is: loop, create li, set textContent, append."},{module:"Real Web Skills",badge:"Debug Helper",title:"Debug a broken button",explanation:"This lesson is broken on purpose. Debugging means reading the clue, finding the mismatch, and trying one fix.",mode:"both",xp:20,starter:`<h1 id="debugMessage">Button not fixed yet</h1>
<button id="fixButton">Fix me</button>
<script>
  // Broken on purpose: the selector below does not match the button id.
  const message = document.querySelector("#debugMessage");
  const button = document.querySelector("#fixedButton");

  if (button) {
    button.addEventListener("click", function () {
      message.textContent = "The button works now";
      console.log("Bug fixed");
    });
  } else {
    console.log("Selector needs a fix");
  }
<\/script>`,tasks:[{text:"Fix the button selector to #fixButton.",check:e=>/querySelector\s*\(\s*["'`]#fixButton["'`]\s*\)/i.test(e)},{text:"Keep a click event on the button.",check:e=>/\.addEventListener\s*\(\s*["'`]click["'`]/i.test(e)},{text:"Change the message on click.",check:e=>/message\.textContent\s*=\s*["'`][\s\S]+?["'`]\s*;/i.test(e)},{text:"Log that the bug is fixed.",check:e=>/console\.log\s*\(\s*["'`][\s\S]*fix[\s\S]*["'`]\s*\)/i.test(e)}],hint:"The button id is fixButton. The querySelector must use the same id with #."},{module:"Real Web Skills",badge:"Contact Card Maker",title:"Final project: interactive contact card",explanation:"Combine forms, labels, conditions, DOM updates, styling, and helpful text in one real mini project.",mode:"both",xp:30,starter:`<style>
  .contact-card {
    max-width: 420px;
    padding: 20px;
    border: 2px solid #1f7a6d;
    border-radius: 8px;
    background: #fffaf2;
  }
  label, input, button {
    display: block;
    margin-top: 10px;
  }
</style>
<article class="contact-card">
  <h1>Contact Card</h1>
  <label for="contactName">Name</label>
  <input id="contactName" type="text" value="Alex">
  <button id="contactButton" type="button">Create card message</button>
  <p id="contactResult" aria-live="polite">Your message will appear here.</p>
</article>
<script>
  const nameInput = document.querySelector("#contactName");
  const button = document.querySelector("#contactButton");
  const result = document.querySelector("#contactResult");

  button.addEventListener("click", function () {
    if (nameInput.value.length > 0) {
      result.textContent = "Thanks, " + nameInput.value + ". Your card is ready.";
    } else {
      result.textContent = "Please add a name first.";
    }
    console.log("Contact card updated");
  });
<\/script>`,tasks:[{text:"Use a labeled input.",check:e=>/<label\s+[^>]*for=["']contactName["'][^>]*>/i.test(e)&&/<input\s+[^>]*id=["']contactName["'][^>]*>/i.test(e)},{text:"Use a button click event.",check:e=>/\.addEventListener\s*\(\s*["'`]click["'`]/i.test(e)},{text:"Use if and else for the message.",check:e=>/if\s*\([\s\S]+?\)\s*\{[\s\S]*\}\s*else\s*\{/i.test(e)},{text:"Show the result with textContent.",check:e=>/result\.textContent\s*=/i.test(e)},{text:"Include accessible live feedback.",check:e=>/aria-live\s*=\s*["']polite["']/i.test(e)},{text:"Check the card with Mobile, Tablet, and Desktop preview sizes.",check:e=>/max-width\s*:\s*[^;]+;|@media\s*\(/i.test(e)}],hint:"Use the input value to decide which message should appear, then test the card with Mobile, Tablet, and Desktop preview sizes."}],o={htmlBasics:[{title:"HTML elements guide",description:"Look up tags like headings, paragraphs, links, images, and lists.",url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements"},{title:"Intro to HTML",description:"A beginner-friendly path for understanding elements and attributes.",url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content"}],pageStructure:[{title:"Document and website structure",description:"Learn how header, navigation, main content, sections, and footer fit together.",url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_documents"},{title:"HTML sectioning elements",description:"Reference for structure tags such as section, article, nav, header, and footer.",url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements#content_sectioning"}],cssBasics:[{title:"CSS first steps",description:"A gentle introduction to selectors, colors, fonts, spacing, and borders.",url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics"},{title:"Learn CSS",description:"A deeper CSS course with topics he can revisit when ready.",url:"https://web.dev/learn/css"}],layout:[{title:"CSS box model",description:"Understand content, padding, border, and margin.",url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model"},{title:"Flexbox guide",description:"A visual reference for lining up cards, nav links, and galleries.",url:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/"}],finalProject:[{title:"Planning a simple website",description:"Review how pages are structured before building the final personal site.",url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_documents"},{title:"Responsive design basics",description:"Learn how websites can adapt to different screen sizes.",url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design"}],jsBasics:[{title:"JavaScript first steps",description:"Beginner-friendly JavaScript basics for writing your first scripts.",url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting"},{title:"JavaScript reference",description:"A deeper reference for JavaScript syntax and built-in features.",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference"}],domBasics:[{title:"DOM scripting introduction",description:"Learn how JavaScript finds and changes page elements.",url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting"},{title:"querySelector reference",description:"Reference for selecting page elements with CSS-style selectors.",url:"https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector"}],events:[{title:"Event listeners",description:"Reference for making buttons and other elements respond to actions.",url:"https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"}],functions:[{title:"Functions",description:"Learn how to make named actions that can be reused.",url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Functions"}],forms:[{title:"Web forms",description:"Learn the core form elements: labels, inputs, and buttons.",url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms"},{title:"The label element",description:"Reference for connecting labels to form controls.",url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label"}],grid:[{title:"CSS Grid layout",description:"Learn how rows, columns, and gaps build page layouts.",url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids"},{title:"grid-template-columns",description:"Reference for setting grid columns, including repeat and minmax.",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns"}],mediaQueries:[{title:"CSS media queries",description:"Learn how CSS changes styles based on screen size.",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries"}],accessibility:[{title:"Accessibility basics",description:"Learn small habits that make pages easier for more people to use.",url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility"},{title:"aria-live",description:"Reference for announcing changing page messages to assistive technology.",url:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live"}],conditions:[{title:"Making decisions in code",description:"Learn if, else, and other condition patterns.",url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals"}],arrays:[{title:"Arrays",description:"Learn how JavaScript stores and works with lists of values.",url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Arrays"},{title:"Array forEach",description:"Reference for running a function once for each array item.",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"}],debugging:[{title:"What went wrong?",description:"A beginner debugging guide for JavaScript errors.",url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_went_wrong"}],links:[{title:"The anchor element",description:"Deep reference for links and the href attribute.",url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a"}],images:[{title:"The image element",description:"Learn how src and alt make images work well.",url:"https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img"}],selectors:[{title:"CSS selectors",description:"Understand how CSS chooses which HTML elements to style.",url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors"}],colors:[{title:"CSS color values",description:"Explore named colors, hex colors, and other color formats.",url:"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value"}]},a=ae(U());let c=Math.min(a.currentIndex||0,l.length-1),p=a.lessonCode[c]||l[c].starter;const T=document.querySelector("#moduleList"),N=document.querySelector("#moduleName"),J=document.querySelector("#lessonTitle"),F=document.querySelector("#lessonExplanation"),v=document.querySelector("#taskList"),j=document.querySelector("#hintButton"),x=document.querySelector("#hintText"),O=document.querySelector("#referenceDrawer"),A=document.querySelector("#referenceList"),m=document.querySelector("#feedback"),d=document.querySelector("#codeEditor"),B=document.querySelector("#previewFrame"),w=document.querySelector("#previewWidth"),D=document.querySelector("#previewWidthLabel"),q=[...document.querySelectorAll("[data-preview-width]")],$=document.querySelector("#consolePanel"),h=document.querySelector("#consoleOutput"),G=document.querySelector("#checkWork"),g=document.querySelector("#completeLesson"),K=document.querySelector("#resetLesson"),Y=document.querySelector("#nextLesson"),Z=document.querySelector("#startNext"),Q=document.querySelector("#progressText"),V=document.querySelector("#xpText"),X=document.querySelector("#streakText"),ee=document.querySelector("#progressBar"),M=document.querySelector("#badgeShelf"),P=document.querySelector("#savedState"),te=document.querySelector("#resetProgress"),b=document.querySelector("#themeToggle"),f=document.querySelector("#breakDialog"),ne=document.querySelector("#closeBreak"),se=document.querySelector("#continueLearning");function U(){const e={completed:[],badges:[],currentIndex:0,lessonCode:{},xp:0,streak:0,lastSessionDate:""};try{return{...e,...JSON.parse(localStorage.getItem(S)||"{}")}}catch{return e}}function ae(e){let t=!1;return Object.entries(e.lessonCode||{}).forEach(([n,r])=>{const s=l[Number(n)],i=r.includes('querySelector("#fixedButton")')&&!r.includes("Selector needs a fix");s&&i&&(e.lessonCode[n]=s.starter,t=!0)}),t&&localStorage.setItem(S,JSON.stringify(e)),e}function k(){localStorage.setItem(S,JSON.stringify(a)),P.textContent="Saved on this device"}function I(e){const t=e==="dark";document.body.classList.toggle("dark-theme",t),b.innerHTML=t?'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>':'<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.99 13.14A8.2 8.2 0 0 1 10.86 3.01 8.5 8.5 0 1 0 20.99 13.14Z"></path></svg>',b.setAttribute("aria-label",t?"Switch to light theme":"Switch to dark theme"),b.setAttribute("aria-pressed",String(t)),localStorage.setItem(E,t?"dark":"light")}function oe(){return l.reduce((e,t,n)=>(e[t.module]||(e[t.module]=[]),e[t.module].push({...t,index:n}),e),{})}function _(){T.innerHTML="",Object.entries(oe()).forEach(([e,t])=>{const n=document.createElement("section");n.className="module-block";const r=document.createElement("div");r.className="module-title",r.textContent=e,n.append(r);const s=document.createElement("div");s.className="lesson-nav",t.forEach(i=>{const u=document.createElement("button");u.type="button",u.className=[i.index===c?"active":"",a.completed.includes(i.index)?"completed":""].join(" ").trim(),u.innerHTML=`<span class="lesson-dot">${a.completed.includes(i.index)?"✓":i.index+1}</span><span>${i.title}</span>`,u.addEventListener("click",()=>C(i.index)),s.append(u)}),n.append(s),T.append(n)})}function C(e){c=e,a.currentIndex=e,p=a.lessonCode[e]||l[e].starter,k(),y()}function y(){const e=l[c];N.textContent=e.module,J.textContent=e.title,F.textContent=e.explanation,x.textContent=e.hint,x.hidden=!0,O.open=!1,ce(e),d.value=p,m.className="feedback",m.textContent=a.completed.includes(c)?"Lesson complete. You can keep experimenting or move on.":"Make a small change, then check your work.",g.disabled=a.completed.includes(c),v.innerHTML="",e.tasks.forEach(t=>{const n=document.createElement("li");n.textContent=t.text,v.append(n)}),ie(e),H(),_(),z()}function ie(e){A.innerHTML="",re(e).forEach(t=>{const n=document.createElement("a");n.className="reference-link",n.href=t.url,n.target="_blank",n.rel="noopener noreferrer",n.innerHTML=`<strong>${t.title}</strong><span>${t.description}</span>`,A.append(n)})}function re(e){const t=[];e.module==="HTML Basics"&&t.push(...o.htmlBasics),e.module==="Page Structure"&&t.push(...o.pageStructure),e.module==="CSS Basics"&&t.push(...o.cssBasics),e.module==="Layout"&&t.push(...o.layout),e.module==="Final Project"&&t.push(...o.finalProject),e.module==="JavaScript Basics"&&t.push(...o.jsBasics),e.module==="Page Interaction"&&t.push(...o.domBasics,...o.events),e.module==="Mini Projects"&&t.push(...o.domBasics,...o.events);const n=e.title.toLowerCase();return n.includes("link")&&t.push(...o.links),(n.includes("image")||n.includes("intro card"))&&t.push(...o.images),n.includes("selector")&&t.push(...o.selectors),n.includes("color")&&t.push(...o.colors),n.includes("function")&&t.push(...o.functions),(n.includes("button")||n.includes("click"))&&t.push(...o.events),(n.includes("form")||n.includes("label")||n.includes("contact"))&&t.push(...o.forms),n.includes("grid")&&t.push(...o.grid),(n.includes("media")||n.includes("responsive"))&&t.push(...o.mediaQueries),(n.includes("condition")||n.includes("message"))&&t.push(...o.conditions),n.includes("array")&&t.push(...o.arrays),(n.includes("debug")||n.includes("broken"))&&t.push(...o.debugging),(n.includes("accessible")||n.includes("contact"))&&t.push(...o.accessibility),[...new Map(t.map(r=>[r.url,r])).values()].slice(0,3)}function ce(e){const t=e.mode==="console"||e.mode==="both";$.hidden=!t,h.textContent=t?"Logs will show here.":"",h.classList.toggle("empty",t)}function H(){const e=l[c];(e.mode==="console"||e.mode==="both")&&(h.textContent="Logs will show here.",h.classList.add("empty"));const n=`<!doctype html><html><head><meta charset="utf-8"><style>body{font-family:Arial,sans-serif;padding:20px;line-height:1.5;color:#222}img{max-width:100%;height:auto}a{color:#12675d}.card,article,section{box-sizing:border-box}</style>${`<script>
    (function () {
      const lessonIndex = ${c};
      const send = function (type, values) {
        parent.postMessage({
          source: "brightstart-preview",
          lessonIndex,
          type,
          message: values.map(function (value) {
            if (typeof value === "string") return value;
            try {
              return JSON.stringify(value);
            } catch {
              return String(value);
            }
          }).join(" ")
        }, "*");
      };
      const originalLog = console.log.bind(console);
      console.log = function () {
        const values = Array.from(arguments);
        originalLog.apply(console, values);
        send("log", values);
      };
      window.addEventListener("error", function (event) {
        send("error", [event.message]);
      });
    }());
  <\/script>`}</head><body>${p}</body></html>`;B.srcdoc=n}function L(e){const t=Math.max(320,Math.min(1e3,Number(e)));B.style.setProperty("--preview-width",`${t}px`),w.value=String(t),D.textContent=`Preview width: ${t}px`,q.forEach(n=>{n.classList.toggle("active",Number(n.dataset.previewWidth)===t)})}function le(e,t){const n=l[c];if(n.mode!=="console"&&n.mode!=="both")return;h.classList.contains("empty")&&(h.textContent="",h.classList.remove("empty"));const r=e==="error"?"Error: ":"";h.textContent+=`${r}${t}
`,h.scrollTop=h.scrollHeight}function R(){const e=l[c],t=e.tasks.map(s=>s.check(p));[...v.children].forEach((s,i)=>{s.classList.toggle("done",t[i])});const n=t.filter(Boolean).length,r=n===e.tasks.length;g.disabled=!r||a.completed.includes(c),m.className=`feedback ${r?"good":"waiting"}`,m.textContent=r?"You changed the page. This lesson is ready to complete.":`${n} of ${e.tasks.length} steps are done. Try one small change.`}function de(){if(g.disabled)return;const e=l[c];a.completed=[...new Set([...a.completed,c])],a.xp+=e.xp,a.badges=[...new Set([...a.badges,e.badge])],he(),k(),g.disabled=!0,m.className="feedback good",m.textContent=`Lesson complete. You earned ${e.xp} XP.`,z(),_(),typeof f.showModal=="function"&&f.showModal()}function he(){const e=new Date().toISOString().slice(0,10);a.lastSessionDate!==e&&(a.streak+=1,a.lastSessionDate=e)}function W(){const e=l.findIndex((t,n)=>!a.completed.includes(n));C(e===-1?l.length-1:e)}function z(){const e=a.completed.length,t=Math.round(e/l.length*100);Q.textContent=`${e} of ${l.length} lessons`,V.textContent=`${a.xp} XP`,X.textContent=`${a.streak} session${a.streak===1?"":"s"}`,ee.style.width=`${t}%`,M.innerHTML="",(a.badges.length?a.badges:["First badge waiting"]).forEach(r=>{const s=document.createElement("span");s.className="badge",s.textContent=r,M.append(s)})}function ue(){p=l[c].starter,a.lessonCode[c]=p,k(),y()}function pe(){confirm("Reset all progress on this device?")&&(localStorage.removeItem(S),Object.assign(a,U()),c=0,p=l[0].starter,y())}d.addEventListener("input",e=>{p=e.target.value,a.lessonCode[c]=p,k(),P.textContent="Saved just now",H(),R()});d.addEventListener("keydown",e=>{if(e.key==="Tab"){e.preventDefault();const t=d.selectionStart,n=d.selectionEnd;d.value=`${d.value.slice(0,t)}  ${d.value.slice(n)}`,d.selectionStart=d.selectionEnd=t+2,d.dispatchEvent(new Event("input"))}});j.addEventListener("click",()=>{x.hidden=!x.hidden});G.addEventListener("click",R);g.addEventListener("click",de);K.addEventListener("click",ue);Y.addEventListener("click",()=>C(Math.min(c+1,l.length-1)));Z.addEventListener("click",W);te.addEventListener("click",pe);b.addEventListener("click",()=>{I(document.body.classList.contains("dark-theme")?"light":"dark")});ne.addEventListener("click",()=>f.close());se.addEventListener("click",()=>{f.close(),W()});w.addEventListener("input",e=>{L(e.target.value)});q.forEach(e=>{e.addEventListener("click",()=>{L(e.dataset.previewWidth)})});window.addEventListener("message",e=>{const t=e.data;!t||t.source!=="brightstart-preview"||t.lessonIndex===c&&le(t.type,t.message)});I(localStorage.getItem(E)||"light");L(w.value);y();
