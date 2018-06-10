var vm = new Vue({
	el: "#people",
	data: {
		people: [{
				name: "Amo",
				category: "Pizza",
				rank: 1
			},
			{
				name: "Cicheti",
				category: "Pizza",
				rank: 2
			},
			{
				name: "Mozza",
				category: "Pizza",
				rank: 3
			},
			{
				name: "Plank",
				category: "Pizza",
				rank: 4
			},
			{
				name: "Blue Label",
				category: "Pizza",
				rank: 5
			}
		],
		selectedCategory: "Pizza"
	},
	computed: {
		filteredPeople: function () {
			var vm = this;
			var category = vm.selectedCategory;
			var filtered = vm.people.filter(function (person) {
				return person.category === category;
			})
			return _.orderBy(filtered, ['rank'], ['asc']);
		}
	}
});