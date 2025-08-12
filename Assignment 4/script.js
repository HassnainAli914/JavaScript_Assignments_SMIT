// Example 1: Day-Based Meal Suggestion
var day = prompt("Enter day of the week:"); 
day = day.toLowerCase(); 

if (day === "monday") {
    console.log("Today is Biryani!");
} else if (day === "tuesday") {
    console.log("Today is Nihari!");
} else if (day === "wednesday") {
    console.log("Today is Fried Chicken!");
} else if (day === "thursday") {
    console.log("Today is Pizza!");
} else if (day === "friday") {
    console.log("Today is Burgers!");
} else if (day === "saturday") {
    console.log("Today is Pasta!");
} else if (day === "sunday") {
    console.log("Today is Steak!");
} else {
    console.log("Invalid day entered!");
}

// Example 2: Weekend vs Weekday Reminder
if (day === "saturday" || day === "sunday") {
    console.log("It's weekend! Relax!");
} else if (
    day === "monday" ||
    day === "tuesday" ||
    day === "wednesday" ||
    day === "thursday" ||
    day === "friday"
) {
    console.log("It's a weekday! Work hard!");
} else {
    console.log("Invalid day entered!");
}

// Example 3: Age-Based Discount Calculation
var age = Number(prompt("Enter your age:"));

if (age < 18 && (day === "friday" || day === "saturday")) {
    console.log("You get a 15% discount!");

} else if (age >= 18 && (day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday")) {
    console.log("You get a 10% discount!");

} else if (age >= 50 && day === "sunday") {
    console.log("You get a 20% discount!");

} else {
    console.log("No discount today.");
}
