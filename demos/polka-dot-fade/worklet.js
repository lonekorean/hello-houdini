class PolkaDotFadePainter {
    static get inputProperties() {
        return ['--dot-spacing', '--dot-fade-offset'];
    }

    paint(ctx, size, props) {
        let dotSpacing = props.get('--dot-spacing').value;
        let dotFadeOffset = props.get('--dot-fade-offset').value;

        let startX = this.startOffset(size.width, dotSpacing);
        let stopX = size.width + dotSpacing;
        let startY = this.startOffset(size.height, dotSpacing);
        let stopY = size.height + dotSpacing;

        let isStaggerRow = false;
        for (let y = startY; y < stopY; y += dotSpacing) {
            for (let x = startX; x < stopX; x += dotSpacing * 2) {
                let staggerX = x + (isStaggerRow ? dotSpacing : 0);

                let sizingX = staggerX - size.width * dotFadeOffset / 100;
                let radius = dotSpacing * Math.max(Math.min(1 - sizingX / size.width, 1), 0);
                
                ctx.beginPath();
                ctx.arc(staggerX, y, radius, 0, 2 * Math.PI);
                ctx.fill();
            }
            isStaggerRow = !isStaggerRow;
        }
    }

    startOffset(length, dotSpacing) {
        let spaceBeforeCenterDot = length / 2;
        let dotsBeforeCenterDot = Math.ceil(spaceBeforeCenterDot / dotSpacing);
        let startOffset = spaceBeforeCenterDot - dotsBeforeCenterDot * dotSpacing;
        return startOffset;
    }
}

registerPaint('polka-dot-fade', PolkaDotFadePainter);
