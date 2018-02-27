class PolkaDotFadePainter {
    static get inputProperties() {
        return ['--dot-spacing', '--dot-fade-offset', '--dot-color'];
    }

    paint(ctx, size, props) {
        let dotSpacing = props.get('--dot-spacing').value;
        let dotFadeOffset = props.get('--dot-fade-offset').value;
        let dotColor = props.get('--dot-color').toString();

        ctx.fillStyle = dotColor;
        for (let y = 0; y < size.height + dotSpacing; y += dotSpacing) {
            for (let x = 0; x < size.width + dotSpacing; x += dotSpacing * 2) {
                // every other row shifts x to create staggered dots
                let staggerX = x + ((y / dotSpacing) % 2 === 1 ? dotSpacing : 0);

                // calculate dot radius based on horizontal position and fade offset
                let fadeRelativeX = staggerX - size.width * dotFadeOffset / 100;
                let radius = dotSpacing * Math.max(Math.min(1 - fadeRelativeX / size.width, 1), 0);
                
                // draw dot
                ctx.beginPath();
                ctx.arc(staggerX, y, radius, 0, 2 * Math.PI);
                ctx.fill();
            }
        }
    }
}

registerPaint('polka-dot-fade', PolkaDotFadePainter);
