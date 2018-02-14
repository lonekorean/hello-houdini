class PolkaDotsPainter {
    static get inputProperties() {
        return ['background-color', '--border-color', 'border-top-color', 'width', 'line-height', '--wut'];
    }
/*
    static get inputArguments() {
        return['<color>'];
    }
*/
    paint(ctx, size, props, args) {
        //console.log(args);
        let backgroundColor = props.get('background-color');
        let borderColor = props.get('--border-color');
        //console.log(backgroundColor.toString(), borderColor.toString());

        //let x = props.get('border-top-color')
        //console.dir(x);
        //console.log(x.toString());

        console.log(props.get('background-color').toString(), props.get('--wut').toString());

        ctx.fillStyle = borderColor;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineWidth = 60;
        ctx.lineTo(100, 100);
        ctx.stroke();


        let baseline = 10;
        let wiggle = 10;
        for (let x = 0; x <= size.width; x+= 25) {
            ctx.lineTo(x, baseline + wiggle);
            wiggle = -wiggle;
        }
        ctx.lineTo(0, baseline + Math.abs(wiggle));
        ctx.fill();
    }
}

registerPaint('polka-dots', PolkaDotsPainter);