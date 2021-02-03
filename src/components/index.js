//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px',
//      children: []
//}

function updateStructure(rec1,rec2){
	var top1 = rec1.top, top2 = rec2.top;
	var left1 = rec1.left, left2 = rec2.left;
	var width1 = rec1.width, width2 = rec2.width;
    var height1 = rec1.height, height2 = rec2.height;

        top1 = top1.slice(0,-1); top1 = top1.slice(0,-1);
        top1 = Number(top1);
        top2 = top2.slice(0,-1); top2 = top2.slice(0,-1);
        top2 = Number(top2);
        
        left1 = left1.slice(0,-1); left1 = left1.slice(0,-1);
        left1 = Number(left1);
        left2 = left2.slice(0,-1); left2 = left2.slice(0,-1);
        left2 = Number(left2);
        
        width1 = width1.slice(0,-1); width1 = width1.slice(0,-1);
        width1 = Number(width1);
        width2 = width2.slice(0,-1); width2 = width2.slice(0,-1);
        width2 = Number(width2);
        
        height1 = height1.slice(0,-1); height1 = height1.slice(0,-1);
        height1 = Number(height1);
        height2 = height2.slice(0,-1); height2 = height2.slice(0,-1);
        height2 = Number(height2);
        
        if(top1 > top2 && left1 > left2 && height2+top2 > height1+top1 && width2+left2 > width1+left1){
            return {
                top: rec2.top,
                left: rec2.left,
                width: rec2.width,
                height: rec2.height,
                    children: [{
                    top: `${top1-top2}px`,
                    left: `${left1-left2}px`,
                    width: `${width1-width2}px`,
                    height: `${height1-height2}px`,
                    children: []
                }]
            }
        }else if(top1 <= top2 && left1 <= left2 && (top2+height2) <= (top1+height1) && (left2 + width2) <= (left1 + width1)){
            return {
                top: rec1.top,
                left: rec1.left,
                width: rec1.width,
                height: rec1.height,
                    children: [{
                    top: `${top2-top1}px`,
                    left: `${left2-left1}px`,
                    width: `${width2-width1}px`,
                    height:`${height2-height1}px`,
                    children: []
                }]
            }
        }else {
            return {
                top: rec1.top,
                left: rec1.left,
                width: rec1.width,
                height: rec1.height,
                children: []
            }
        }
}

module.exports = updateStructure;
