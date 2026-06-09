const users =[
    {name: "Alex", membershiptTier: "gold", totalSpend: 1200, isVerified: true },
    {name: "Jordan", membershiptTier: "silver", totalSpend: 450, isVerified: true },
    {name: "Sam", membershiptTier: "none", totalSpend: 80, isVerified: false},
    {name: "Taylor", membershiptTier: "gold", totalSpend: 3200, isVerified: true},
    {name: "Morgan", membershiptTier: "silver", totalSpend: 290, isVerified: false}
]

const cart = [
    {name: "Laptop", price: 999, quantity: 1, inStock: true },
    {name: "Mouse", price: 29, quantity: 2, inStock: true },
    {name: "Monitor", price: 349, quantity: 1, inStock: false },
    {name: "Keyboard", price: 79, quantity: 1, inStock: true }
]

export function getCheckoutCart(cart) {
    return cart.filter(item => item.inStock === true)
}

export function calculateTotal(user, eligibleCart) {
    const subtotal = eligibleCart.reduce((total, item) => {
        return total + item.price * item.quantity
    }, 0)

    if (user.membershiptTier === "gold") {
        return subtotal * 0.80
    } 
    else if (user.membershiptTier === "silver") {
        return subtotal * 0.90
    }
    else {
        return subtotal
    }
}

export function getVerifiedusers(users) {
    return users
        .filter(user => user.isVerified === true)
        .map(user => ({ mame: user.name, membershiptTier: user.membershiptTier }))
}

const eligibleCart = getCheckoutCart(cart)
console.log("Eligible Cart:", eligibleCart)

const alex = users[0]
const total = calculateTotal(alex, eligibleCart)
console.log("Alex's Total:", total)

const veriifiedUsers = getVerifiedusers(users)
console.log("Verified Users:", veriifiedUsers)