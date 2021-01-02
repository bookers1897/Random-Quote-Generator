/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

var quotes = [{
  quote: 'When we strive to become better than we are, everything around us becomes better too.',
  source: 'Paulo Coelho',
  citation: "wow4u.com",
  year: ''
},

{
  quote: 'There are three things you can do with your life: You can waste it, you can spend it, or you can invest it. The best use of your life is to invest it in something that will last longer than your time on Earth.',
  source: 'Rick Warren ',
  citation: 'Informal Sociology: A Casual Introduction to Sociological Thinking',
  year: ''
},

{
  quote: 'We delight in the beauty of the butterfly, but rarely admit the changes it has gone through to achieve that beauty.',
  source: 'Maya Angelou',
  citation: 'wow4u.com',
},

{
  quote: 'You only pass through this life once, you dont come back for an encore.',
  source: 'Elvis Presley',
  citation: 'wow4u.com',
},

{
  quote: "Never rest on your laurels. Nothing wilts faster than a laurel sat upon.",
  source: 'Mary Kay',
  citation: 'wow4u.com',
}
];

/***
 * `getRandomQuote` function
***/
  const getRandomQuote = (array)=>{
  var quoteBook = Math.floor(Math.random() * (quotes.length));
  // var randomQuote +=
  // for (var i = 0; i < array.length; i++) {
  //     var randomQuote = array[quoteBook];
  // }
  return quotes[quoteBook];
  

}


/***
 * `printQuote` function
***/ 

function printQuote() {
var callRandomQuote = getRandomQuote();
var quotesQuote = `<p class = "quote">${callRandomQuote.quote}</p><p class = "source">${callRandomQuote.source}`

if(callRandomQuote.citation){
  quotesQuote += `<span class="citation"> ${callRandomQuote.citation} </span>`
  
  
}
else if(callRandomQuote.year){
  quotesQuote += `<span class="year"> ${callRandomQuote.year} </span>`

};
quotesQuote += `</p>`

return document.getElementById('quote-box').innerHTML = quotesQuote; 
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/