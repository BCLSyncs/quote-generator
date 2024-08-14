var quotes = [
    'People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if youre lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life. - Carrie Ann Moss',
    'Some women choose to follow men, and some choose to follow their dreams. If youre wondering which way to go, remember that your career will never wake up and tell you that it doesnt love you anymore. - Lady Gaga',
    'Life is what happens to us while we are making other plans. - Allen Saunders',
    'Life isnt about finding yourself. Life is about creating yourself. - George Bernard Shaw',
    'You are the sum total of everything youve ever seen, heard, eaten, smelled, been told, forgot - its all there. Everything influences each of us, and because of that I try to make sure that my experiences are positive. - Maya Angelou',
    'Doubt kills more dreams than failure ever will. - Suzy Kassem',
    'Keep your face always toward the sunshine, and shadows will fall behind you. - Walt Whitman',
    'Whether you think you can or think you can\'t, you\'re right. - Henry Ford',
    'Your talent determines what you can do. Your motivation determines how much you\'re willing to do. Your attitude determines how well you do it. - Lou Holtz'
];

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}