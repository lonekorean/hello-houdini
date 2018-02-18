class PlaceholderBoxPainter {
    static get inputProperties() {
        return ['border-top-width', 'border-top-color'];
    }

    paint(ctx, size, props) {
        // default values
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#666';

        // set line width to top border width (if exists)
        let borderTopWidthProp = props.get('border-top-width');
        if (borderTopWidthProp) {
            ctx.lineWidth = borderTopWidthProp.value;
        }

        // set stroke style to top border color (if exists)
        let borderTopColorProp = props.get('border-top-color');
        if (borderTopColorProp) {
            ctx.strokeStyle = borderTopColorProp.toString();
        }

        // draw line from top left to bottom right
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(size.width, size.height);
        ctx.stroke();

        // draw line from top right to bottom left
        ctx.beginPath();
        ctx.moveTo(size.width, 0);
        ctx.lineTo(0, size.height);
        ctx.stroke();
    }
}

registerPaint('placeholder-box', PlaceholderBoxPainter);