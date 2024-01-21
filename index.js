//Freelancer Forum Script file


//array of two original freelancers listed upon opening site
const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
];


//Below on lines 15-24 is an array of the additional 8 free lancers for our 
//FirstName/LastName/Occupation function to read through 
//and add a random additional freelancer ever [blank] seconds

const additionalFreelancers =[
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
  { name: "LoLo Jr.", price: 15, occupation: "babysitter" },
  { name: "Mr. Pringles", price: 30, occupation: "driver" },
];


// // Set interval to add a freelancer and rerender every 5 seconds (5000 milliseconds)
// setInterval(addRandomFreelancer, 5000);

// *************** set interval function needed to be moved to the bottom + a delay added 
// **************************so that the initial two could load properly before additionals were added
//explination: When the setInterval function is called, it immediately triggers the addRandomFreelancer function, 
//which adds a freelancer and renders the updated list.



// Function to render freelancers onto the page
function renderFreelancers() {

  // Update DOM to reflect the average starting price
  const averageStartingPrice = calculateAverageStartingPrice();
  const averagePriceElement = document.querySelector('#average-starting-price');
  averagePriceElement.textContent = `Average Starting Price: ${averageStartingPrice}`;

  const freelancersList = document.querySelector('#freelancers-list');
  freelancersList.innerHTML = ''; // Clear previous content

  freelancers.forEach(freelancer => {
    const freelancerCard = document.createElement('div');
    freelancerCard.classList.add('freelancer-card');
    freelancerCard.innerHTML = `
      <h3>${freelancer.name}</h3>
      <p>Occupation: ${freelancer.occupation}</p>
      <p>Starting Price: ${freelancer.price}</p>
    `;
    freelancersList.appendChild(freelancerCard);
  });
}

// Function to calculate the average starting price of freelancers
function calculateAverageStartingPrice() {
  const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
  const averagePrice = totalPrices / freelancers.length;
  return averagePrice.toFixed(2); // Display average with two decimal places
}

// Function to add a random freelancer from additionalFreelancers to the array
function addRandomFreelancer() {
  if (additionalFreelancers.length > 0) {
    const randomIndex = Math.floor(Math.random() * additionalFreelancers.length);
    const newFreelancer = additionalFreelancers.splice(randomIndex, 1)[0];

    freelancers.push(newFreelancer);
    renderFreelancers();
  } else {
    console.log("No more additional freelancers available.");
  }
}

// Initial render
document.addEventListener("DOMContentLoaded", function () {
  // Set interval to add a freelancer and rerender every 5 seconds (5000 milliseconds)
  setInterval(addRandomFreelancer, 5000);

  // Initial render after a delay
  setTimeout(() => {
    renderFreelancers();
  }, 1000); // Delay the initial render by 1000 milliseconds (1 second)
});