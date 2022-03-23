input.onButtonPressed(Button.A, function () {
    if (4 > Pitches_) {
        Pitches_ += 1
        basic.showNumber(Pitches_)
        basic.showString("P")
        basic.showNumber(Strikes_)
        basic.showString("S")
    } else {
        basic.showString("No More Pitches")
        basic.showNumber(Pitches_)
        basic.showString("P")
        basic.showNumber(Strikes_)
        basic.showString("S")
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Reseting")
    Pitches_ = 0
    Strikes_ = 0
    basic.showIcon(IconNames.Target)
    basic.showNumber(Pitches_)
    basic.showString("P")
    basic.showNumber(Strikes_)
    basic.showString("S")
})
input.onButtonPressed(Button.B, function () {
    if (3 > Strikes_) {
        Strikes_ += 1
        basic.showNumber(Pitches_)
        basic.showString("P")
        basic.showNumber(Strikes_)
        basic.showString("S")
    } else {
        basic.showString("No More Strikes")
        basic.showNumber(Pitches_)
        basic.showString("P")
        basic.showNumber(Strikes_)
        basic.showString("S")
    }
})
let Strikes_ = 0
let Pitches_ = 0
basic.showIcon(IconNames.Target)
basic.showString("Pitches")
basic.showNumber(Pitches_)
basic.showString("Strikes")
basic.showNumber(Strikes_)
