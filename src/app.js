const STORAGE_KEY = "brightstart-html-css-progress-v1";
const THEME_KEY = "brightstart-theme-v1";

const lessons = [
  {
    module: "HTML Basics",
    badge: "Tag Starter",
    title: "What tags do",
    explanation: "HTML tags are labels for page parts. Change one tag and the browser changes what people see.",
    xp: 10,
    starter: `<h1>My first page</h1>\n<p>This page is waking up.</p>`,
    tasks: [
      { text: "Add one more paragraph with your name or nickname.", check: code => /<p[\s>][\s\S]*<\/p>/gi.test(code) && (code.match(/<p[\s>]/gi) || []).length >= 2 },
      { text: "Use an opening tag and a closing tag.", check: code => /<[^/!][^>]*>[\s\S]*<\/[^>]+>/.test(code) }
    ],
    hint: "A paragraph starts with <p> and ends with </p>. Try adding it under the first paragraph."
  },
  {
    module: "HTML Basics",
    badge: "Tag Starter",
    title: "Headings and paragraphs",
    explanation: "Headings name a section. Paragraphs hold regular text. Together they make a page easy to scan.",
    xp: 10,
    starter: `<h1>About Me</h1>\n<p>I am learning how websites are made.</p>`,
    tasks: [
      { text: "Add an <h2> heading for a hobby.", check: code => /<h2[\s>][\s\S]*<\/h2>/i.test(code) },
      { text: "Add a paragraph under that heading.", check: code => (code.match(/<p[\s>]/gi) || []).length >= 2 }
    ],
    hint: "Try <h2>My hobby</h2> and then a new <p> sentence below it."
  },
  {
    module: "HTML Basics",
    badge: "Tag Starter",
    title: "Links",
    explanation: "Links let a page jump somewhere else. The href part tells the browser where to go.",
    xp: 10,
    starter: `<h1>Things I Like</h1>\n<p>Here is a useful link:</p>\n<a href=\"https://developer.mozilla.org/\">Learn web basics</a>`,
    tasks: [
      { text: "Add a second link.", check: code => (code.match(/<a\s/gi) || []).length >= 2 },
      { text: "Make sure the link uses href.", check: code => /<a\s+[^>]*href=/i.test(code) }
    ],
    hint: "Copy the first <a href=\"...\">text</a> line and change the words between the tags."
  },
  {
    module: "HTML Basics",
    badge: "Tag Starter",
    title: "Images",
    explanation: "Images make a page feel real. The alt text describes the image if it cannot load.",
    xp: 10,
    starter: `<h1>My Mood Board</h1>\n<img src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 340'%3E%3Crect width='600' height='340' fill='%23dff3ed'/%3E%3Ccircle cx='455' cy='98' r='52' fill='%23f0a93b'/%3E%3Cpath d='M0 250 150 135l120 85 92-70 238 158v32H0z' fill='%231f7a6d'/%3E%3Cpath d='M0 284h600v56H0z' fill='%233e6ea8'/%3E%3C/svg%3E\" alt=\"Sunrise over a field\">\n<p>A picture can set the feeling of a page.</p>`,
    tasks: [
      { text: "Change the image alt text.", check: code => /alt=(["'])(?!(Sunrise over a field)\1).+?\1/i.test(code) },
      { text: "Add a sentence below the image.", check: code => (code.match(/<p[\s>]/gi) || []).length >= 2 }
    ],
    hint: "Look for alt=\"Sunrise over a field\" and replace the words inside the quotes."
  },
  {
    module: "HTML Basics",
    badge: "Tag Starter",
    title: "Lists",
    explanation: "Lists are good for quick ideas. Use ul for the list and li for each item.",
    xp: 10,
    starter: `<h1>My Favorites</h1>\n<ul>\n  <li>Favorite food</li>\n  <li>Favorite song</li>\n</ul>`,
    tasks: [
      { text: "Add a third list item.", check: code => (code.match(/<li[\s>]/gi) || []).length >= 3 },
      { text: "Keep the items inside the list.", check: code => /<ul[\s\S]*<li[\s\S]*<\/li>[\s\S]*<\/ul>/i.test(code) }
    ],
    hint: "Add a new <li>Favorite game</li> before the closing </ul> tag."
  },
  {
    module: "HTML Basics",
    badge: "Intro Builder",
    title: "Mini project: intro card",
    explanation: "Put the basics together. A small intro card can have a name, image, list, and link.",
    xp: 20,
    starter: `<article>\n  <h1>Hello, I am Alex</h1>\n  <p>I am building my first web card.</p>\n</article>`,
    tasks: [
      { text: "Add an image with alt text.", check: code => /<img\s+[^>]*alt=/i.test(code) },
      { text: "Add a list with at least two items.", check: code => /<ul[\s\S]*<\/ul>/i.test(code) && (code.match(/<li[\s>]/gi) || []).length >= 2 },
      { text: "Add one link.", check: code => /<a\s+[^>]*href=/i.test(code) }
    ],
    hint: "Build one piece at a time: image first, then a list, then a link."
  },
  {
    module: "Page Structure",
    badge: "Page Planner",
    title: "Header, main, footer",
    explanation: "Structure tags help people and tools understand the page. Header starts it, main holds the important part, footer closes it.",
    xp: 10,
    starter: `<header>\n  <h1>My Weekend</h1>\n</header>\n<main>\n  <p>This page is about a good weekend.</p>\n</main>`,
    tasks: [
      { text: "Add a footer.", check: code => /<footer[\s>][\s\S]*<\/footer>/i.test(code) },
      { text: "Keep the main content inside <main>.", check: code => /<main[\s>][\s\S]*<\/main>/i.test(code) }
    ],
    hint: "Put <footer>Made by me</footer> under the closing </main> tag."
  },
  {
    module: "Page Structure",
    badge: "Page Planner",
    title: "Sections",
    explanation: "Sections group related content. Each section should usually have its own heading.",
    xp: 10,
    starter: `<main>\n  <section>\n    <h2>My hobby</h2>\n    <p>I like making things.</p>\n  </section>\n</main>`,
    tasks: [
      { text: "Add a second section.", check: code => (code.match(/<section[\s>]/gi) || []).length >= 2 },
      { text: "Give the new section a heading.", check: code => (code.match(/<h2[\s>]/gi) || []).length >= 2 }
    ],
    hint: "Copy the whole section block, paste it below, and change the heading."
  },
  {
    module: "Page Structure",
    badge: "Page Planner",
    title: "Nesting",
    explanation: "Nesting means putting one element inside another. Clean nesting helps the browser read your page.",
    xp: 10,
    starter: `<article>\n  <h1>My Favorite Place</h1>\n  <p>The park is quiet and bright.</p>\n</article>`,
    tasks: [
      { text: "Add a section inside the article.", check: code => /<article[\s\S]*<section[\s\S]*<\/section>[\s\S]*<\/article>/i.test(code) },
      { text: "Put a paragraph inside that section.", check: code => /<section[\s\S]*<p[\s>][\s\S]*<\/p>[\s\S]*<\/section>/i.test(code) }
    ],
    hint: "Place <section><p>One detail...</p></section> before the closing </article> tag."
  },
  {
    module: "Page Structure",
    badge: "Page Planner",
    title: "Simple navigation",
    explanation: "Navigation is a small set of links that helps people move around a page.",
    xp: 10,
    starter: `<header>\n  <h1>My Site</h1>\n  <nav>\n    <a href=\"#home\">Home</a>\n  </nav>\n</header>\n<main id=\"home\">\n  <p>Welcome.</p>\n</main>`,
    tasks: [
      { text: "Add two more nav links.", check: code => /<nav[\s\S]*<\/nav>/i.test(code) && (code.match(/<a\s/gi) || []).length >= 3 },
      { text: "Use # links for page sections.", check: code => /href="#[^"]+"/i.test(code) }
    ],
    hint: "Inside nav, add <a href=\"#hobbies\">Hobbies</a> and <a href=\"#gallery\">Gallery</a>."
  },
  {
    module: "Page Structure",
    badge: "Hobby Page",
    title: "Mini project: hobby page",
    explanation: "A hobby page needs structure: a title, navigation, sections, and a footer.",
    xp: 20,
    starter: `<header>\n  <h1>My Hobby Page</h1>\n</header>\n<main>\n  <section>\n    <h2>Why I like it</h2>\n    <p>It helps me feel focused.</p>\n  </section>\n</main>`,
    tasks: [
      { text: "Add a nav with at least two links.", check: code => /<nav[\s\S]*<\/nav>/i.test(code) && (code.match(/<a\s/gi) || []).length >= 2 },
      { text: "Add at least two sections.", check: code => (code.match(/<section[\s>]/gi) || []).length >= 2 },
      { text: "Add a footer.", check: code => /<footer[\s>][\s\S]*<\/footer>/i.test(code) }
    ],
    hint: "Use header, nav, main, section, and footer like building blocks."
  },
  {
    module: "CSS Basics",
    badge: "Style Starter",
    title: "Selectors",
    explanation: "CSS selectors choose what to style. A selector like h1 changes every h1 on the page.",
    xp: 10,
    starter: `<style>\nh1 {\n  color: darkgreen;\n}\n</style>\n<h1>My Style Page</h1>\n<p>This page has CSS.</p>`,
    tasks: [
      { text: "Add a CSS rule for p.", check: code => /p\s*\{[\s\S]*\}/i.test(code) },
      { text: "Change at least one color.", check: code => /color\s*:\s*[^;]+;/i.test(code) }
    ],
    hint: "Inside the style tag, add p { color: navy; }."
  },
  {
    module: "CSS Basics",
    badge: "Style Starter",
    title: "Colors",
    explanation: "Color can show personality. Use it to make important parts stand out.",
    xp: 10,
    starter: `<style>\nbody {\n  background: white;\n}\nh1 {\n  color: black;\n}\n</style>\n<h1>Color Practice</h1>\n<p>Change the mood with color.</p>`,
    tasks: [
      { text: "Change the page background.", check: code => /background\s*:\s*(?!white\b)[^;]+;/i.test(code) },
      { text: "Change the heading color.", check: code => /h1\s*\{[\s\S]*color\s*:\s*(?!black\b)[^;]+;[\s\S]*\}/i.test(code) }
    ],
    hint: "Try background: lavender; and color: teal; inside the CSS rules."
  },
  {
    module: "CSS Basics",
    badge: "Style Starter",
    title: "Fonts",
    explanation: "Fonts change the voice of a page. Keep them readable and simple.",
    xp: 10,
    starter: `<style>\nbody {\n  font-family: Arial, sans-serif;\n}\n</style>\n<h1>Readable Text</h1>\n<p>Good pages are easy to read.</p>`,
    tasks: [
      { text: "Add a font-size rule.", check: code => /font-size\s*:\s*[^;]+;/i.test(code) },
      { text: "Keep a font-family rule.", check: code => /font-family\s*:\s*[^;]+;/i.test(code) }
    ],
    hint: "Try p { font-size: 18px; } under the body rule."
  },
  {
    module: "CSS Basics",
    badge: "Style Starter",
    title: "Spacing",
    explanation: "Spacing gives your content room to breathe. Padding adds space inside an element. Margin adds space outside it.",
    xp: 10,
    starter: `<style>\n.card {\n  background: white;\n}\n</style>\n<div class=\"card\">\n  <h1>My Card</h1>\n  <p>This card needs space.</p>\n</div>`,
    tasks: [
      { text: "Add padding to the card.", check: code => /\.card\s*\{[\s\S]*padding\s*:\s*[^;]+;[\s\S]*\}/i.test(code) },
      { text: "Add margin somewhere.", check: code => /margin\s*:\s*[^;]+;/i.test(code) }
    ],
    hint: "Inside .card, add padding: 20px; and margin: 20px;."
  },
  {
    module: "CSS Basics",
    badge: "Style Starter",
    title: "Borders",
    explanation: "Borders outline content. They help cards, images, and buttons feel separate from the page.",
    xp: 10,
    starter: `<style>\n.card {\n  padding: 20px;\n  background: white;\n}\n</style>\n<div class=\"card\">\n  <h1>Border Practice</h1>\n  <p>Make this card stand out.</p>\n</div>`,
    tasks: [
      { text: "Add a border to .card.", check: code => /\.card\s*\{[\s\S]*border\s*:\s*[^;]+;[\s\S]*\}/i.test(code) },
      { text: "Add border-radius for softer corners.", check: code => /border-radius\s*:\s*[^;]+;/i.test(code) }
    ],
    hint: "Try border: 2px solid teal; and border-radius: 8px;."
  },
  {
    module: "CSS Basics",
    badge: "Profile Styler",
    title: "Mini project: styled profile card",
    explanation: "Now style a personal card so it looks like a finished piece.",
    xp: 20,
    starter: `<style>\n.card {\n  padding: 20px;\n  background: white;\n}\n</style>\n<article class=\"card\">\n  <h1>Alex</h1>\n  <p>I like learning new skills.</p>\n</article>`,
    tasks: [
      { text: "Style .card with padding, border, and border-radius.", check: code => /\.card\s*\{[\s\S]*padding\s*:[\s\S]*border\s*:[\s\S]*border-radius\s*:/i.test(code) },
      { text: "Change text or background color.", check: code => /(color|background)\s*:\s*[^;]+;/i.test(code) },
      { text: "Add one more detail to the card.", check: code => (code.match(/<p[\s>]/gi) || []).length >= 2 || /<ul[\s\S]*<\/ul>/i.test(code) }
    ],
    hint: "Make the card first, then add one personal detail like a sentence or short list."
  },
  {
    module: "Layout",
    badge: "Layout Builder",
    title: "Box model",
    explanation: "Every element is a box. Content, padding, border, and margin decide how much room it uses.",
    xp: 10,
    starter: `<style>\n.box {\n  background: lightyellow;\n}\n</style>\n<div class=\"box\">Box one</div>\n<div class=\"box\">Box two</div>`,
    tasks: [
      { text: "Add padding to .box.", check: code => /\.box\s*\{[\s\S]*padding\s*:\s*[^;]+;[\s\S]*\}/i.test(code) },
      { text: "Add margin to .box.", check: code => /\.box\s*\{[\s\S]*margin\s*:\s*[^;]+;[\s\S]*\}/i.test(code) },
      { text: "Add a border to .box.", check: code => /\.box\s*\{[\s\S]*border\s*:\s*[^;]+;[\s\S]*\}/i.test(code) }
    ],
    hint: "Inside .box, add padding, margin, and border on separate lines."
  },
  {
    module: "Layout",
    badge: "Layout Builder",
    title: "Flexbox basics",
    explanation: "Flexbox lines items up. It is great for cards, nav bars, and button rows.",
    xp: 10,
    starter: `<style>\n.row {\n  background: #eef;\n}\n.card {\n  padding: 12px;\n  background: white;\n}\n</style>\n<div class=\"row\">\n  <div class=\"card\">One</div>\n  <div class=\"card\">Two</div>\n  <div class=\"card\">Three</div>\n</div>`,
    tasks: [
      { text: "Make .row use display: flex.", check: code => /\.row\s*\{[\s\S]*display\s*:\s*flex\s*;[\s\S]*\}/i.test(code) },
      { text: "Add a gap between items.", check: code => /gap\s*:\s*[^;]+;/i.test(code) }
    ],
    hint: "Inside .row, add display: flex; and gap: 12px;."
  },
  {
    module: "Layout",
    badge: "Layout Builder",
    title: "Responsive widths",
    explanation: "Responsive pages fit different screens. max-width keeps a page readable, and width: 100% lets it shrink.",
    xp: 10,
    starter: `<style>\n.page {\n  background: white;\n  padding: 20px;\n}\n</style>\n<main class=\"page\">\n  <h1>Responsive Page</h1>\n  <p>This should fit many screens.</p>\n</main>`,
    tasks: [
      { text: "Add width: 100% to .page.", check: code => /\.page\s*\{[\s\S]*width\s*:\s*100%\s*;[\s\S]*\}/i.test(code) },
      { text: "Add max-width to .page.", check: code => /\.page\s*\{[\s\S]*max-width\s*:\s*[^;]+;[\s\S]*\}/i.test(code) },
      { text: "Center it with margin.", check: code => /margin\s*:\s*[^;]*auto[^;]*;/i.test(code) }
    ],
    hint: "Try width: 100%; max-width: 700px; margin: 0 auto;."
  },
  {
    module: "Layout",
    badge: "Gallery Maker",
    title: "Mini project: gallery page",
    explanation: "A gallery is a perfect flexbox practice project. Cards line up, wrap, and keep space between them.",
    xp: 20,
    starter: `<style>\n.gallery {\n  display: flex;\n}\n.item {\n  background: white;\n  padding: 12px;\n}\n</style>\n<section class=\"gallery\">\n  <div class=\"item\">Photo idea</div>\n  <div class=\"item\">Music idea</div>\n  <div class=\"item\">Game idea</div>\n</section>`,
    tasks: [
      { text: "Add gap to .gallery.", check: code => /\.gallery\s*\{[\s\S]*gap\s*:\s*[^;]+;[\s\S]*\}/i.test(code) },
      { text: "Allow wrapping with flex-wrap.", check: code => /flex-wrap\s*:\s*wrap\s*;/i.test(code) },
      { text: "Style .item with border or border-radius.", check: code => /\.item\s*\{[\s\S]*(border|border-radius)\s*:[\s\S]*\}/i.test(code) }
    ],
    hint: "Add gap and flex-wrap to the gallery. Then make each item look like a small card."
  },
  {
    module: "Final Project",
    badge: "Website Finisher",
    title: "Build a personal website",
    explanation: "Use everything together: structure, text, style, layout, and a few personal details.",
    xp: 30,
    starter: `<style>\nbody {\n  font-family: Arial, sans-serif;\n  margin: 0;\n}\nheader {\n  padding: 24px;\n  background: #dff3ed;\n}\nmain {\n  padding: 24px;\n}\n</style>\n<header>\n  <h1>My Personal Website</h1>\n  <nav>\n    <a href=\"#home\">Home</a>\n  </nav>\n</header>\n<main id=\"home\">\n  <section>\n    <h2>About me</h2>\n    <p>I am learning HTML and CSS.</p>\n  </section>\n</main>`,
    tasks: [
      { text: "Add nav links for hobbies and gallery.", check: code => /href="#hobbies"/i.test(code) && /href="#gallery"/i.test(code) },
      { text: "Add sections with ids hobbies and gallery.", check: code => /<section[^>]*id=["']hobbies["']/i.test(code) && /<section[^>]*id=["']gallery["']/i.test(code) },
      { text: "Use flexbox or responsive width.", check: code => /display\s*:\s*flex\s*;|max-width\s*:/i.test(code) },
      { text: "Add a footer.", check: code => /<footer[\s>][\s\S]*<\/footer>/i.test(code) }
    ],
    hint: "Add two sections first. Then style the page. Finish with a footer at the bottom."
  },
  {
    module: "JavaScript Basics",
    badge: "Script Starter",
    title: "What JavaScript does",
    explanation: "JavaScript can make a page react. Start with a script that writes a message to the console.",
    mode: "console",
    xp: 10,
    starter: `<h1>JavaScript is awake</h1>\n<p>The page can run code now.</p>\n<script>\n  console.log(\"Hello from JavaScript!\");\n</script>`,
    tasks: [
      { text: "Keep a <script> tag in the page.", check: code => /<script[\s>][\s\S]*<\/script>/i.test(code) },
      { text: "Log a new message to the console.", check: code => /console\.log\s*\(\s*["'`](?!Hello from JavaScript!)[\s\S]+?["'`]\s*\)/i.test(code) }
    ],
    hint: "Change the words inside console.log(\"...\"). The console output panel will show your message."
  },
  {
    module: "JavaScript Basics",
    badge: "Script Starter",
    title: "Variables",
    explanation: "A variable is a named box for a value. Use const when the value does not need to change.",
    mode: "console",
    xp: 10,
    starter: `<h1>Variable Practice</h1>\n<script>\n  const name = \"Alex\";\n  console.log(name);\n</script>`,
    tasks: [
      { text: "Create a const variable.", check: code => /const\s+\w+\s*=\s*["'`][\s\S]+?["'`]\s*;/i.test(code) },
      { text: "Change the value to a favorite thing or name.", check: code => /const\s+\w+\s*=\s*["'`](?!Alex)[\s\S]+?["'`]\s*;/i.test(code) },
      { text: "Log the variable.", check: code => /console\.log\s*\(\s*\w+\s*\)/i.test(code) }
    ],
    hint: "Try const favorite = \"music\"; and then console.log(favorite);."
  },
  {
    module: "JavaScript Basics",
    badge: "Script Starter",
    title: "Text and numbers",
    explanation: "JavaScript can combine words and numbers. This is useful for scores, ages, counts, and labels.",
    mode: "console",
    xp: 10,
    starter: `<h1>Text and Numbers</h1>\n<script>\n  const points = 5;\n  console.log(\"Points: \" + points);\n</script>`,
    tasks: [
      { text: "Store a number in a const variable.", check: code => /const\s+\w+\s*=\s*\d+\s*;/i.test(code) },
      { text: "Use + to combine text and a value.", check: code => /console\.log\s*\([\s\S]*["'`][\s\S]+?["'`]\s*\+\s*\w+[\s\S]*\)/i.test(code) },
      { text: "Change the number from 5.", check: code => !/const\s+points\s*=\s*5\s*;/i.test(code) && /const\s+\w+\s*=\s*\d+\s*;/i.test(code) }
    ],
    hint: "Change points to a new number, then log a sentence plus the variable."
  },
  {
    module: "JavaScript Basics",
    badge: "Function Maker",
    title: "Functions",
    explanation: "A function is a named action. You can run it whenever you need that action.",
    mode: "console",
    xp: 10,
    starter: `<h1>Function Practice</h1>\n<script>\n  function sayHello() {\n    console.log(\"Hello!\");\n  }\n\n  sayHello();\n</script>`,
    tasks: [
      { text: "Keep a function in the script.", check: code => /function\s+\w+\s*\(\s*\)\s*\{[\s\S]*\}/i.test(code) },
      { text: "Change what the function logs.", check: code => /console\.log\s*\(\s*["'`](?!Hello!)[\s\S]+?["'`]\s*\)/i.test(code) },
      { text: "Call the function after creating it.", check: code => /function\s+(\w+)\s*\(\s*\)[\s\S]*\}\s*\1\s*\(\s*\)\s*;/i.test(code) }
    ],
    hint: "Change the message inside the function, then make sure the function name appears again with ()."
  },
  {
    module: "Page Interaction",
    badge: "DOM Explorer",
    title: "Select an element",
    explanation: "The DOM is the page that JavaScript can touch. querySelector chooses one element from the page.",
    mode: "both",
    xp: 10,
    starter: `<h1 id=\"title\">Pick me</h1>\n<p>JavaScript can find page elements.</p>\n<script>\n  const title = document.querySelector(\"#title\");\n  console.log(title.textContent);\n</script>`,
    tasks: [
      { text: "Use document.querySelector.", check: code => /document\.querySelector\s*\(/i.test(code) },
      { text: "Select an element by id with #.", check: code => /querySelector\s*\(\s*["'`]#[\w-]+["'`]\s*\)/i.test(code) },
      { text: "Log the selected element text.", check: code => /console\.log\s*\([\s\S]*\.textContent[\s\S]*\)/i.test(code) }
    ],
    hint: "The # means id. document.querySelector(\"#title\") finds the element with id=\"title\"."
  },
  {
    module: "Page Interaction",
    badge: "DOM Explorer",
    title: "Change text",
    explanation: "textContent changes the words inside an element. This is one of the fastest ways to make a page feel alive.",
    mode: "both",
    xp: 10,
    starter: `<h1 id=\"message\">Old message</h1>\n<button>Message button</button>\n<script>\n  const message = document.querySelector(\"#message\");\n  message.textContent = \"New message from JavaScript\";\n</script>`,
    tasks: [
      { text: "Select #message with querySelector.", check: code => /querySelector\s*\(\s*["'`]#message["'`]\s*\)/i.test(code) },
      { text: "Use .textContent to change the page.", check: code => /\.textContent\s*=\s*["'`][\s\S]+?["'`]\s*;/i.test(code) },
      { text: "Change the starter message text.", check: code => !/New message from JavaScript/i.test(code) && /\.textContent\s*=/i.test(code) }
    ],
    hint: "Edit the words after message.textContent = and watch the preview update."
  },
  {
    module: "Page Interaction",
    badge: "DOM Explorer",
    title: "Change styles",
    explanation: "JavaScript can change CSS through the style property. Use it for quick visual reactions.",
    mode: "both",
    xp: 10,
    starter: `<h1 id=\"title\">Style me</h1>\n<p>JavaScript can change color.</p>\n<script>\n  const title = document.querySelector(\"#title\");\n  title.style.color = \"teal\";\n</script>`,
    tasks: [
      { text: "Select an element with querySelector.", check: code => /document\.querySelector\s*\(/i.test(code) },
      { text: "Use .style to change CSS.", check: code => /\.style\.[a-zA-Z]+\s*=/i.test(code) },
      { text: "Change color or background with JavaScript.", check: code => /\.style\.(color|background|backgroundColor)\s*=\s*["'`][\s\S]+?["'`]\s*;/i.test(code) }
    ],
    hint: "Try title.style.backgroundColor = \"lightyellow\"; or change the color value."
  },
  {
    module: "Page Interaction",
    badge: "Click Handler",
    title: "Button clicks",
    explanation: "addEventListener lets JavaScript wait for a click, then run code.",
    mode: "both",
    xp: 10,
    starter: `<h1 id=\"message\">Click the button</h1>\n<button id=\"changeButton\">Change message</button>\n<script>\n  const message = document.querySelector(\"#message\");\n  const button = document.querySelector(\"#changeButton\");\n\n  button.addEventListener(\"click\", function () {\n    message.textContent = \"Button clicked!\";\n    console.log(\"Clicked\");\n  });\n</script>`,
    tasks: [
      { text: "Select the button with querySelector.", check: code => /querySelector\s*\(\s*["'`]#changeButton["'`]\s*\)/i.test(code) },
      { text: "Use addEventListener for a click.", check: code => /\.addEventListener\s*\(\s*["'`]click["'`]/i.test(code) },
      { text: "Change text inside the click function.", check: code => /addEventListener\s*\([\s\S]*\.textContent\s*=/i.test(code) }
    ],
    hint: "The code inside the click function runs only after the button is clicked in the preview."
  },
  {
    module: "Mini Projects",
    badge: "Mood Maker",
    title: "Mood button",
    explanation: "Make one button change the mood of the page with a message and a color.",
    mode: "both",
    xp: 20,
    starter: `<style>\n  body { transition: background 0.2s ease; }\n</style>\n<h1 id=\"moodText\">How do you feel?</h1>\n<button id=\"moodButton\">Change mood</button>\n<script>\n  const moodText = document.querySelector(\"#moodText\");\n  const moodButton = document.querySelector(\"#moodButton\");\n\n  moodButton.addEventListener(\"click\", function () {\n    moodText.textContent = \"Focused and ready\";\n    document.body.style.background = \"#dff3ed\";\n  });\n</script>`,
    tasks: [
      { text: "Use a click event on #moodButton.", check: code => /#moodButton/i.test(code) && /addEventListener\s*\(\s*["'`]click["'`]/i.test(code) },
      { text: "Change the mood text on click.", check: code => /moodText\.textContent\s*=\s*["'`][\s\S]+?["'`]\s*;/i.test(code) },
      { text: "Change a style on click.", check: code => /addEventListener\s*\([\s\S]*\.style\.[a-zA-Z]+\s*=/i.test(code) }
    ],
    hint: "Change the text and background color inside the click function."
  },
  {
    module: "Mini Projects",
    badge: "Counter Builder",
    title: "Counter",
    explanation: "A counter uses a number variable and a button click. It is a small but real app pattern.",
    mode: "both",
    xp: 20,
    starter: `<h1>Counter</h1>\n<p id=\"count\">0</p>\n<button id=\"addButton\">Add one</button>\n<script>\n  let count = 0;\n  const countText = document.querySelector(\"#count\");\n  const addButton = document.querySelector(\"#addButton\");\n\n  addButton.addEventListener(\"click\", function () {\n    count = count + 1;\n    countText.textContent = count;\n    console.log(count);\n  });\n</script>`,
    tasks: [
      { text: "Create a count variable with let.", check: code => /let\s+count\s*=\s*\d+\s*;/i.test(code) },
      { text: "Increase the count on click.", check: code => /count\s*=\s*count\s*\+\s*1\s*;|count\+\+/i.test(code) },
      { text: "Show the count with textContent.", check: code => /countText\.textContent\s*=\s*count\s*;/i.test(code) }
    ],
    hint: "The variable changes first, then the page text changes to match the variable."
  },
  {
    module: "Mini Projects",
    badge: "List Builder",
    title: "List maker",
    explanation: "JavaScript can create new page elements. Use it to add a new item to a list.",
    mode: "both",
    xp: 20,
    starter: `<h1>My Ideas</h1>\n<ul id=\"ideaList\">\n  <li>Build a profile card</li>\n</ul>\n<button id=\"addIdea\">Add idea</button>\n<script>\n  const ideaList = document.querySelector(\"#ideaList\");\n  const addIdea = document.querySelector(\"#addIdea\");\n\n  addIdea.addEventListener(\"click\", function () {\n    const item = document.createElement(\"li\");\n    item.textContent = \"Practice JavaScript\";\n    ideaList.append(item);\n  });\n</script>`,
    tasks: [
      { text: "Create an li with document.createElement.", check: code => /document\.createElement\s*\(\s*["'`]li["'`]\s*\)/i.test(code) },
      { text: "Set the new item text.", check: code => /item\.textContent\s*=\s*["'`][\s\S]+?["'`]\s*;/i.test(code) },
      { text: "Append the item to the list.", check: code => /ideaList\.append\s*\(\s*item\s*\)/i.test(code) }
    ],
    hint: "Create the item, give it text, then append it to the list."
  },
  {
    module: "Mini Projects",
    badge: "Interactive Profile",
    title: "Final JS project: interactive profile card",
    explanation: "Finish with a card that reacts to a button click using text, style, and console output.",
    mode: "both",
    xp: 30,
    starter: `<style>\n  .card {\n    max-width: 360px;\n    padding: 20px;\n    border: 2px solid #1f7a6d;\n    border-radius: 8px;\n    background: white;\n  }\n</style>\n<article class=\"card\">\n  <h1 id=\"name\">Alex</h1>\n  <p id=\"status\">Learning HTML, CSS, and JavaScript.</p>\n  <button id=\"profileButton\">Update profile</button>\n</article>\n<script>\n  const name = document.querySelector(\"#name\");\n  const status = document.querySelector(\"#status\");\n  const button = document.querySelector(\"#profileButton\");\n\n  button.addEventListener(\"click\", function () {\n    name.textContent = \"Future Web Builder\";\n    status.textContent = \"I can make pages interactive.\";\n    status.style.color = \"#1f7a6d\";\n    console.log(\"Profile updated\");\n  });\n</script>`,
    tasks: [
      { text: "Use querySelector for the card parts.", check: code => (code.match(/document\.querySelector\s*\(/gi) || []).length >= 3 },
      { text: "Use a button click event.", check: code => /\.addEventListener\s*\(\s*["'`]click["'`]/i.test(code) },
      { text: "Change text and style on click.", check: code => /addEventListener\s*\([\s\S]*\.textContent\s*=[\s\S]*\.style\.[a-zA-Z]+\s*=/i.test(code) },
      { text: "Log a completion message.", check: code => /console\.log\s*\(\s*["'`][\s\S]+?["'`]\s*\)/i.test(code) }
    ],
    hint: "Keep the click function small: change the name, change the status, change one style, then log a message."
  },
  {
    module: "Real Web Skills",
    badge: "Form Starter",
    title: "Form basics",
    explanation: "Forms collect information. A good small form uses a label, an input, and a button.",
    mode: "preview",
    xp: 10,
    starter: `<h1>Contact Practice</h1>\n<form>\n  <label for=\"name\">Your name</label>\n  <input id=\"name\" type=\"text\">\n  <button type=\"button\">Say hello</button>\n</form>`,
    tasks: [
      { text: "Keep a form on the page.", check: code => /<form[\s>][\s\S]*<\/form>/i.test(code) },
      { text: "Add an input inside the form.", check: code => /<form[\s\S]*<input\s+[^>]*>[\s\S]*<\/form>/i.test(code) },
      { text: "Use a label with for=\"name\" and an input with id=\"name\".", check: code => /<label\s+[^>]*for=["']name["'][^>]*>/i.test(code) && /<input\s+[^>]*id=["']name["'][^>]*>/i.test(code) },
      { text: "Keep a button in the form.", check: code => /<form[\s\S]*<button[\s\S]*<\/button>[\s\S]*<\/form>/i.test(code) }
    ],
    hint: "A label points to an input when label for=\"name\" matches input id=\"name\"."
  },
  {
    module: "Real Web Skills",
    badge: "Form Starter",
    title: "Accessible labels",
    explanation: "Labels make forms easier to click, read, and understand. Helpful button text also tells users what will happen.",
    mode: "preview",
    xp: 10,
    starter: `<h1>Favorite Thing</h1>\n<form>\n  <label for=\"favorite\">Favorite thing</label>\n  <input id=\"favorite\" type=\"text\">\n  <button type=\"button\">Save favorite</button>\n</form>`,
    tasks: [
      { text: "Use a label with a for attribute.", check: code => /<label\s+[^>]*for=["'][\w-]+["'][^>]*>[\s\S]*<\/label>/i.test(code) },
      { text: "Use a matching input id.", check: code => { const label = code.match(/<label\s+[^>]*for=["']([\w-]+)["'][^>]*>/i); return !!label && new RegExp(`<input\\\\s+[^>]*id=["']${label[1]}["']`, "i").test(code); } },
      { text: "Use button text that says the action.", check: code => /<button[^>]*>(?!(click|go|ok)\s*<\/button>)[\s\S]{5,}<\/button>/i.test(code) }
    ],
    hint: "Avoid vague button words like OK. Try Save favorite, Send message, or Show greeting."
  },
  {
    module: "Real Web Skills",
    badge: "Grid Builder",
    title: "CSS Grid",
    explanation: "CSS Grid places items in rows and columns. It is useful for galleries, dashboards, and card layouts.",
    mode: "preview",
    xp: 10,
    starter: `<style>\n.grid {\n  display: grid;\n}\n.card {\n  padding: 16px;\n  background: #dff3ed;\n}\n</style>\n<section class=\"grid\">\n  <div class=\"card\">HTML</div>\n  <div class=\"card\">CSS</div>\n  <div class=\"card\">JavaScript</div>\n</section>`,
    tasks: [
      { text: "Use display: grid on .grid.", check: code => /\.grid\s*\{[\s\S]*display\s*:\s*grid\s*;[\s\S]*\}/i.test(code) },
      { text: "Add grid-template-columns.", check: code => /grid-template-columns\s*:\s*[^;]+;/i.test(code) },
      { text: "Add a gap between cards.", check: code => /gap\s*:\s*[^;]+;/i.test(code) }
    ],
    hint: "Inside .grid, add grid-template-columns: 1fr 1fr 1fr; and gap: 12px;."
  },
  {
    module: "Real Web Skills",
    badge: "Grid Builder",
    title: "Responsive grid",
    explanation: "A responsive grid can make cards fit wide and narrow screens without rewriting the layout.",
    mode: "preview",
    xp: 10,
    starter: `<style>\n.gallery {\n  display: grid;\n  gap: 12px;\n}\n.item {\n  padding: 16px;\n  border: 2px solid #1f7a6d;\n  border-radius: 8px;\n}\n</style>\n<section class=\"gallery\">\n  <div class=\"item\">Profile</div>\n  <div class=\"item\">Hobby</div>\n  <div class=\"item\">Contact</div>\n</section>`,
    tasks: [
      { text: "Use repeat() in grid-template-columns.", check: code => /grid-template-columns\s*:\s*repeat\s*\(/i.test(code) },
      { text: "Use minmax() so cards can shrink and grow.", check: code => /minmax\s*\(\s*[^,]+,\s*[^)]+\)/i.test(code) },
      { text: "Style each .item like a card.", check: code => /\.item\s*\{[\s\S]*(border|border-radius|background)\s*:[\s\S]*\}/i.test(code) }
    ],
    hint: "Try grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));."
  },
  {
    module: "Real Web Skills",
    badge: "Grid Builder",
    title: "Media queries",
    explanation: "Media queries let CSS change at different screen widths. Use them when a layout needs a special rule on small screens.",
    mode: "preview",
    xp: 10,
    starter: `<style>\n.cards {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 12px;\n}\n.card {\n  padding: 16px;\n  border: 2px solid #1f7a6d;\n  border-radius: 8px;\n  background: #dff3ed;\n}\n</style>\n<section class=\"cards\">\n  <article class=\"card\">Profile</article>\n  <article class=\"card\">Hobbies</article>\n  <article class=\"card\">Contact</article>\n</section>`,
    tasks: [
      { text: "Add an @media rule.", check: code => /@media\s*\([^)]+\)\s*\{/i.test(code) },
      { text: "Use max-width inside the media query.", check: code => /@media\s*\(\s*max-width\s*:\s*[^)]+\)/i.test(code) },
      { text: "Change layout or spacing inside the media query.", check: code => /@media[\s\S]*\{[\s\S]*(grid-template-columns|gap|padding|font-size)\s*:\s*[^;]+;[\s\S]*\}/i.test(code) },
      { text: "Use the Mobile preview preset to check it.", check: code => /@media\s*\(\s*max-width\s*:\s*[^)]+\)/i.test(code) && /grid-template-columns\s*:\s*1fr\s*;/i.test(code) }
    ],
    hint: "Try @media (max-width: 600px) { .cards { grid-template-columns: 1fr; } }, then click Mobile in the preview."
  },
  {
    module: "Real Web Skills",
    badge: "Logic Starter",
    title: "Conditions",
    explanation: "Conditions let JavaScript choose. if and else are useful when the page should react differently.",
    mode: "console",
    xp: 10,
    starter: `<h1>Decision Practice</h1>\n<script>\n  const energy = 7;\n\n  if (energy >= 5) {\n    console.log(\"Ready to build\");\n  } else {\n    console.log(\"Take a short break\");\n  }\n</script>`,
    tasks: [
      { text: "Use an if statement.", check: code => /if\s*\([\s\S]+?\)\s*\{/i.test(code) },
      { text: "Use else for the other choice.", check: code => /else\s*\{/i.test(code) },
      { text: "Base the condition on a value.", check: code => /const\s+\w+\s*=\s*[^;]+;[\s\S]*if\s*\(\s*\w+\s*(>=|<=|>|<|===|!==)/i.test(code) }
    ],
    hint: "Change the energy number and watch which message logs."
  },
  {
    module: "Real Web Skills",
    badge: "Logic Starter",
    title: "Form message",
    explanation: "JavaScript can read form input and show a custom message on the page.",
    mode: "both",
    xp: 20,
    starter: `<h1>Greeting Form</h1>\n<label for=\"learnerName\">Name</label>\n<input id=\"learnerName\" type=\"text\" value=\"Alex\">\n<button id=\"greetButton\" type=\"button\">Show greeting</button>\n<p id=\"result\">Your greeting will appear here.</p>\n<script>\n  const input = document.querySelector(\"#learnerName\");\n  const button = document.querySelector(\"#greetButton\");\n  const result = document.querySelector(\"#result\");\n\n  button.addEventListener(\"click\", function () {\n    result.textContent = \"Hello, \" + input.value + \"!\";\n  });\n</script>`,
    tasks: [
      { text: "Select the input with querySelector.", check: code => /querySelector\s*\(\s*["'`]#learnerName["'`]\s*\)/i.test(code) },
      { text: "Read the input with .value.", check: code => /\.value/i.test(code) },
      { text: "Use a click event.", check: code => /\.addEventListener\s*\(\s*["'`]click["'`]/i.test(code) },
      { text: "Show the message with textContent.", check: code => /result\.textContent\s*=/i.test(code) }
    ],
    hint: "The button click should read input.value and put it into result.textContent."
  },
  {
    module: "Real Web Skills",
    badge: "Array Builder",
    title: "Arrays",
    explanation: "An array is a list of values. Use arrays for favorites, cards, menu items, and project ideas.",
    mode: "console",
    xp: 10,
    starter: `<h1>Array Practice</h1>\n<script>\n  const skills = [\"HTML\", \"CSS\", \"JavaScript\"];\n  console.log(skills);\n</script>`,
    tasks: [
      { text: "Create an array with square brackets.", check: code => /const\s+\w+\s*=\s*\[[\s\S]*\]\s*;/i.test(code) },
      { text: "Include at least three items.", check: code => { const match = code.match(/\[[\s\S]*?\]/); return !!match && (match[0].match(/["'`][\s\S]*?["'`]/g) || []).length >= 3; } },
      { text: "Log the array.", check: code => /console\.log\s*\(\s*\w+\s*\)/i.test(code) }
    ],
    hint: "Try const favorites = [\"music\", \"games\", \"coding\"]; then log favorites."
  },
  {
    module: "Real Web Skills",
    badge: "Array Builder",
    title: "Render an array",
    explanation: "Rendering an array means turning list data into page elements people can see.",
    mode: "both",
    xp: 20,
    starter: `<h1>Skill List</h1>\n<ul id=\"skillList\"></ul>\n<script>\n  const skills = [\"HTML\", \"CSS\", \"JavaScript\"];\n  const skillList = document.querySelector(\"#skillList\");\n\n  skills.forEach(function (skill) {\n    const item = document.createElement(\"li\");\n    item.textContent = skill;\n    skillList.append(item);\n  });\n</script>`,
    tasks: [
      { text: "Create an array.", check: code => /const\s+\w+\s*=\s*\[[\s\S]*\]\s*;/i.test(code) },
      { text: "Loop through the array with forEach or for.", check: code => /\.forEach\s*\(|for\s*\(/i.test(code) },
      { text: "Create a list item.", check: code => /document\.createElement\s*\(\s*["'`]li["'`]\s*\)/i.test(code) },
      { text: "Append each item to the list.", check: code => /\.append\s*\(\s*item\s*\)/i.test(code) }
    ],
    hint: "The pattern is: loop, create li, set textContent, append."
  },
  {
    module: "Real Web Skills",
    badge: "Debug Helper",
    title: "Debug a broken button",
    explanation: "This lesson is broken on purpose. Debugging means reading the clue, finding the mismatch, and trying one fix.",
    mode: "both",
    xp: 20,
    starter: `<h1 id=\"debugMessage\">Button not fixed yet</h1>\n<button id=\"fixButton\">Fix me</button>\n<script>\n  // Broken on purpose: the selector below does not match the button id.\n  const message = document.querySelector(\"#debugMessage\");\n  const button = document.querySelector(\"#fixedButton\");\n\n  if (button) {\n    button.addEventListener(\"click\", function () {\n      message.textContent = \"The button works now\";\n      console.log(\"Bug fixed\");\n    });\n  } else {\n    console.log(\"Selector needs a fix\");\n  }\n</script>`,
    tasks: [
      { text: "Fix the button selector to #fixButton.", check: code => /querySelector\s*\(\s*["'`]#fixButton["'`]\s*\)/i.test(code) },
      { text: "Keep a click event on the button.", check: code => /\.addEventListener\s*\(\s*["'`]click["'`]/i.test(code) },
      { text: "Change the message on click.", check: code => /message\.textContent\s*=\s*["'`][\s\S]+?["'`]\s*;/i.test(code) },
      { text: "Log that the bug is fixed.", check: code => /console\.log\s*\(\s*["'`][\s\S]*fix[\s\S]*["'`]\s*\)/i.test(code) }
    ],
    hint: "The button id is fixButton. The querySelector must use the same id with #."
  },
  {
    module: "Real Web Skills",
    badge: "Contact Card Maker",
    title: "Final project: interactive contact card",
    explanation: "Combine forms, labels, conditions, DOM updates, styling, and helpful text in one real mini project.",
    mode: "both",
    xp: 30,
    starter: `<style>\n  .contact-card {\n    max-width: 420px;\n    padding: 20px;\n    border: 2px solid #1f7a6d;\n    border-radius: 8px;\n    background: #fffaf2;\n  }\n  label, input, button {\n    display: block;\n    margin-top: 10px;\n  }\n</style>\n<article class=\"contact-card\">\n  <h1>Contact Card</h1>\n  <label for=\"contactName\">Name</label>\n  <input id=\"contactName\" type=\"text\" value=\"Alex\">\n  <button id=\"contactButton\" type=\"button\">Create card message</button>\n  <p id=\"contactResult\" aria-live=\"polite\">Your message will appear here.</p>\n</article>\n<script>\n  const nameInput = document.querySelector(\"#contactName\");\n  const button = document.querySelector(\"#contactButton\");\n  const result = document.querySelector(\"#contactResult\");\n\n  button.addEventListener(\"click\", function () {\n    if (nameInput.value.length > 0) {\n      result.textContent = \"Thanks, \" + nameInput.value + \". Your card is ready.\";\n    } else {\n      result.textContent = \"Please add a name first.\";\n    }\n    console.log(\"Contact card updated\");\n  });\n</script>`,
    tasks: [
      { text: "Use a labeled input.", check: code => /<label\s+[^>]*for=["']contactName["'][^>]*>/i.test(code) && /<input\s+[^>]*id=["']contactName["'][^>]*>/i.test(code) },
      { text: "Use a button click event.", check: code => /\.addEventListener\s*\(\s*["'`]click["'`]/i.test(code) },
      { text: "Use if and else for the message.", check: code => /if\s*\([\s\S]+?\)\s*\{[\s\S]*\}\s*else\s*\{/i.test(code) },
      { text: "Show the result with textContent.", check: code => /result\.textContent\s*=/i.test(code) },
      { text: "Include accessible live feedback.", check: code => /aria-live\s*=\s*["']polite["']/i.test(code) },
      { text: "Check the card with Mobile, Tablet, and Desktop preview sizes.", check: code => /max-width\s*:\s*[^;]+;|@media\s*\(/i.test(code) }
    ],
    hint: "Use the input value to decide which message should appear, then test the card with Mobile, Tablet, and Desktop preview sizes."
  }
];

const referenceLibrary = {
  htmlBasics: [
    {
      title: "HTML elements guide",
      description: "Look up tags like headings, paragraphs, links, images, and lists.",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements"
    },
    {
      title: "Intro to HTML",
      description: "A beginner-friendly path for understanding elements and attributes.",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content"
    }
  ],
  pageStructure: [
    {
      title: "Document and website structure",
      description: "Learn how header, navigation, main content, sections, and footer fit together.",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_documents"
    },
    {
      title: "HTML sectioning elements",
      description: "Reference for structure tags such as section, article, nav, header, and footer.",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements#content_sectioning"
    }
  ],
  cssBasics: [
    {
      title: "CSS first steps",
      description: "A gentle introduction to selectors, colors, fonts, spacing, and borders.",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics"
    },
    {
      title: "Learn CSS",
      description: "A deeper CSS course with topics he can revisit when ready.",
      url: "https://web.dev/learn/css"
    }
  ],
  layout: [
    {
      title: "CSS box model",
      description: "Understand content, padding, border, and margin.",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model"
    },
    {
      title: "Flexbox guide",
      description: "A visual reference for lining up cards, nav links, and galleries.",
      url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/"
    }
  ],
  finalProject: [
    {
      title: "Planning a simple website",
      description: "Review how pages are structured before building the final personal site.",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_documents"
    },
    {
      title: "Responsive design basics",
      description: "Learn how websites can adapt to different screen sizes.",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design"
    }
  ],
  jsBasics: [
    {
      title: "JavaScript first steps",
      description: "Beginner-friendly JavaScript basics for writing your first scripts.",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting"
    },
    {
      title: "JavaScript reference",
      description: "A deeper reference for JavaScript syntax and built-in features.",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference"
    }
  ],
  domBasics: [
    {
      title: "DOM scripting introduction",
      description: "Learn how JavaScript finds and changes page elements.",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting"
    },
    {
      title: "querySelector reference",
      description: "Reference for selecting page elements with CSS-style selectors.",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector"
    }
  ],
  events: [
    {
      title: "Event listeners",
      description: "Reference for making buttons and other elements respond to actions.",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener"
    }
  ],
  functions: [
    {
      title: "Functions",
      description: "Learn how to make named actions that can be reused.",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Functions"
    }
  ],
  forms: [
    {
      title: "Web forms",
      description: "Learn the core form elements: labels, inputs, and buttons.",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms"
    },
    {
      title: "The label element",
      description: "Reference for connecting labels to form controls.",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label"
    }
  ],
  grid: [
    {
      title: "CSS Grid layout",
      description: "Learn how rows, columns, and gaps build page layouts.",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids"
    },
    {
      title: "grid-template-columns",
      description: "Reference for setting grid columns, including repeat and minmax.",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns"
    }
  ],
  mediaQueries: [
    {
      title: "CSS media queries",
      description: "Learn how CSS changes styles based on screen size.",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries"
    }
  ],
  accessibility: [
    {
      title: "Accessibility basics",
      description: "Learn small habits that make pages easier for more people to use.",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility"
    },
    {
      title: "aria-live",
      description: "Reference for announcing changing page messages to assistive technology.",
      url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live"
    }
  ],
  conditions: [
    {
      title: "Making decisions in code",
      description: "Learn if, else, and other condition patterns.",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals"
    }
  ],
  arrays: [
    {
      title: "Arrays",
      description: "Learn how JavaScript stores and works with lists of values.",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Arrays"
    },
    {
      title: "Array forEach",
      description: "Reference for running a function once for each array item.",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach"
    }
  ],
  debugging: [
    {
      title: "What went wrong?",
      description: "A beginner debugging guide for JavaScript errors.",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_went_wrong"
    }
  ],
  links: [
    {
      title: "The anchor element",
      description: "Deep reference for links and the href attribute.",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a"
    }
  ],
  images: [
    {
      title: "The image element",
      description: "Learn how src and alt make images work well.",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/img"
    }
  ],
  selectors: [
    {
      title: "CSS selectors",
      description: "Understand how CSS chooses which HTML elements to style.",
      url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors"
    }
  ],
  colors: [
    {
      title: "CSS color values",
      description: "Explore named colors, hex colors, and other color formats.",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS/color_value"
    }
  ]
};

const state = migrateState(loadState());
let currentIndex = Math.min(state.currentIndex || 0, lessons.length - 1);
let currentCode = state.lessonCode[currentIndex] || lessons[currentIndex].starter;

const moduleList = document.querySelector("#moduleList");
const moduleName = document.querySelector("#moduleName");
const lessonTitle = document.querySelector("#lessonTitle");
const lessonExplanation = document.querySelector("#lessonExplanation");
const taskList = document.querySelector("#taskList");
const hintButton = document.querySelector("#hintButton");
const hintText = document.querySelector("#hintText");
const referenceDrawer = document.querySelector("#referenceDrawer");
const referenceList = document.querySelector("#referenceList");
const feedback = document.querySelector("#feedback");
const codeEditor = document.querySelector("#codeEditor");
const previewFrame = document.querySelector("#previewFrame");
const previewWidth = document.querySelector("#previewWidth");
const previewWidthLabel = document.querySelector("#previewWidthLabel");
const previewPresetButtons = [...document.querySelectorAll("[data-preview-width]")];
const consolePanel = document.querySelector("#consolePanel");
const consoleOutput = document.querySelector("#consoleOutput");
const checkWork = document.querySelector("#checkWork");
const completeLesson = document.querySelector("#completeLesson");
const resetLesson = document.querySelector("#resetLesson");
const nextLesson = document.querySelector("#nextLesson");
const startNext = document.querySelector("#startNext");
const progressText = document.querySelector("#progressText");
const xpText = document.querySelector("#xpText");
const streakText = document.querySelector("#streakText");
const progressBar = document.querySelector("#progressBar");
const badgeShelf = document.querySelector("#badgeShelf");
const savedState = document.querySelector("#savedState");
const resetProgress = document.querySelector("#resetProgress");
const themeToggle = document.querySelector("#themeToggle");
const breakDialog = document.querySelector("#breakDialog");
const closeBreak = document.querySelector("#closeBreak");
const continueLearning = document.querySelector("#continueLearning");

function loadState() {
  const fallback = {
    completed: [],
    badges: [],
    currentIndex: 0,
    lessonCode: {},
    xp: 0,
    streak: 0,
    lastSessionDate: ""
  };

  try {
    return { ...fallback, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
  } catch {
    return fallback;
  }
}

function migrateState(loadedState) {
  let changed = false;
  Object.entries(loadedState.lessonCode || {}).forEach(([index, code]) => {
    const lesson = lessons[Number(index)];
    const hasOldBrokenDebugCode = code.includes('querySelector("#fixedButton")') && !code.includes("Selector needs a fix");
    if (lesson && hasOldBrokenDebugCode) {
      loadedState.lessonCode[index] = lesson.starter;
      changed = true;
    }
  });

  if (changed) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(loadedState));
  }

  return loadedState;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  savedState.textContent = "Saved on this device";
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark-theme", isDark);
  themeToggle.innerHTML = isDark
    ? `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>`
    : `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.99 13.14A8.2 8.2 0 0 1 10.86 3.01 8.5 8.5 0 1 0 20.99 13.14Z"></path></svg>`;
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  themeToggle.setAttribute("aria-pressed", String(isDark));
  localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
}

function groupLessons() {
  return lessons.reduce((groups, lesson, index) => {
    if (!groups[lesson.module]) {
      groups[lesson.module] = [];
    }
    groups[lesson.module].push({ ...lesson, index });
    return groups;
  }, {});
}

function renderModules() {
  moduleList.innerHTML = "";
  Object.entries(groupLessons()).forEach(([module, moduleLessons]) => {
    const block = document.createElement("section");
    block.className = "module-block";

    const title = document.createElement("div");
    title.className = "module-title";
    title.textContent = module;
    block.append(title);

    const nav = document.createElement("div");
    nav.className = "lesson-nav";

    moduleLessons.forEach(lesson => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = [
        lesson.index === currentIndex ? "active" : "",
        state.completed.includes(lesson.index) ? "completed" : ""
      ].join(" ").trim();
      button.innerHTML = `<span class="lesson-dot">${state.completed.includes(lesson.index) ? "✓" : lesson.index + 1}</span><span>${lesson.title}</span>`;
      button.addEventListener("click", () => selectLesson(lesson.index));
      nav.append(button);
    });

    block.append(nav);
    moduleList.append(block);
  });
}

function selectLesson(index) {
  currentIndex = index;
  state.currentIndex = index;
  currentCode = state.lessonCode[index] || lessons[index].starter;
  saveState();
  renderLesson();
}

function renderLesson() {
  const lesson = lessons[currentIndex];
  moduleName.textContent = lesson.module;
  lessonTitle.textContent = lesson.title;
  lessonExplanation.textContent = lesson.explanation;
  hintText.textContent = lesson.hint;
  hintText.hidden = true;
  referenceDrawer.open = false;
  renderConsolePanel(lesson);
  codeEditor.value = currentCode;
  feedback.className = "feedback";
  feedback.textContent = state.completed.includes(currentIndex)
    ? "Lesson complete. You can keep experimenting or move on."
    : "Make a small change, then check your work.";
  completeLesson.disabled = state.completed.includes(currentIndex);

  taskList.innerHTML = "";
  lesson.tasks.forEach(task => {
    const item = document.createElement("li");
    item.textContent = task.text;
    taskList.append(item);
  });

  renderReferences(lesson);
  renderPreview();
  renderModules();
  renderProgress();
}

function renderReferences(lesson) {
  referenceList.innerHTML = "";
  getLessonReferences(lesson).forEach(reference => {
    const link = document.createElement("a");
    link.className = "reference-link";
    link.href = reference.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.innerHTML = `<strong>${reference.title}</strong><span>${reference.description}</span>`;
    referenceList.append(link);
  });
}

function getLessonReferences(lesson) {
  const references = [];

  if (lesson.module === "HTML Basics") references.push(...referenceLibrary.htmlBasics);
  if (lesson.module === "Page Structure") references.push(...referenceLibrary.pageStructure);
  if (lesson.module === "CSS Basics") references.push(...referenceLibrary.cssBasics);
  if (lesson.module === "Layout") references.push(...referenceLibrary.layout);
  if (lesson.module === "Final Project") references.push(...referenceLibrary.finalProject);
  if (lesson.module === "JavaScript Basics") references.push(...referenceLibrary.jsBasics);
  if (lesson.module === "Page Interaction") references.push(...referenceLibrary.domBasics, ...referenceLibrary.events);
  if (lesson.module === "Mini Projects") references.push(...referenceLibrary.domBasics, ...referenceLibrary.events);

  const title = lesson.title.toLowerCase();
  if (title.includes("link")) references.push(...referenceLibrary.links);
  if (title.includes("image") || title.includes("intro card")) references.push(...referenceLibrary.images);
  if (title.includes("selector")) references.push(...referenceLibrary.selectors);
  if (title.includes("color")) references.push(...referenceLibrary.colors);
  if (title.includes("function")) references.push(...referenceLibrary.functions);
  if (title.includes("button") || title.includes("click")) references.push(...referenceLibrary.events);
  if (title.includes("form") || title.includes("label") || title.includes("contact")) references.push(...referenceLibrary.forms);
  if (title.includes("grid")) references.push(...referenceLibrary.grid);
  if (title.includes("media") || title.includes("responsive")) references.push(...referenceLibrary.mediaQueries);
  if (title.includes("condition") || title.includes("message")) references.push(...referenceLibrary.conditions);
  if (title.includes("array")) references.push(...referenceLibrary.arrays);
  if (title.includes("debug") || title.includes("broken")) references.push(...referenceLibrary.debugging);
  if (title.includes("accessible") || title.includes("contact")) references.push(...referenceLibrary.accessibility);

  return [...new Map(references.map(reference => [reference.url, reference])).values()].slice(0, 3);
}

function renderConsolePanel(lesson) {
  const showConsole = lesson.mode === "console" || lesson.mode === "both";
  consolePanel.hidden = !showConsole;
  consoleOutput.textContent = showConsole ? "Logs will show here." : "";
  consoleOutput.classList.toggle("empty", showConsole);
}

function renderPreview() {
  const lesson = lessons[currentIndex];
  if (lesson.mode === "console" || lesson.mode === "both") {
    consoleOutput.textContent = "Logs will show here.";
    consoleOutput.classList.add("empty");
  }

  const consoleBridge = `<script>
    (function () {
      const lessonIndex = ${currentIndex};
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
  <\/script>`;
  const previewDoc = `<!doctype html><html><head><meta charset="utf-8"><style>body{font-family:Arial,sans-serif;padding:20px;line-height:1.5;color:#222}img{max-width:100%;height:auto}a{color:#12675d}.card,article,section{box-sizing:border-box}</style>${consoleBridge}</head><body>${currentCode}</body></html>`;
  previewFrame.srcdoc = previewDoc;
}

function setPreviewWidth(width) {
  const clampedWidth = Math.max(320, Math.min(1000, Number(width)));
  previewFrame.style.setProperty("--preview-width", `${clampedWidth}px`);
  previewWidth.value = String(clampedWidth);
  previewWidthLabel.textContent = `Preview width: ${clampedWidth}px`;
  previewPresetButtons.forEach(button => {
    button.classList.toggle("active", Number(button.dataset.previewWidth) === clampedWidth);
  });
}

function appendConsoleLine(type, message) {
  const lesson = lessons[currentIndex];
  if (lesson.mode !== "console" && lesson.mode !== "both") return;

  if (consoleOutput.classList.contains("empty")) {
    consoleOutput.textContent = "";
    consoleOutput.classList.remove("empty");
  }

  const prefix = type === "error" ? "Error: " : "";
  consoleOutput.textContent += `${prefix}${message}\n`;
  consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

function checkCurrentWork() {
  const lesson = lessons[currentIndex];
  const results = lesson.tasks.map(task => task.check(currentCode));
  [...taskList.children].forEach((item, index) => {
    item.classList.toggle("done", results[index]);
  });

  const passed = results.filter(Boolean).length;
  const allPassed = passed === lesson.tasks.length;
  completeLesson.disabled = !allPassed || state.completed.includes(currentIndex);
  feedback.className = `feedback ${allPassed ? "good" : "waiting"}`;
  feedback.textContent = allPassed
    ? "You changed the page. This lesson is ready to complete."
    : `${passed} of ${lesson.tasks.length} steps are done. Try one small change.`;
}

function completeCurrentLesson() {
  if (completeLesson.disabled) return;

  const lesson = lessons[currentIndex];
  state.completed = [...new Set([...state.completed, currentIndex])];
  state.xp += lesson.xp;
  state.badges = [...new Set([...state.badges, lesson.badge])];
  updateStreak();
  saveState();
  completeLesson.disabled = true;
  feedback.className = "feedback good";
  feedback.textContent = `Lesson complete. You earned ${lesson.xp} XP.`;
  renderProgress();
  renderModules();

  if (typeof breakDialog.showModal === "function") {
    breakDialog.showModal();
  }
}

function updateStreak() {
  const today = new Date().toISOString().slice(0, 10);
  if (state.lastSessionDate !== today) {
    state.streak += 1;
    state.lastSessionDate = today;
  }
}

function moveToNextIncomplete() {
  const next = lessons.findIndex((_, index) => !state.completed.includes(index));
  selectLesson(next === -1 ? lessons.length - 1 : next);
}

function renderProgress() {
  const completeCount = state.completed.length;
  const percent = Math.round((completeCount / lessons.length) * 100);
  progressText.textContent = `${completeCount} of ${lessons.length} lessons`;
  xpText.textContent = `${state.xp} XP`;
  streakText.textContent = `${state.streak} session${state.streak === 1 ? "" : "s"}`;
  progressBar.style.width = `${percent}%`;

  badgeShelf.innerHTML = "";
  const badges = state.badges.length ? state.badges : ["First badge waiting"];
  badges.forEach(badge => {
    const item = document.createElement("span");
    item.className = "badge";
    item.textContent = badge;
    badgeShelf.append(item);
  });
}

function resetCurrentLesson() {
  currentCode = lessons[currentIndex].starter;
  state.lessonCode[currentIndex] = currentCode;
  saveState();
  renderLesson();
}

function resetAllProgress() {
  if (!confirm("Reset all progress on this device?")) return;
  localStorage.removeItem(STORAGE_KEY);
  Object.assign(state, loadState());
  currentIndex = 0;
  currentCode = lessons[0].starter;
  renderLesson();
}

codeEditor.addEventListener("input", event => {
  currentCode = event.target.value;
  state.lessonCode[currentIndex] = currentCode;
  saveState();
  savedState.textContent = "Saved just now";
  renderPreview();
  checkCurrentWork();
});

codeEditor.addEventListener("keydown", event => {
  if (event.key === "Tab") {
    event.preventDefault();
    const start = codeEditor.selectionStart;
    const end = codeEditor.selectionEnd;
    codeEditor.value = `${codeEditor.value.slice(0, start)}  ${codeEditor.value.slice(end)}`;
    codeEditor.selectionStart = codeEditor.selectionEnd = start + 2;
    codeEditor.dispatchEvent(new Event("input"));
  }
});

hintButton.addEventListener("click", () => {
  hintText.hidden = !hintText.hidden;
});

checkWork.addEventListener("click", checkCurrentWork);
completeLesson.addEventListener("click", completeCurrentLesson);
resetLesson.addEventListener("click", resetCurrentLesson);
nextLesson.addEventListener("click", () => selectLesson(Math.min(currentIndex + 1, lessons.length - 1)));
startNext.addEventListener("click", moveToNextIncomplete);
resetProgress.addEventListener("click", resetAllProgress);
themeToggle.addEventListener("click", () => {
  applyTheme(document.body.classList.contains("dark-theme") ? "light" : "dark");
});
closeBreak.addEventListener("click", () => breakDialog.close());
continueLearning.addEventListener("click", () => {
  breakDialog.close();
  moveToNextIncomplete();
});
previewWidth.addEventListener("input", event => {
  setPreviewWidth(event.target.value);
});
previewPresetButtons.forEach(button => {
  button.addEventListener("click", () => {
    setPreviewWidth(button.dataset.previewWidth);
  });
});
window.addEventListener("message", event => {
  const data = event.data;
  if (!data || data.source !== "brightstart-preview") return;
  if (data.lessonIndex !== currentIndex) return;
  appendConsoleLine(data.type, data.message);
});

applyTheme(localStorage.getItem(THEME_KEY) || "light");
setPreviewWidth(previewWidth.value);
renderLesson();
