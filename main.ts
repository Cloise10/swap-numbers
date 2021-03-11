// when P0 is pressed, it presents both numbers
input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.showString("uno=")
    basic.showNumber(uno)
    basic.pause(200)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showString("dos=")
    basic.showNumber(dos)
    basic.clearScreen()
})
// when A is pressed, "uno" goes up by one
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(200)
    uno += 1
    basic.showNumber(uno)
    basic.pause(200)
    basic.clearScreen()
})
// when tilted to left, "uno" goes down by one
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(200)
    uno += -1
    basic.showNumber(uno)
    basic.pause(200)
    basic.clearScreen()
})
// when P2 is pressed, it sets the number to "dos"
input.onPinPressed(TouchPin.P2, function () {
    dos = dos
})
// when B is pressed, "dos" goes up by one
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(200)
    dos += 1
    basic.showNumber(dos)
    basic.pause(200)
    basic.clearScreen()
})
// when P1 is pressed, it sets the number to "uno"
input.onPinPressed(TouchPin.P1, function () {
    uno = uno
})
// on shake, clears screen
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
// when tilted to left, "dos" goes down by one
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.pause(200)
    dos += -1
    basic.showNumber(dos)
    basic.pause(200)
    basic.clearScreen()
})
// on start, sets both "uno" and "dos" to 0
let dos = 0
let uno = 0
basic.showLeds(`
    # # # # #
    # . . . #
    # . # . #
    # . . . #
    # # # # #
    `)
uno = 0
dos = 0
