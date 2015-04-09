
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

/* ======= View ======= */

var Celebrity = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.nicknames = ko.observable(data.nicknames);

	this.title = ko.computed(function() {
		var title;
		var clicks = this.clickCount();

		if (clicks < 10) {
			title = 'Uggo';
		} else if (clicks < 20) {
			title = 'Not too bad'
		} else if (clicks < 30) {
			title = 'Cute'
		} else if (clicks < 40) {
			title = 'Whoa...'
		} else {
			title = 'Marry me!!'
		}
		return title;
	}, this);
}