const app = new Vue({
	el: "#app",
	mounted(){
		axios
			.get("data.json")
			.then( (response) => { 
				this.alldata = response.data
				console.log(response.data)
				console.log(this.alldata)
			 } )
			.catch( error => console.error(error) )
	},
	data: {
		alldata: [],
		time: 'weekly'
	},
	methods: {

	}
});

Vue.config.devtools = true;