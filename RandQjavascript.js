let quotes = [
"\"You know you're in love when you can't fall asleep because reality is finally better than your dreams.\" -Dr.Suess",
"\"Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.\" -Harriet Tubman", 
"\"You're never too old to be young\" -Happy, Snow White and the Seven Dwarfs", 
"\"Those who dare to fail miserably can achieve greatly.\" -John F. Kennedy",
"\"Always let your conscience be your guide!\" -Jiminy Cricket, Pinocchio", 
"\"If you can DREAM it\, you can DO it\" -Tom Fitzgerald", 
"\"Success is going from failure to failure without losing your enthusiasm\" -Winston Churchill",
"\"Never let the fear of striking out keep you from playing the game.\" -Babe Ruth", 
"\"Life is trying things to see if they work.\" -Ray Bradbury", 
"\"The best way to predict the future is to create it\" -Abraham Lincoln", 
"\"Nothing is impossible\, the word itself says I'm possible'!\" -Audrey Hepburn",
"\"Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.\" -Mark Twain",
"\"A successful man is one who can lay a firm foundation with the bricks others have thrown at him.\" -David Brinkley",
"\"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.\" -Steve Jobs",
"\"Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.\" -Bil Keane",
"\"Always forgive your enemies; nothing annoys them so much.\" -Oscar Wilde",
"\"Every child is an artist, the problem is staying an artist when you grow up.\" -Pablo Picasso",
"\"Imagination is the beginning of creation. You imagine what you desire, you will what you imagine, and at last, you create what you will.\" -George Bernard Shaw",
"\"Don't think. Thinking is the enemy of creativity. It's self-conscious, and anything self-conscious is lousy. You can't try to do things. You simply must do things.\" -Ray Bradbury",
"\"Those who believe in telekinetics, raise my hand.\" -Kurt Vonnegut",
]
function generateQuote()
{
	let randNum = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteSlot').innerHTML = quotes[randNum];
}