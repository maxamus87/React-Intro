// ─── Data ────────────────────────────────────────────────────────────────────

export const rentals = [
  { id: 1, customer: "Alex",   movie: "Inception",       genre: "Sci-Fi",  daysRented: 3, dailyRate: 4.99, isReturned: true,  membershipTier: "gold"   },
  { id: 2, customer: "Jordan", movie: "The Shining",     genre: "Horror",  daysRented: 5, dailyRate: 3.99, isReturned: false, membershipTier: "silver" },
  { id: 3, customer: "Sam",    movie: "Interstellar",    genre: "Sci-Fi",  daysRented: 2, dailyRate: 4.99, isReturned: true,  membershipTier: "none"   },
  { id: 4, customer: "Taylor", movie: "The Notebook",    genre: "Romance", daysRented: 7, dailyRate: 2.99, isReturned: true,  membershipTier: "gold"   },
  { id: 5, customer: "Morgan", movie: "Oppenheimer",     genre: "Drama",   daysRented: 4, dailyRate: 4.99, isReturned: false, membershipTier: "silver" },
  { id: 6, customer: "Casey",  movie: "The Thing",        genre: "Horror",  daysRented: 3, dailyRate: 3.99, isReturned: true,  membershipTier: "none"   },
];

// ─── Part 1: Individual Functions ────────────────────────────────────────────

// Returns only rentals where isReturned is true
export function getReturnedRentals(rentals) {
  return rentals.filter((rental) => rental.isReturned === true);
}

// Adds a `cost` property to a single rental — does not mutate the original
// Discount: gold = 20% off, silver = 10% off, none = full price
export function calculateRentalCost(rental) {
  const baseCost = rental.daysRented * rental.dailyRate;

  let discount = 0;
  if (rental.membershipTier === "gold")   discount = 0.20;
  if (rental.membershipTier === "silver") discount = 0.10;

  const cost = parseFloat((baseCost * (1 - discount)).toFixed(2));
  return { ...rental, cost };
}

// Sums the cost across every rental in the array (expects costs already applied)
export function getTotalRevenue(rentals) {
  return parseFloat(
    rentals.reduce((total, rental) => total + rental.cost, 0).toFixed(2)
  );
}

// Returns only rentals whose genre matches the provided string
export function getGenreRentals(genre, rentals) {
  return rentals.filter((rental) => rental.genre === genre);
}

// ─── Part 1: Orchestrator ─────────────────────────────────────────────────────

// 1. Filter to returned rentals
// 2. Apply costs to each one
// 3. Compute summary stats
export function getRentalReport(rentals) {
  const returned      = getReturnedRentals(rentals);
  const withCosts     = returned.map(calculateRentalCost);
  const totalRevenue  = getTotalRevenue(withCosts);
  const totalReturned = withCosts.length;

  // reduce compares every rental, keeping whichever has the higher cost
  const mostExpensive = withCosts.reduce((best, rental) =>
    rental.cost > best.cost ? rental : best
  );

  return { totalRevenue, totalReturned, mostExpensive, rentals: withCosts };
}

// ─── Stretch Goal: Genre Orchestrator ────────────────────────────────────────

export function getGenreReport(genre, rentals) {
  const genreRentals = getGenreRentals(genre, rentals);
  const withCosts    = genreRentals.map(calculateRentalCost);
  return { genre, totalRentals: withCosts.length, totalRevenue: getTotalRevenue(withCosts) };
}

// ─── console.log Tests ────────────────────────────────────────────────────────

console.log("--- getReturnedRentals ---");
console.log(getReturnedRentals(rentals));

console.log("--- calculateRentalCost (Alex / gold) ---");
console.log(calculateRentalCost(rentals[0]));  // 3 * 4.99 * 0.80 = 11.98

console.log("--- calculateRentalCost (Sam / none) ---");
console.log(calculateRentalCost(rentals[2]));  // 2 * 4.99 = 9.98

console.log("--- getTotalRevenue ---");
const returned = getReturnedRentals(rentals).map(calculateRentalCost);
console.log(getTotalRevenue(returned));

console.log("--- getGenreRentals (Sci-Fi) ---");
console.log(getGenreRentals("Sci-Fi", rentals));

console.log("--- getRentalReport ---");
console.log(getRentalReport(rentals));

console.log("--- getGenreReport (Sci-Fi) ---");
console.log(getGenreReport("Sci-Fi", rentals));

console.log("--- getGenreReport (Action) ---");
console.log(getGenreReport("Action", rentals));
