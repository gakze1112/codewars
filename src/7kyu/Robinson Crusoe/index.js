const Point = function(x,y){
    this.x = x;
    this.y = y;
}

Point.prototype.x = () => this.x;
Point.prototype.y = () => this.y;

function crusoe(n, d, ang, distmult, angmult) {
    let p = [new Point(0,0)],
        last = 0,
        x1 = 0,
        y1 = 0;

    for(let i = 0; i < n; i++){
        x1 = p[i].x + d * Math.cos(ang * Math.PI / 180);
        y1 = p[i].y + d * Math.sin(ang * Math.PI / 180);
        p.push(new Point(x1,y1));
        
        d *= distmult;
        ang *= angmult;
    }

    last = p.length - 1;
    
    return [p[last].x, p[last].y];
}

// 優化版本
function crusoe(n, d, ang, distmult, angmult) {
    let lastX = 0, lastY = 0,
        p = [
            [0,0]
        ];
    
    for(let i = 0; i < n; i++){
        lastX = p[i][0] + d * Math.cos(ang * Math.PI / 180);
        lastY = p[i][1] + d * Math.sin(ang * Math.PI / 180);

        p.push([lastX, lastY]);
        
        d *= distmult;
        ang *= angmult;
    }
    

    return [parseFloat(lastX.toPrecision(15)) , parseFloat(lastY.toPrecision(15))];
}
