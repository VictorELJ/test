enum RadioMessage {
    message1 = 49434
}
input.onGesture(Gesture.Shake, function () {
	
})
radio.onReceivedNumber(function (receivedNumber) {
    let Tre_bit = 0
    if (receivedNumber == 1) {
        En_bit += 1
        i_alt = En_bit + (To_bit + Tre_bit)
        basic.showNumber(i_alt)
    } else {
        if (receivedNumber == 3) {
            To_bit += 1
            i_alt = En_bit + (To_bit + Tre_bit)
            basic.showNumber(i_alt)
        }
    }
    if (receivedNumber == 2) {
        i_alt = i_alt - En_bit
        basic.showNumber(i_alt)
        En_bit = 0
    } else {
        if (receivedNumber == 4) {
            i_alt = i_alt - To_bit
            basic.showNumber(i_alt)
            To_bit = 0
        }
    }
})
input.onGesture(Gesture.EightG, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
let To_bit = 0
let i_alt = 0
let En_bit = 0
radio.setGroup(1)
