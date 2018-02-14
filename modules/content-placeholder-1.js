class ContentPlaceholderPainter {
    paint(ctx, size) {
        console.log(size);

        ctx.lineWidth = 2;
        ctx.strokeStyle = '#666';

        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(size.width, size.height);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(size.width, 0);
        ctx.lineTo(0, size.height);
        ctx.stroke();
    }
}

registerPaint('content-placeholder', ContentPlaceholderPainter);