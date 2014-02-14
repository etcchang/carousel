// create array of images

var foodPic = ['images/food1.jpg', 'images/food2.jpg', 'images/food3.jpg', 'images/food4.jpg'];
var arrayNumber = 0
console.log(foodPic);

// upon button press, move through pics

$('#buttonback').click(previousImage);

function previousImage() {
  console.log('clicked Back');
  arrayNumber = arrayNumber - 1;
  console.log('Array number is ' + arrayNumber);
  document.getElementById('image-to-vote-on').src = foodPic[arrayNumber];
}

$('#buttonskip').click(nextImage);

function nextImage() {
  console.log('clicked Skip');
  arrayNumber += 1;
  console.log('Array number is ' + arrayNumber);  
  document.getElementById('image-to-vote-on').src = foodPic[arrayNumber];
}

// limit array number from 0 to 3

// upon vote, register votes
// upon vote, move through pics

$('#your-vote').change(voteOnImage);

function voteOnImage() {

  var ratePic1

  if ($(this).val() === '1') {
    ratePic1 = 1;
    console.log('My vote: ' + ratePic1);
  }
  if ($(this).val() === '2') {
    ratePic1 = 2;
    console.log('voted 2');
  }
  if ($(this).val() === '3') {
    ratePic1 = 3;
    console.log('voted 3');
  }
  if ($(this).val() === '4') {
    ratePic1 = 4;
    console.log('voted 4');
  }
    if ($(this).val() === '5') {
    ratePic1 = 5;
    console.log('voted 5');
  }

// create an arrary
// store value of vote into array

var foodVote = [ratePic1];
console.log('Vote on pic 1 is: ' + foodVote[0]);
console.log('Number of votes is ' + foodPic.length);

// add values in array and divide by number of votes

var averageVote = foodVote/foodPic.length;

// display average

document.getElementById('average').innerHTML = averageVote;
}

// .class
// #id