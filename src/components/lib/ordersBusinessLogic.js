const orders = [
    { customer: "Alex", total: 120, status: "completed" },
    { customer: "Jordan", total: 80, status: "pending" },
    { customer: "Taylor", total: 250, status: "completed" },
    { customer: "Sam", total: 40, status: "cancelled" }
];

// Function 1 - Return only completed orders
function getCompletedOrders() {
    return orders.filter(order => order.status === "completed");
}

// Function 2 - Calculate total revenue from completed orders
function calculateRevenue() {
    return getCompletedOrders().reduce((total, order) => {
        return total + order.total;
    }, 0);
}

// Function 3 - Return orders over $100
function getHighValueOrders() {
    return orders.filter(order => order.total > 100);
}

// Function 4 - Return a full dashboard summary
function createOrderDashboard() {
    return {
        totalOrders: orders.length,
        completedOrders: getCompletedOrders().length,
        totalRevenue: calculateRevenue(),
        highValueOrders: getHighValueOrders().length
    };
}

console.log("Completed Orders:", getCompletedOrders());
console.log("Total Revenue: $", calculateRevenue());
console.log("High Value Orders:", getHighValueOrders());
console.log("Order Dashboard:", createOrderDashboard());

export { getCompletedOrders, calculateRevenue, getHighValueOrders, createOrderDashboard };
