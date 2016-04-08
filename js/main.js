var mushrooms =  {name: "mushrooms", price: 1};
var pepperoni =  {name: "pepperoni", price: 1};
var sausage =  {name: "sausage", price: 1};
var anchovies =  {name: "anchovies", price: 1};
var pineapple =  {name: "pineapple", price: 1};


function Pizza(size, price){
	this.size = size;
	this.price = price;
	this.toppings = [mushrooms, pepperoni, sausage, anchovies, pineapple];
}

function Order(){
	this.total = [];
}


//************************************ UI LOGIC ****************************//

$(document).ready(function(){
	
	$("form#pizza-form").submit(function(event){
		event.preventDefault();
		

	var size = $(this).find('.radio :checked').attr('id');
	var price = parseInt($(this).find('.radio :checked').val());


	var newPizza = new Pizza(size, price);
	var newOrder = new Order()

	
	
	var selectedToppings = $('.checkbox :checked').map(function() {
		return this.id;}).get();
	
	selectedToppings.forEach(function(topping){
		for (var i = 0; i < selectedToppings.length; i++){
			if (topping === newPizza.toppings.name[i]){
			newOrder.total.push(newPizza.toppings.price[i]);
		}

		}


	});

	
	

	console.log(newOrder.total);
	console.log(size);
	console.log(price);
	console.log(toppings);
	

	$("#show-result").show();
	// $("#order").append()
	
	
	
	});

});