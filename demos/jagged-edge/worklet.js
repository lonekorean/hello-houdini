class JaggedEdgePainter {
    paint(ctx, size, props) {
        let toothWidth = 40;
        let toothHeight = 20;

        // lots of math to ensure teeth are collectively centered
        let spaceBeforeCenterTooth = (size.width - toothWidth) / 2;
        let teethBeforeCenterTooth = Math.ceil(spaceBeforeCenterTooth / toothWidth);
        let startX = spaceBeforeCenterTooth - teethBeforeCenterTooth * toothWidth;
        let totalTeeth = teethBeforeCenterTooth * 2 + 1;

        // draw each tooth
        for (let i = 0; i < totalTeeth; i++) {
            let x = startX + toothWidth * i;

            // draws triangle from bottom left to top to bottom right
            ctx.beginPath();
            ctx.moveTo(x, toothHeight);
            ctx.lineTo(x + toothWidth / 2, 0);
            ctx.lineTo(x + toothWidth, toothHeight);
            ctx.closePath();
            ctx.fill();
        }

        // fill area below teeth
        ctx.fillRect(0, toothHeight, size.width, size.height);
    }
}

registerPaint('jagged-edge', JaggedEdgePainter);
