class ContentPlaceholderPainter {
    static get inputProperties() {
        return ['border-top-width', 'border-top-color'];
    }

    paint(ctx, size, props) {
        console.log(size);

        let width = props.get('border-top-width').value;
        let color = props.get('border-top-color').toString();
console.log(width);
        ctx.lineWidth = width;
        ctx.strokeStyle = color;

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