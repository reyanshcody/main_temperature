input.onButtonPressed(Button.A, function () {
    basic.showNumber(min2)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(max2)
})
let max2 = 0
let min2 = 0
let c = input.temperature()
min2 = input.temperature()
max2 = input.temperature()
basic.forever(function () {
    c = input.temperature()
    if (c < min2) {
        min2 = c
    }
    if (c > max2) {
        max2 = c
    }
    basic.showNumber(c)
})
