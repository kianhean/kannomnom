var vm = new Vue({
	el: "#people",
	data: {
		people: [{
				name: "Bill Gates",
				category: "Tech"
			},
			{
				name: "Steve Jobs",
				category: "Tech"
			},
			{
				name: "Jeff Bezos",
				category: "Tech"
			},
			{
				name: "George Clooney",
				category: "Entertainment"
			},
			{
				name: "Meryl Streep",
				category: "Entertainment"
			},
			{
				name: "Amy Poehler",
				category: "Entertainment"
			},
			{
				name: "Lady of Lórien",
				category: "Fictional"
			},
			{
				name: "BB8",
				category: "Fictional"
			},
			{
				name: "Michael Scott",
				category: "Fictional"
			}
		],
		selectedCategory: "Tech"
	},
	computed: {
		filteredPeople: function () {
			var vm = this;
			var category = vm.selectedCategory;
			var filtered = vm.people.filter(function (person) {
				return person.category === category;
			})
			return _.orderBy(filtered, ['name'], ['asc']);
		}
	}
});