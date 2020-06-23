def on_gesture_shake():
    global STEPS
    STEPS += 1
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

STEPS = 0

def on_forever():
    basic.show_string("" + str((STEPS)))
basic.forever(on_forever)
