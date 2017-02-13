// JavaScript Document


var wood = 0;
var gems = 0;
var leather = 0;
var diamonds = 0;
var fur = 0;
var iron = 0;
var text1;
var amount_l;
var amount_f;
var armor;
var pickaxe;
var pick_durab;

function c_text(text1) {
 
	document.getElementById("text1").innerHTML = text1;
	document.getElementById("text1").value =  text1;
	
}

function leather_armor() {
		if(leather >= 100) {
			armor="leather";
			document.getElementById("armor").value= "armor = " + armor;	
		}else {
			c_text("You dont have enough leather to make armor...");	
		}
}

function iron_armor() {
		if(iron >= 100) {
			armor="iron";
			document.getElementById("armor").value= "armor = " + armor;	
		}else {
			c_text("You dont have enough iron to make armor...");
		}
}

function diamond_armor() {
		if(diamonds >= 50) {
			armor="diamond";
			document.getElementById("armor").value= "armor = " + armor;	
		}else {
			c_text("You dont have enough diamonds to make armor...");
		}
}

function day() {
	document.body.style.backgroundColor = "white";
	$('.button').addClass('light');
	$('.button').removeClass('dark');
	$('.div').addClass('lightDiv');
	$('.div').removeClass('darkDiv');
}

function night() {
	document.body.style.backgroundColor = "black";
	$('.button').addClass('dark');
	$('.button').removeClass('light');
	$('.div').addClass('darkDiv');
	$('.div').removeClass('lightDiv');
}

function grabWood() {
	wood+=1;

	
	document.getElementById("wood").value = "wood: " +wood;

	
}

function startFire() {
	
	 if(wood >= 5) {
	 		wood-=5;
			document.getElementById("wood").value =  wood;
			c_text("You have started a fire");
			document.getElementById("wood").value = "wood: " +wood;
			

			
	 }else {
	 	c_text("Not enough wood");
	 }
}

var traps= 0;
function makeTrap() {
	 if(wood >= 10) {
		  c_text("You created A TRAP!!")
	 		wood -= 10;
			traps += 1;
			document.getElementById("traps").value = "traps: " + traps;
			document.getElementById("wood").value = "wood: " + wood;			
	 }else {
	 	c_text("Not enough wood");
	 }
}

function checkTraps(){
		if (traps >= 1) {
			for (i = 0; i < traps; i++){
				amount_l = Math.round(Math.random()*10);
				amount_f = Math.round(Math.random() * 5);
				leather += amount_l;
				fur +=  amount_f;
				traps -= 1;
				c_text("The traps contained " + amount_l + " leather and " + amount_f + " fur." );
				document.getElementById("leather").value =  leather; 
				document.getElementById("leather").value = "leather: " + leather;
				document.getElementById("traps").value = traps;
				document.getElementById("traps").value="traps: " + traps;
				document.getElementById("fur").value = fur;
				document.getElementById("fur").value="fur: " + fur;
			}
		}
		else {
			c_text("You have no traps, idiot...");
		}
}

function trade() {
	var chooseNum =Math.round(Math.random()*10);
switch(chooseNum) {
	case 1:
	case 2:
	
				var firstCase = confirm("Would you like to trade 20 leather for 1 gem?");
				if(firstCase === false){
					c_text("FINE DON'T TRADE! I DONT CARE!");
					break;
				}
				if(firstCase && leather >= 20) {
					leather-=20;
					document.getElementById("leather").value =  leather; 
					document.getElementById("leather").value = "leather: " + leather;	
					gems+=1;
					document.getElementById("gems").value =  gems; 
					document.getElementById("gems").value = "gems: " + gems;	
					}else{
						c_text("You don't have enough leather...");
					}
					break;
	case 4:
	case 5:
	case 6:
			var secondCase = confirm("Would you like to trade 100 wood for 10 fur?");
				if(secondCase === false){
					c_text("FINE DON'T TRADE! I DONT CARE!");
					break;
				}
					if(secondCase && wood >= 100) {
					wood-=100;
					document.getElementById("wood").value =  wood; 
					document.getElementById("wood").value = "wood: " + wood;	
					fur+=10;
					document.getElementById("fur").value =  fur; 
					document.getElementById("fur").value = "fur: " + fur;	
					}else{
						c_text("You don't have enough wood...");
				}
				break;
	case 7:
	case 8:
	
				var thirdCase = confirm("Would you like to trade 10 gems for 1 diamond?");
				if(thirdCase === false){
					c_text("FINE DON'T TRADE! I DONT CARE!");
					break;
				}
					if(thirdCase && gems >= 10) {
					gems-=10;
					document.getElementById("gems").value =  gems; 
					document.getElementById("gems").value = "gems: " + gems;	
					diamonds+=1;
					document.getElementById("diamonds").value =  diamonds; 
					document.getElementById("diamonds").value = "diamonds: " + diamonds;
					}else {
						c_text("You don't have enough gems...");
				}
				break;
	case 10: 
				var fourthCase = confirm("Would you like to trade 1000 wood for 1 diamond?");
				if(fourthCase === false){
					c_text("FINE DON'T TRADE! I DONT CARE!");
					break;
				}
					if(fourthCase && wood >= 1000 ) {
					wood-=1000;
					document.getElementById("wood").value =  wood; 
					document.getElementById("wood").value = "wood: " + wood;	
					diamonds+=1;
					document.getElementById("diamonds").value =  diamonds; 
					document.getElementById("diamonds").value = "diamonds: " + diamonds;
					}else{
						c_text("You don't have enough wood...");
				}
				break;
	default:
	
			   var fifthCase = confirm("Would you like to trade 50 leather for 5 gems?");
			   if(fifthCase === false){
					c_text("FINE DON'T TRADE! I DONT CARE!");
					break;
				}
			   	if(fifthCase && leather >= 50) {
					leather-=50;
					document.getElementById("leather").value =  leather; 
					document.getElementById("leather").value = "leather: " + leather;	
					gems+=5;
					document.getElementById("gems").value =  gems; 
					document.getElementById("gems").value = "gems: " + gems;	
					}else{
						c_text("You don't have enough leather...");
				}
				break;
}
}

function makePickaxe() {
	if(wood >= 20 && leather >= 5) {
			pickaxe += 1;
			wood -= 20;
			leather -= 5;
			pick_durab=100;
			document.getElementById("wood").value =  wood; 
		    document.getElementById("wood").value = "wood: " + wood;	
		    document.getElementById("leather").value =  leather; 
			document.getElementById("leather").value = "leather: " + leather;	
			c_text("You have made a pickaxe");
			
		}else {
			c_text("YOU DONT HAVE ENOUGH WOOD AND LEATHER");
		
		}
}

function mining() {
		if(pickaxe>=1) {
			
		}
		else {
			c_text("YOU AINT HAVE NO PICKAXES BOI");
		}
}

function get_Iron() {
	if(pick_durab > 0) {
		iron +=1;
		pick_durab-=5;
		document.getElementById("pick_durab").value =  pick_durab; 
		document.getElementById("pick_durab").value = "Pick Durability: " + pick_durab;	
		document.getElementById("iron").value =  iron; 
		document.getElementById("iron").value = "iron: " + iron;	
		c_text("You mined 1 Iron");
	}else {
		c_text("YOUR PICKAXE IS BROKEN BOI");
	}
}

function get_diamond() {
	if(pick_durab > 0 && pick_durab>5) {
		diamonds +=1;
		pick_durab-=10;
		document.getElementById("pick_durab").value =  pick_durab; 
		document.getElementById("pick_durab").value = "Pick Durability: " + pick_durab;	
		document.getElementById("diamonds").value =  diamonds; 
		document.getElementById("diamonds").value = "diamonds: " + diamonds;	
		c_text("You mined 1 diamond");
		
	}else if(pick_durab<=5 && pick_durab !==0) {
			c_text("YOUR PICKAXE AINT ABLE TO MINE DIAMOND");
	}
		
	else {
		
		c_text("YOUR PICKAXE IS BROKEN BOI");
	}
}






































// JQuery











































































