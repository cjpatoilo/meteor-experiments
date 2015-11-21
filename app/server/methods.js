Meteor.methods({

	add: function ( data ) {
		Posts.insert({ title: data.title, content: data.content, date: new Date(), user: this.userId });
	},

	remove: function ( data ) {
		Posts.remove({ _id: data._id, user: this.userId });
	},

});