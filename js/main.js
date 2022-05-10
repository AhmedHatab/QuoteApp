var Quotes = ['"Be yourself; everyone else is already taken."',
    '"Be the change that you wish to see in the world."',
    '"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle."',
    '"Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present."',
    `"I have not failed. I've just found 10,000 ways that won't work."`];
var author = ["Oscar Wilde", "Mahatma Gandhi", "Albert Einstein","Bill Keane"," Thomas A. Edison"];
var displayQuote= document.querySelector('button');
displayQuote.onclick = function() {
    var randomQute = Math.floor(Math.random() * Quotes.length);
    document.querySelector("p").innerHTML = Quotes[randomQute];
    document.querySelector("span").innerHTML = author[randomQute];
}