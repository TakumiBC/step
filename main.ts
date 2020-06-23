input.onButtonPressed(Button.A, function () {
    STEPS = 0
})
input.onGesture(Gesture.Shake, function () {
    STEPS += 1
})
let STEPS = 0
STEPS = 0
basic.forever(function () {
    basic.showString("" + (STEPS))
})
