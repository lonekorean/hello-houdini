class SolidPaintArgumentPainter {
    static get inputArguments() {
        return ['<color>'];
    }

    paint(ctx, size, props, args) {
        ctx.fillStyle = args[0].toString();
        ctx.fillRect(0, 0, size.width, size.height);
    }
}

registerPaint('solid-paint-argument', SolidPaintArgumentPainter);
