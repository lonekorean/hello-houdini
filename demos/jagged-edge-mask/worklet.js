class JaggedEdgeMaskPainter {
    static get inputProperties() {
        return ['--tooth-width', '--tooth-height'];
    }

    paint(ctx, size, props) {
        let toothWidth = props.get('--tooth-width').value;
        let toothHeight = props.get('--tooth-height').value;

        // lots of math to ensure teeth are collectively centered
        let spaceBeforeCenterTooth = (size.width - toothWidth) / 2;
        let teethBeforeCenterTooth = Math.ceil(spaceBeforeCenterTooth / toothWidth);
        let totalTeeth = teethBeforeCenterTooth * 2 + 1;
        let startX = spaceBeforeCenterTooth - teethBeforeCenterTooth * toothWidth;

        // start drawing teeth from left
        ctx.beginPath();
        ctx.moveTo(startX, toothHeight);

        // draw the top zig-zag for all the teeth
        for (let i = 0; i < totalTeeth; i++) {
            let x = startX + toothWidth * i;
            ctx.lineTo(x + toothWidth / 2, 0);
            ctx.lineTo(x + toothWidth, toothHeight);
        }

        // surround the area below the teeth and fill it all in
        ctx.lineTo(size.width, size.height);
        ctx.lineTo(0, size.height);
        ctx.closePath();
        ctx.fill();
    }
}

registerPaint('jagged-edge-mask', JaggedEdgeMaskPainter);
