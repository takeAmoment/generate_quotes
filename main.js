let btn = document.getElementById('btn');
let quote = document.getElementById('quote');
let author = document.getElementById('author');

btn.addEventListener('click', generateQuote);

function generateQuote() {
    let quotes={
       "Oscar Wilde": '"Be yourself; everyone else is already taken."',
       "Marilyn Monroe" : '"I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can not handle me at my worst, then you sure as hell do not deserve me at my best."',
       "Albert Einstein" : "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
       "Frank Zappa" : "So many books, so little time",
       "Mae West" : "You only live once, but if you do it right, once is enough.",
       "Mark Twain" : "Never put off till tomorrow what may be done day after tomorrow just as well.",
       "Pablo Picasso": "Everything you can imagine is real."
    }

    let authors = Object.keys(quotes);
    
    let randomAuthor = authors[Math.floor(Math.random() * authors.length)];

    let randomQuote = quotes[randomAuthor];

    quote.innerHTML = randomQuote;
    author.innerHTML = '&#169; ' + randomAuthor;

}