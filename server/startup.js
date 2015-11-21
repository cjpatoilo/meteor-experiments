Meteor.startup( function () {

	Meteor.publish( 'posts', function () {
		return Posts.find({ user: this.userId });
	});

});