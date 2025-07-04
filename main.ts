input.onButtonPressed(Button.A, function () {
    Jaggubbe.change(LedSpriteProperty.X, -1)
    music.play(music.createSoundExpression(WaveShape.Noise, 5000, 1, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    Jaggubbe.change(LedSpriteProperty.Y, 1)
    music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.ScreenDown, function () {
    music.play(music.stringPlayable("A F B G E A G C5 ", 346), music.PlaybackMode.InBackground)
    radio.sendString("hej, hej")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . . . . #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    Jaggubbe.change(LedSpriteProperty.Y, -1)
    music.play(music.createSoundExpression(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
radio.onReceivedString(function (receivedString) {
    music.play(music.stringPlayable("G A F C5 A F G D ", 200), music.PlaybackMode.InBackground)
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    Jaggubbe.change(LedSpriteProperty.X, 1)
    music.play(music.createSoundExpression(WaveShape.Noise, 5000, 1, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
})
let Jaggubbe: game.LedSprite = null
music.setVolume(127)
radio.setGroup(1)
Jaggubbe = game.createSprite(0, 4)
let lava = game.createSprite(0, 3)
let lava2 = game.createSprite(2, 3)
let lava3 = game.createSprite(3, 3)
let lava4 = game.createSprite(1, 1)
let lava5 = game.createSprite(2, 1)
let lava6 = game.createSprite(3, 1)
let lava7 = game.createSprite(4, 1)
let lava8 = game.createSprite(1, 3)
let mål = game.createSprite(4, 0)
basic.forever(function () {
    music.setVolume(255)
    if (Jaggubbe.isTouching(lava) == led.point(0, 3)) {
        basic.clearScreen()
        game.gameOver()
    }
    if (Jaggubbe.isTouching(lava2) == led.point(2, 3)) {
        basic.clearScreen()
        game.gameOver()
    }
    if (Jaggubbe.isTouching(lava3) == led.point(3, 3)) {
        basic.clearScreen()
        game.gameOver()
    }
    if (Jaggubbe.isTouching(lava4) == led.point(1, 1)) {
        basic.clearScreen()
        game.gameOver()
    }
    if (Jaggubbe.isTouching(lava5) == led.point(2, 1)) {
        basic.clearScreen()
        game.gameOver()
    }
    if (Jaggubbe.isTouching(lava6) == led.point(3, 1)) {
        basic.clearScreen()
        game.gameOver()
    }
    if (Jaggubbe.isTouching(lava7) == led.point(4, 1)) {
        basic.clearScreen()
        game.gameOver()
    }
    if (Jaggubbe.isTouching(lava8) == led.point(1, 3)) {
        basic.clearScreen()
        game.gameOver()
    }
    if (Jaggubbe.isTouching(mål) == led.point(4, 0)) {
        music.setVolume(150)
        basic.showString("You Win!")
        music.play(music.stringPlayable("B B A E E D D D ", 100), music.PlaybackMode.InBackground)
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . # . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . # . . .
            # . . . .
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . . . # .
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            `)
        music.play(music.stringPlayable("B B A E E G G G ", 120), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            `)
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
        music.play(music.stringPlayable("B B A E E D D D ", 120), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            . # . . .
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.showLeds(`
            . . . . .
            # . . . .
            . . . . .
            # . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . . . . .
            # . . . .
            . . . . .
            # . . . .
            `)
        basic.showLeds(`
            . . . . .
            # . . . .
            . . . . .
            # . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            . . . . .
            # . . . .
            . . . . .
            # . . . .
            `)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . # . . .
            # . . . .
            `)
        music.play(music.stringPlayable("B B A E E G G G ", 120), music.PlaybackMode.InBackground)
        basic.showLeds(`
            # . . . .
            . # . . .
            . # . . .
            . # . . .
            # . . . .
            `)
        basic.showLeds(`
            # # . . .
            . . # . .
            . . . # .
            . . # . .
            # # . . .
            `)
        basic.showLeds(`
            # # . . .
            . . # . .
            . . # . .
            . . # . .
            # # . . .
            `)
        basic.showLeds(`
            # # # . .
            . . . # .
            . . . . #
            . . . # .
            # # # . .
            `)
        basic.showLeds(`
            . # # # .
            . . . . #
            . . . . .
            . . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . # # #
            . . . . .
            . . . . .
            . . . . .
            . . # # #
            `)
        basic.showLeds(`
            . . . # #
            . . . . .
            . . . . .
            . . . . .
            . . . # #
            `)
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
        music.play(music.stringPlayable("B B A E E D D D ", 120), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            . . . . #
            `)
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            . . . . .
            . . . . #
            `)
        basic.showLeds(`
            . . . . #
            . . . . .
            . . # # .
            . . . . #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . #
            . # # # .
            . . . . .
            . . . . #
            `)
        basic.showLeds(`
            . . . . #
            . . . . .
            # # # # .
            . . . . #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . #
            # # # # .
            . . . . .
            . . . . #
            `)
        basic.showLeds(`
            . . . . #
            . . # . .
            # # # # .
            . . # . #
            . . . . .
            `)
        music.play(music.stringPlayable("B B A E E G G G ", 120), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . . . .
            . # # . #
            # # # # .
            . . # . .
            . . . . #
            `)
        basic.showLeds(`
            . . . . #
            . # # . .
            # # # # .
            . # # . #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # # . . #
            # # # . .
            # # . . .
            . . . . #
            `)
        basic.showLeds(`
            . . . . #
            # . . . .
            # # . . .
            # . . . #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . #
            # . . . .
            . . . . .
            . . . . #
            `)
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            . . . # #
            `)
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . # . #
            . . . # .
            `)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . # . .
            . . # . .
            . . . # #
            `)
        music.play(music.stringPlayable("B B A E E D D D ", 120), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . . . #
            . . # . .
            . . # . .
            . . # . #
            . . . # .
            `)
        basic.showLeds(`
            . . # . .
            . . # . #
            . . # . .
            . . # . .
            . . . # #
            `)
        basic.showLeds(`
            . . # . #
            . . # . .
            . . # . .
            . . # . #
            . . . # .
            `)
        basic.showLeds(`
            . . # . .
            . . # . #
            . . # . .
            . . # . .
            . . . # .
            `)
        basic.showLeds(`
            . . # . #
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . #
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . #
            . . # . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . .
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        music.play(music.stringPlayable("B B A E E G G G ", 120), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . . . .
            . # . . #
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . . .
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . . .
            . . . . .
            . . . . #
            `)
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . #
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
        basic.showLeds(`
            . . # # #
            . . . . .
            . . . . .
            . . . . .
            . . # # #
            `)
        basic.showLeds(`
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
        music.play(music.stringPlayable("B B A E E D D D ", 120), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . # . . .
            . . # # .
            . . . . #
            # . . . .
            . # # . .
            `)
        basic.showLeds(`
            . . # . .
            . . . # .
            . . . . #
            # . . . .
            . # . . .
            `)
        basic.showLeds(`
            . . # . .
            . . . # .
            # . . # .
            # . . . #
            . # . . .
            `)
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            `)
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            # . . . .
            `)
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . #
            # . . . .
            # . . . .
            `)
        basic.showLeds(`
            # . . . #
            # . . . #
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.showLeds(`
            # . . . #
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        music.play(music.stringPlayable("B B A E E G G G ", 120), music.PlaybackMode.InBackground)
        basic.showLeds(`
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            # # . . .
            `)
        basic.showLeds(`
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            # # # # .
            `)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.showLeds(`
            . # # # #
            . # # # #
            . # # # #
            . # # # #
            . # # # #
            `)
        basic.showLeds(`
            . . # # #
            . . # # #
            . . # # #
            . . # # #
            . . # # #
            `)
        basic.showLeds(`
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            . . . # #
            `)
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        music.play(music.stringPlayable("B B A E E D D D ", 120), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . # .
            . # . . .
            . . . . .
            # . . # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            # . . . .
            . . . # .
            . . . . .
            . . . # #
            . # # . .
            `)
        music.play(music.stringPlayable("B B A E E G G G ", 120), music.PlaybackMode.InBackground)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . # . .
            . . . # .
            . . . . .
            . # . . #
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
