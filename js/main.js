var mushrooms =  {name: "mushrooms", price: 1};
var pepperoni =  {name: "pepperoni", price: 2};
var sausage =    {name: "sausage", price: 2};
var anchovies =  {name: "anchovies", price: 5};
var pineapple =  {name: "pineapple", price: 1};


function Pizza(size, price){
	this.size = size;
	this.price = price;
	this.toppings = [mushrooms, pepperoni, sausage, anchovies, pineapple];
}

function Order(){
	this.total = [];
}

Order.prototype.addPrice = function(){
	var price = 0;
	this.total.forEach(function(x){
		 price += x;
	});
	return price;
};

//************************************ UI LOGIC ****************************//

$(document).ready(function(){
	
	$("form#pizza-form").submit(function(event){
		event.preventDefault();
		

	var size = $(this).find('.radio :checked').attr('id');
	var price = parseInt($(this).find('.radio :checked').val());


	var newPizza = new Pizza(size, price);
	var newOrder = new Order();

	console.log(newPizza);
	
	
	
	var selectedToppings = $('.checkbox :checked').map(function() {
		return this.id;}).get();

	console.log(selectedToppings);
	
	newPizza.toppings.forEach(function(topping){
		for (var i = 0; i < newPizza.toppings.length; i++){
			if (topping.name === selectedToppings[i]){
			newOrder.total.push(topping.price);
		}

		}


	});

	
	

	console.log(newOrder.addPrice());
	
	

	$("#show-result").show();
	// $("#order").append()
	
	
	
	});

});