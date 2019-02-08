const Tracker = {
	trackClickEvent: function(category, label) {
		gtag('event', 'click', {
			event_category: category,
			event_label: label
		});
	}
};

export default Tracker;
