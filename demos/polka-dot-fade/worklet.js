class PolkaDotFadePainter {
    static get inputProperties() {
        return ['--dot-radius', '--dot-spacing', '--dot-zoom-radius', '--dot-swipe-position'];
    }

    paint(ctx, size, props) {
        let dotRadius = props.get('--dot-radius').value;
        let dotSpacing = props.get('--dot-spacing').value;
        let dotZoomRadius = props.get('--dot-zoom-radius').value;
        let dotSwipePosition = props.get('--dot-swipe-position').value;

        ctx.fillStyle = '#999';

        let startX = this.startOffset(size.width, dotSpacing);
        let stopX = size.width + dotSpacing + dotRadius;
        let startY = this.startOffset(size.height, dotSpacing);
        let stopY = size.height + dotSpacing + dotRadius;

        let isStaggerRow = false;
        for (let y = startY; y < stopY; y += dotSpacing) {
            for (let x = startX; x < stopX; x += dotSpacing * 2) {
                let staggerX = x + (isStaggerRow ? dotSpacing : 0);

                let fadeDistance = 300;
                let swipeX = dotSwipePosition / 100 * size.width;
                let calcRadius;
                if (swipeX > staggerX + fadeDistance) {
                    // swipe is beyond this dot
                    calcRadius = dotZoomRadius;
                } else if (swipeX < staggerX - fadeDistance) {
                    // swipe is before dot
                    calcRadius = dotRadius
                } else {
                    // within fade range
                    let zoomRange = dotZoomRadius - dotRadius;
                    let per = (swipeX - staggerX) / (fadeDistance * 2);
                    let adjust = zoomRange * per;
                    calcRadius = dotZoomRadius + adjust;
                }

                ctx.beginPath();
                ctx.arc(staggerX, y, calcRadius, 0, 2 * Math.PI);
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
