const meals = [
	{
		category: 'Vegetarian',
		name: 'Baingan Bharta',
		imageUrl: 'https://www.themealdb.com/images/media/meals/urtpqw1487341253.jpg',
		id: '52807',
	},
	{
		category: 'Beef',
		name: 'Beef and Mustard Pie',
		imageUrl: 'https://www.themealdb.com/images/media/meals/sytuqu1511553755.jpg',
		id: '52874',
	},
	{
		category: 'Vegetarian',
		name: 'Chickpea Fajitas',
		imageUrl: 'https://www.themealdb.com/images/media/meals/tvtxpq1511464705.jpg',
		id: '52870',
	},
	{
		category: 'Vegetarian',
		name: 'Dal fry',
		imageUrl: 'https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg',
		id: '52785',
	},
	{
		category: 'Seafood',
		name: 'Baked salmon with fennel & tomatoes',
		imageUrl: 'https://www.themealdb.com/images/media/meals/1548772327.jpg',
		id: '52959',
	},
	{
		category: 'Chicken',
		name: 'Ayam Percik',
		imageUrl: 'https://www.themealdb.com/images/media/meals/020z181619788503.jpg',
		id: '53050',
	},
	{
		category: 'Beef',
		name: 'Beef and Oyster pie',
		imageUrl: 'https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg',
		id: '52878',
	},
	{
		category: 'Vegetarian',
		name: 'Egg Drop Soup',
		imageUrl: 'https://www.themealdb.com/images/media/meals/1529446137.jpg',
		id: '52955',
	},
	{
		category: 'Beef',
		name: 'Beef Brisket Pot Roast',
		imageUrl: 'https://www.themealdb.com/images/media/meals/ursuup1487348423.jpg',
		id: '52812',
	},
	{
		category: 'Vegetarian',
		name: 'Flamiche',
		imageUrl: 'https://www.themealdb.com/images/media/meals/wssvvs1511785879.jpg',
		id: '52906',
	},
	{
		category: 'Beef',
		name: 'Beef Rendang',
		imageUrl: 'https://www.themealdb.com/images/media/meals/bc8v651619789840.jpg',
		id: '53053',
	},
	{
		category: 'Vegetarian',
		name: 'Ful Medames',
		imageUrl: 'https://www.themealdb.com/images/media/meals/lvn2d51598732465.jpg',
		id: '53025',
	},
	{
		category: 'Beef',
		name: 'Beef stroganoff',
		imageUrl: 'https://www.themealdb.com/images/media/meals/svprys1511176755.jpg',
		id: '52834',
	},
	{
		category: 'Seafood',
		name: 'Cajun spiced fish tacos',
		imageUrl: 'https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg',
		id: '52819',
	},
	{
		category: 'Chicken',
		name: 'Brown Stew Chicken',
		imageUrl: 'https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg',
		id: '52940',
	},
	{
		category: 'Beef',
		name: 'Beef Sunday Roast',
		imageUrl: 'https://www.themealdb.com/images/media/meals/ssrrrs1503664277.jpg',
		id: '52824',
	},
	{
		category: 'Vegetarian',
		name: 'Gigantes Plaki',
		imageUrl: 'https://www.themealdb.com/images/media/meals/b79r6f1585566277.jpg',
		id: '53012',
	},
	{
		category: 'Beef',
		name: 'Beef Wellington',
		imageUrl: 'https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg',
		id: '52803',
	},
	{
		category: 'Seafood',
		name: 'Escovitch Fish',
		imageUrl: 'https://www.themealdb.com/images/media/meals/1520084413.jpg',
		id: '52944',
	},
	{
		category: 'Chicken',
		name: 'Chick-Fil-A Sandwich',
		imageUrl: 'https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg',
		id: '53016',
	},
	{
		category: 'Vegetarian',
		name: 'Kafteji',
		imageUrl: 'https://www.themealdb.com/images/media/meals/1bsv1q1560459826.jpg',
		id: '52971',
	},
	{
		category: 'Vegetarian',
		name: 'Kidney Bean Curry',
		imageUrl: 'https://www.themealdb.com/images/media/meals/sywrsu1511463066.jpg',
		id: '52868',
	},
	{
		category: 'Beef',
		name: 'Big Mac',
		imageUrl: 'https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg',
		id: '53013',
	},
	{
		category: 'Beef',
		name: 'Bitterballen (Dutch meatballs)',
		imageUrl: 'https://www.themealdb.com/images/media/meals/lhqev81565090111.jpg',
		id: '52979',
	},
	{
		category: 'Chicken',
		name: 'Chicken & mushroom Hotpot',
		imageUrl: 'https://www.themealdb.com/images/media/meals/uuuspp1511297945.jpg',
		id: '52846',
	},
	{
		category: 'Seafood',
		name: 'Fish fofos',
		imageUrl: 'https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg',
		id: '53043',
	},
	{
		category: 'Beef',
		name: 'Braised Beef Chilli',
		imageUrl: 'https://www.themealdb.com/images/media/meals/uuqvwu1504629254.jpg',
		id: '52826',
	},
	{
		category: 'Chicken',
		name: 'Chicken Alfredo Primavera',
		imageUrl: 'https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg',
		id: '52796',
	},
	{
		category: 'Beef',
		name: 'Chivito uruguayo',
		imageUrl: 'https://www.themealdb.com/images/media/meals/n7qnkb1630444129.jpg',
		id: '53063',
	},
	{
		category: 'Beef',
		name: 'Corned Beef and Cabbage',
		imageUrl: 'https://www.themealdb.com/images/media/meals/xb97a81583266727.jpg',
		id: '52998',
	},
	{
		category: 'Chicken',
		name: 'Chicken Basquaise',
		imageUrl: 'https://www.themealdb.com/images/media/meals/wruvqv1511880994.jpg',
		id: '52934',
	},
	{
		category: 'Beef',
		name: 'Croatian Bean Stew',
		imageUrl: 'https://www.themealdb.com/images/media/meals/tnwy8m1628770384.jpg',
		id: '53058',
	},
	{
		category: 'Chicken',
		name: 'Chicken Congee',
		imageUrl: 'https://www.themealdb.com/images/media/meals/1529446352.jpg',
		id: '52956',
	},
	{
		category: 'Chicken',
		name: 'Chicken Couscous',
		imageUrl: 'https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg',
		id: '52850',
	},
	{
		category: 'Beef',
		name: 'Croatian lamb peka',
		imageUrl: 'https://www.themealdb.com/images/media/meals/pn59o51628769837.jpg',
		id: '53056',
	},
	{
		category: 'Seafood',
		name: 'Fish pie',
		imageUrl: 'https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg',
		id: '52802',
	},
	{
		category: 'Chicken',
		name: 'Chicken Enchilada Casserole',
		imageUrl: 'https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg',
		id: '52765',
	},
	{
		category: 'Beef',
		name: 'Egyptian Fatteh',
		imageUrl: 'https://www.themealdb.com/images/media/meals/rlwcc51598734603.jpg',
		id: '53031',
	},
	{
		category: 'Seafood',
		name: 'Fish Stew with Rouille',
		imageUrl: 'https://www.themealdb.com/images/media/meals/vptqpw1511798500.jpg',
		id: '52918',
	},
	{
		category: 'Beef',
		name: 'Gołąbki (cabbage roll)',
		imageUrl: 'https://www.themealdb.com/images/media/meals/q8sp3j1593349686.jpg',
		id: '53021',
	},
	{
		category: 'Beef',
		name: 'Irish stew',
		imageUrl: 'https://www.themealdb.com/images/media/meals/sxxpst1468569714.jpg',
		id: '52781',
	},
	{
		category: 'Beef',
		name: 'Soy-Glazed Meatloaves with Wasabi Mashed Potatoes & Roasted Carrots',
		imageUrl: 'https://www.themealdb.com/images/media/meals/o2wb6p1581005243.jpg',
		id: '52992',
	},
	{
		category: 'Vegetarian',
		name: 'Leblebi Soup',
		imageUrl: 'https://www.themealdb.com/images/media/meals/x2fw9e1560460636.jpg',
		id: '52973',
	},
	{
		category: 'Seafood',
		name: 'Grilled Portuguese sardines',
		imageUrl: 'https://www.themealdb.com/images/media/meals/lpd4wy1614347943.jpg',
		id: '53041',
	},
	{
		category: 'Chicken',
		name: 'Chicken Ham and Leek Pie',
		imageUrl: 'https://www.themealdb.com/images/media/meals/xrrtss1511555269.jpg',
		id: '52875',
	},
	{
		category: 'Beef',
		name: 'Spaghetti Bolognese',
		imageUrl: 'https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg',
		id: '52770',
	},
	{
		category: 'Beef',
		name: 'Steak and Kidney Pie',
		imageUrl: 'https://www.themealdb.com/images/media/meals/qysyss1511558054.jpg',
		id: '52881',
	},
	{
		category: 'Beef',
		name: 'Steak Diane',
		imageUrl: 'https://www.themealdb.com/images/media/meals/vussxq1511882648.jpg',
		id: '52935',
	},
	{
		category: 'Beef',
		name: 'Szechuan Beef',
		imageUrl: 'https://www.themealdb.com/images/media/meals/1529443236.jpg',
		id: '52950',
	},
	{
		category: 'Beef',
		name: 'Traditional Croatian Goulash',
		imageUrl: 'https://www.themealdb.com/images/media/meals/n1hcou1628770088.jpg',
		id: '53057',
	},
	{
		category: 'Vegetarian',
		name: 'Koshari',
		imageUrl: 'https://www.themealdb.com/images/media/meals/4er7mj1598733193.jpg',
		id: '53027',
	},
	{
		category: 'Beef',
		name: "Vegetable Shepherd's Pie",
		imageUrl: 'https://www.themealdb.com/images/media/meals/w8umt11583268117.jpg',
		id: '53000',
	},
];
const mealContainer = document.getElementById('meals-container');
const displayMenu = (list) => {
	const allMeals = list
		.map((item) => {
			return `<a class='meal' href='../pages/details.html?id=${item.id}'>
    
            <img src=${item.imageUrl} alt=${item.name} class='meal-image'/>
            <div class='meal-info'>
                <p>
                    ${item.name}
                </p>
                <p class='item-category'>
                ${item.category}
            </p>
            </div>
    
            </a>`;
		})
		.join('');

	// console.log(allMeals);
	mealContainer.innerHTML = allMeals;
};

const displayButtons = () => {
	const btnContainer = document.getElementById('buttons-container');

	const categories = meals.reduce(
		(result, item) => {
			if (!result.includes(item.category)) {
				result.push(item.category);
			}
			return result;
		},
		['All']
	);

	const catButtons = categories
		.map((category) => {
			return `<button onclick='filterMenu(event)' class='filter-btn' id=${category}>${category}</button>`;
		})
		.join('');

	btnContainer.innerHTML = catButtons;
};

window.onload = function () {
	displayMenu(meals);
	displayButtons();
};

const filterMenu = (e) => {
	const category = e.currentTarget.id;
	console.log(category);
	const filteredMenu = meals.filter((meal) => category == meal.category);

	if (category == 'All') {
		displayMenu(meals);
	} else {
		displayMenu(filteredMenu);
	}
};

//Hamburger Menu

const menuIcon = document.querySelector('.menu-icon');
const openMenu = () => {
	const btnContainer = document.querySelector('.buttons-container');
	btnContainer.classList.toggle('mobile-menu');
};

menuIcon.onclick = openMenu;

//Theme Toggle

const themeButton = document.querySelector('.theme-btn');
const toggleTheme = () => {
	const body = document.querySelector('body');
	const labels = document.querySelectorAll('label');
	const formHeading = document.querySelector('#form-heading');

	if (body.style.backgroundColor === 'black') {
		body.style.backgroundColor = 'white';
		themeButton.innerHTML = 'Dark Mode';
		menuIcon.style.color = 'rgb(53,50,50)';
		for (let i = 0; i < labels.length; i++) {
			labels[i].style.color = 'black';
		}
		formHeading.style.color = 'black';
	} else {
		body.style.backgroundColor = 'black';
		themeButton.innerHTML = 'Light Mode';
		menuIcon.style.color = 'white';
		for (let i = 0; i < labels.length; i++) {
			labels[i].style.color = 'white';
		}
		formHeading.style.color = 'white';
	}
};

themeButton.onclick = toggleTheme;

// If you want to set the color property of each label to 'white' using map(), you can modify your code as follows:

// javascript
// Copy code
// const labels = document.querySelectorAll('label');
// const labelLight = Array.from(labels).map((label) => {
//   label.style.color = 'white';
//   return label;
// });
// Here's what the code does:

// document.querySelectorAll('label') returns a NodeList.
// Array.from(labels) converts the NodeList into an array so that you can use array methods like map().
// .map((label) => { ... }) iterates over each label in the array and sets the color property of the label to 'white'. It also returns the label itself.
// The resulting array labelLight will contain the modified labels.
// By returning label from the map() callback function, you can retain the modified labels in the resulting array

//ADD NEW MEAL

const submitButton = document.querySelector('#submit-btn');

submitButton.addEventListener('click', (e) => {
	e.preventDefault(); //prevent default func of form

	const name = document.querySelector('#meal-name').value;
	const imageUrl = document.querySelector('#meal-url').value;
	const category = document.querySelector('#form-select').value;
	const newMeal = document.createElement('div');
	newMeal.innerHTML = `  <a class='meal' href='details.html'>
	<img src=${imageUrl} alt=${name} class='meal-image'/>
	<div class='meal-info'>
		<p>
			${name}
		</p>
		<p class='item-category'>
		${category}
	</p>
	</div>
	</a>`;

	mealContainer.insertBefore(newMeal, mealContainer.firstChild);

	document.querySelector('#meal-name').value = '';
	document.querySelector('#meal-url').value = '';
	document.querySelector('#form-select').value = '';
});
