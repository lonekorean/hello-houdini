class JaggedEdgePainter {
    paint(ctx, size, props) {
        let toothWidth = 300;
        let toothHeight = 100;

        // lots of math to ensure teeth are collectively centered
        let spaceBeforeCenterTooth = (size.width - toothWidth) / 2;
        let teethBeforeCenterTooth = Math.ceil(spaceBeforeCenterTooth / toothWidth);
        let startingPoint = spaceBeforeCenterTooth - teethBeforeCenterTooth * toothWidth;
        let totalTeeth = teethBeforeCenterTooth * 2 + 1;

        console.log(startingPoint);

        for (let i = 0; i < totalTeeth; i++) {
            let x = startingPoint + toothWidth * i;
            ctx.beginPath();
            ctx.moveTo(x, toothHeight);
            ctx.lineTo(x + toothWidth / 2, 0);
            ctx.lineTo(x + toothWidth, toothHeight);
            ctx.closePath();
            ctx.fill();
        }
    }
}

registerPaint('jagged-edge', JaggedEdgePainter);