Template.list.helpers({

	posts: function () {
		return Posts.find();
	},

	dateFormated: function () {
		return moment( this.date ).startOf( 'day' ).fromNow();
	}

});

Template.list.events({

	'click button': function () {
		Meteor.call( 'remove', this );
	}

});