class PolkaDotFadePainter {
    static get inputProperties() {
        return ['--dot-radius', '--dot-spacing', '--dot-scale'];
    }

    paint(ctx, size, props) {
        let dotRadius = props.get('--dot-radius').value;
        let dotSpacing = props.get('--dot-spacing').value;
        let dotScale = props.get('--dot-scale').value;

        ctx.fillStyle = '#999';


        let cornerDistance = this.distanceFromMidpoint(0, 0, size);

        let isStaggerRow = false;
        for (let y = 0; y < size.height; y += dotSpacing) {
            let staggerOffset = isStaggerRow ? dotSpacing : 0;
            for (let x = 0; x < size.width; x += dotSpacing * 2) {
                let newX = x + staggerOffset;
                let percentOut = this.distanceFromMidpoint(newX, y, size) / cornerDistance;
                let radius = Math.min(Math.max(dotRadius / percentOut * dotScale, dotRadius), dotSpacing);

                ctx.beginPath();
                ctx.arc(newX, y, radius, 0, 2 * Math.PI);
                ctx.fill();
            }
            isStaggerRow = !isStaggerRow;
        }
    }

    distanceFromMidpoint(x, y, size) {
        return Math.sqrt((x - size.width / 2) ** 2 + (y - size.height / 2) ** 2);
    }
}

registerPaint('polka-dot-fade', PolkaDotFadePainter);
