var quotes = ['The trickster\'s function is to break taboos, create mischief, stir things up. In the end, the trickster gives people what they really want, some sort of freedom. - Tom Robbins',
  'Disbelief in magic can force a poor soul into believing in government and business. - Tom Robbins',
  'The trouble with the fast lane is that all the movement is horizontal. And I like to go vertical sometimes. - Tom Robbins',
  'Our world isn\'t made of earth, air and water or even molecules and atoms; our world is made of language. - Tom Robbins',
  'I\'m not infatuated with frivolousness. We\'re just good friends. - Tom Robbins',
  'In fiction, when you paint yourself into a corner, you can write a pair of suction cups onto the bottoms of your shoes and walk up the wall and out the skylight and see the sun breaking through the clouds. In nonfiction, you don\'t have that luxury. - Tom Robbins',]
function newQuote(){
	var randomNumber = Math.floor(Math.random()*(quotes.length));
	document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}
