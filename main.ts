radio.onReceivedNumber(function (receivedNumber) {
    basic.showLeds(`
        . . # . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    music.setVolume(45 + receivedNumber)
    music.ringTone(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . . # . .
        . . # . .
        `)
    for (let index = 0; index < 10000; index++) {
        lista.push(input.soundLevel())
        basic.pause(1)
    }
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        `)
    for (let index = 0; index < 10000; index++) {
        let list: number[] = []
        radio.sendNumber(list.pop())
        basic.pause(1)
    }
    basic.showIcon(IconNames.Yes)
})
let lista: number[] = []
radio.setGroup(32)
lista = [input.soundLevel()]
