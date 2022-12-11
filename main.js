// Function to add an image slide show at the bottom of the page
$(function(){
  var $galleryImage = $('div#slideshow').find('img').first();
  var images = [
    "./images/keg-img.jpg",
    "./images/bottles-img.jpg",
    "./images/hops-img.jpg",
    "./images/beer-img.jpg",
  ];
  var i = 0;
  setInterval(function() {
    i = (i + 1) % images.length;
    $galleryImage.fadeOut(3000, function() {
      $(this).attr('src', images[i]);
      $(this).fadeIn(3000);
    })
  }, 2000);
});

// Function to convert Specific Gravity to Plato
var convertSpecificGravityToPlato = function(specificGravityNumber) {
  if (specificGravityNumber > 0) {
    platoNumber = (-1 * 616.868) + (1111.14 * specificGravityNumber) - (630.272 * (specificGravityNumber * specificGravityNumber)) + (135.997 * (specificGravityNumber * specificGravityNumber * specificGravityNumber));
    return platoNumber.toFixed(1);
  }
};

var calcSpecificGravityToPlato = document.querySelector('#button-gravity-to-plato');
calcSpecificGravityToPlato.addEventListener('click', function(e) {
  var input = document.querySelector('#input-gravity-to-plato');
  input.value = convertSpecificGravityToPlato(input.value);

  
});

// Function to convert Plato to Specific Gravity
var convertPlatoToSpecificGravity = function(platoNumber) {
  if (platoNumber > 0) {
    var specificGravityNumber = 1 + (platoNumber / (258.6 - ((platoNumber/258.2) * 227.1)));
    return specificGravityNumber.toFixed(3);
  }
};

var calcPlatoToSpecificGravity = document.querySelector('#button-plato-to-gravity');
calcPlatoToSpecificGravity.addEventListener('click', function(e) {
  var input = document.querySelector('#input-plato-to-gravity');
  input.value = convertPlatoToSpecificGravity(input.value);
});

// Function to convert sixteen ounce bottle cases to beer barrels
var convertSixteenOunceCasesToBeerBarrels = function(sixteenOunceCases){
  if (sixteenOunceCases > 0) {
    var beerBarrels = sixteenOunceCases * 0.09677;
    return beerBarrels.toFixed(2);
  }
};

var calcSixteenOunceCasesToBeerBarrels = document.querySelector('#button-sixteen-cases-to-beer-barrels');
calcSixteenOunceCasesToBeerBarrels.addEventListener('click', function(e) {
  var input = document.querySelector('#input-sixteen-cases-to-beer-barrels');
  input.value = convertSixteenOunceCasesToBeerBarrels(input.value);
});

// Function to convert twelve ounce bottle cases to beer barrels
var convertTwelveOunceCasesToBeerBarrels = function(twelveOunceCases){
  if (twelveOunceCases > 0) {
    var beerBarrels = twelveOunceCases * 0.07258;
    return beerBarrels.toFixed(2);
  }
};

var calcTwelveOunceCasesToBeerBarrels = document.querySelector('#button-twelve-cases-to-beer-barrels');
calcTwelveOunceCasesToBeerBarrels.addEventListener('click', function(e) {
  var input = document.querySelector('#input-twelve-cases-to-beer-barrels');
  input.value = convertTwelveOunceCasesToBeerBarrels(input.value);
});

// Function to convert sixth barrel kegs to beer barrels
var convertSixthBarrelKegsToBeerBarrels = function(sixthBarrelKegs){
  if (sixthBarrelKegs > 0) {
    var beerBarrels = sixthBarrelKegs * 0.1667742;
    return beerBarrels.toFixed(2);
  }
};

var calcSixthBarrelKegsToBeerBarrels = document.querySelector('#button-sixth-barrel-kegs-to-beer-barrels');
calcSixthBarrelKegsToBeerBarrels.addEventListener('click', function(e) {
  var input = document.querySelector('#input-sixth-barrel-kegs-to-beer-barrels');
  input.value = convertSixthBarrelKegsToBeerBarrels(input.value);
});

// Function to convert half barrel kegs to beer barrels
var convertHalfBarrelKegsToBeerBarrels = function(halfBarrelKegs){
  if (halfBarrelKegs > 0) {
    var beerBarrels = halfBarrelKegs * 0.5;
    return beerBarrels.toFixed(2);
  }
};

var calcHalfBarrelKegsToBeerBarrels = document.querySelector('#button-half-barrel-kegs-to-beer-barrels');
calcHalfBarrelKegsToBeerBarrels.addEventListener('click', function(e) {
  var input = document.querySelector('#input-half-barrel-kegs-to-beer-barrels');
  input.value = convertHalfBarrelKegsToBeerBarrels(input.value);
});

// Function to convert 20L key kegs to beer barrels
var convertTwentyLiterLKeyKegsToBeerBarrels = function(twentyLiterKeyKegs){
  if (twentyLiterKeyKegs > 0) {
    var beerBarrels = twentyLiterKeyKegs * 0.171;
    return beerBarrels.toFixed(2);
  }
};

var calcTwentyLiterKeyKegsToBeerBarrels = document.querySelector('#button-twenty-liter-key-kegs-to-beer-barrels');
calcTwentyLiterKeyKegsToBeerBarrels.addEventListener('click', function(e) {
  var input = document.querySelector('#input-twenty-liter-key-kegs-to-beer-barrels');
  input.value = convertTwentyLiterLKeyKegsToBeerBarrels(input.value);
});

// Function to convert 375mL bottles to beer barrels
var convert375mLBottleCasesToBeerBarrels = function(_375mLBottleCases){
  if (_375mLBottleCases > 0) {
    var beerBarrels = _375mLBottleCases * 0.038407;
    return beerBarrels.toFixed(2);
  }
};

var calc375mLBottleCasesToBeerBarrels = document.querySelector('#button-375mL-bottles-to-beer-barrels');
calc375mLBottleCasesToBeerBarrels.addEventListener('click', function(e) {
  var input = document.querySelector('#input-375mL-bottles-to-beer-barrels');
  input.value = convert375mLBottleCasesToBeerBarrels(input.value);
});

// Function to convert 500mL bottles to beer barrels
var convert500mLBottleCasesToBeerBarrels = function(_500mLBottleCases){
  if (_500mLBottleCases > 0) {
    var beerBarrels = _500mLBottleCases * 0.051109;
    return beerBarrels.toFixed(2);
  }
};

var calc500mLBottleCasesToBeerBarrels = document.querySelector('#button-500mL-bottles-to-beer-barrels');
calc500mLBottleCasesToBeerBarrels.addEventListener('click', function(e) {
  var input = document.querySelector('#input-500mL-bottles-to-beer-barrels');
  input.value = convert500mLBottleCasesToBeerBarrels(input.value);
});

// Function to convert 22oz bottles to beer barrels
var convert22ozBottleCasesToBeerBarrels = function(_22ozBottleCases){
  if (_22ozBottleCases > 0) {
    var beerBarrels = _22ozBottleCases * 0.06653;
    return beerBarrels.toFixed(2);
  }
};

var calc22ozBottleCasesToBeerBarrels = document.querySelector('#button-22oz-bottles-to-beer-barrels');
calc22ozBottleCasesToBeerBarrels.addEventListener('click', function(e) {
  var input = document.querySelector('#input-22oz-bottles-to-beer-barrels');
  input.value = convert22ozBottleCasesToBeerBarrels(input.value);
});

// Function to convert 750mL bottle cases to beer barrels
var convert750mLBottleCasesToBeerBarrels = function(_750mLBottleCases){
  if (_750mLBottleCases > 0) {
    var beerBarrels = _750mLBottleCases * 0.076814516;
    return beerBarrels.toFixed(2);
  }
};

var calc750mLBottleCasesToBeerBarrels = document.querySelector('#button-750mL-bottles-to-beer-barrels');
calc750mLBottleCasesToBeerBarrels.addEventListener('click', function(e) {
  var input = document.querySelector('#input-750mL-bottles-to-beer-barrels');
  input.value = convert750mLBottleCasesToBeerBarrels(input.value);
});

// Function to animate title letters
const spanJump = function(word) {
  return [...word].map(letter => `<span>${letter}</span>`).join('');
};

const heading = document.querySelector('.jump');

heading.innerHTML = spanJump(heading.textContent);

