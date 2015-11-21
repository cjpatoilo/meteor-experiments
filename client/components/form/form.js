Template.form.events({

	'submit form': function( e, template ) {
		e.preventDefault();

		var title = $( '#title' ),
			content = $( '#content' );

		if ( title.val().length > 0 && content.val().length > 0 ) {
			Meteor.call( 'add', { title: title.val(), content: content.val(), user: this.userId });
			title.val( '' );
			content.val( '' );
		}
	}

});