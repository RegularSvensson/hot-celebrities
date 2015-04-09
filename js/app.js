
/* ======= Model ======= */
var initialCelebrities = [
	{
		clickCount: 0,
		name: 'Scarlett Johansson',
		imgSrc: 'img/scarjo.jpg',
		nicknames: ['ScarJo', 'blondie']
	},
	{
		clickCount: 0, 
		name: 'Jessica Biel',
		imgSrc: 'img/jessbiel.jpg',
		nicknames: ['Jess', 'Bielsy']
	}
]

/* ======= ViewModel (Octopus) ======= */

var ViewModel = function() {
	var self = this;

	this.celebrityList = ko.observableArray([]);

	initialCelebrities.forEach(function(celebrityItem) {
		self.celebrityList.push( new Celebrity(celebrityItem) );
	});

	this.currentCelebrity = ko.observable( this.celebrityList()[0] );

	this.incrementCounter = function() {
		self.currentCelebrity().clickCount( self.currentCelebrity().clickCount() + 1);
	};

	this.setCelebrity = function(clickedCelebrity) {
		self.currentCelebrity(clickedCelebrity);
	};
}
