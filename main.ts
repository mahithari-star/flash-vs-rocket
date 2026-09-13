namespace SpriteKind {
    export const myDart = SpriteKind.create()
}
info.onScore(30, function () {
    game.setGameOverEffect(true, effects.starField)
    game.gameOver(true)
})
let mySprite = sprites.create(assets.image`mc`, SpriteKind.Player)
mySprite.setPosition(24, 105)
controller.moveSprite(mySprite, 100, 100)
let myEnemy = sprites.create(assets.image`rocker`, SpriteKind.myDart)
myEnemy.setPosition(146, 10)
effects.blizzard.startScreenEffect(100)
scene.setBackgroundImage(assets.image`background for flash vs rocket`)
myEnemy.follow(mySprite, 80)
music.play(music.stringPlayable("C5 A B A F G C5 G ", 120), music.PlaybackMode.UntilDone)
mySprite.setStayInScreen(true)
forever(function () {
    pause(1000)
    info.changeScoreBy(1)
    if (myEnemy.overlapsWith(mySprite)) {
        game.gameOver(false)
    }
})
