const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '238795571cmshd0b89581c6f3b5ap1e6bc6jsn1d71c893b31d',
		'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
	}
};

/*fetch('https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=apple', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));*/

/*function getCalories(food){
	fetch('https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=orange', options)
	.then(response => response.json())
	.then(data =>{
		const list =data;
		list.map((item) =>{
			const name = item.name;
			const calories =item.calories;
			const servingSize = item.serving_size_g;
			const totalFat = item.fat_total_g;
			const saturatedFat = item.fat_saturated_g;
			const protein = item.protein_g
		});
	})
	.catch(err => console.error(err));
}*/




function getNutrition(food){
	fetch(('https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=' + food),options)
	.then(response => response.json())
	.then(data =>{
		const list =data;
		list.map((item) =>{
			const name = item.name;
			const calories =item.calories;
			const servingSize = item.serving_size_g;
			const totalFat = item.fat_total_g;
			const saturatedFat = item.fat_saturated_g;
			const protein = item.protein_g;
			const sodium = item.sodium_mg;
			const potassium = item.potassium_mg;
			const cholestrol = item.cholestrol_mg;
			const carbohydrates = item.carbohydrates_total_g;
			const fiber = item.fiber_g;
			const sugar = item.sugar_g;
			const card = `<h1>${name}</h1>
						<ul>
							<li>calories : ${calories}</li>
							<li>Serving Size (g) : ${servingSize}</li>
							<li>Total Fat (g) : ${totalFat}</li>
							<li>Saturated Fat (g) : ${saturatedFat}</li>
							<li>Protein (g) : ${protein}</li>
							<li>Sodium (mg) : ${sodium}</li>
							<li>Potassium (mg) : ${potassium}</li>
							<li>Cholestrol (mg) : ${cholestrol}</li>
							<li>Total Carbohydrates : ${carbohydrates}</li>
							<li>Fiber (g) : ${fiber}</li>
							<li>Sugar (g) : ${sugar}</li>
							</ul>`

			document.querySelector('.nutritionContainer__Information').innerHTML += card
							
})})
}

const search = document.getElementById('nutri-btn');
const searchInput = document.getElementById('nutri-srch').value;
search.addEventListener('click',getNutrition(searchInput));
