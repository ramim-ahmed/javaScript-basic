


// kilometerToMeter Problem Solving Fuction define Below.

function kilometerToMeter ( kilometer ) {

    var meter = 1000;

    // init meter value
    var total = 0;

    if(kilometer < 0){
        console.log('UnExpected Value ');
    }else{
        var convertMeter = kilometer * meter;
    }
    total += convertMeter
    return total;
}
var totalMeter = kilometerToMeter(10);
console.log(totalMeter);




// budgetCalculator function define below.

function budgetCalculator (clock, phone, labtob) {
    // budget init value 
    var totalBudgetAmount = 0

    var clockPrice = 50;
    var phonePrice = 100;
    var labtobPrice = 500;

    var clockRate = clockPrice * clock;
    var phoneRate = phonePrice * phone;
    var labtobRate = labtobPrice * labtob;

   
    totalBudgetAmount += clockRate + phoneRate + labtobRate;

    return totalBudgetAmount;
    

}
var totalBudget = budgetCalculator(1, 5, 3)
console.log(totalBudget);




// // hotelCost function define below;

function hotelCost (value) {
      var totalAmout = 0;

      if( value <=10){
        totalAmout = value * 100
      }else if (value <= 20) {
           var firstValue = 10 * 100;
           var remaining = value - 10;
           var seceondPartValue = remaining * 80;
           totalAmout = firstValue + seceondPartValue;
      }else{
          var firstStepValue = 10 * 100;
          var seceondStepValue = 10 * 80;
          var runningValue = value - 20;
          var thirdStepValue = runningValue * 50;
          totalAmout = firstStepValue + seceondStepValue + thirdStepValue;

      }

      return totalAmout;

}

var hotelTotalCost = hotelCost (22);
console.log(hotelTotalCost);




// megaFriend function define below

var friendsArray = [
    'Md Raju', 'Rimon', 'Shawon', 'Sumon Ahmed', 'Wasim Akram', 'habibullah Rahman', 'Shoel Khan'
];


function megaFriend (array) {
    var length=0;
    var longest="";
    for(var i=0;i<array.length;i++){
     
      if(array[i].length>length){
      length=array[i].length;
      longest=array[i];
      }
    }
    return longest;


}

var maxFriends = megaFriend(friendsArray);
console.log(maxFriends);
