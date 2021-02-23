//rec = {
//	top: '25px',
//	left: '96px',
//	width: '64px',
//	height: '96px',
//      children: []
//}

function updateStructure(rec1, rec2) {
  //write your code
  if (contains(rec1, rec2)) {
    const relDimension = relativeDim(rec1, rec2);
    return { ...rec1, children: [relDimension] };
  } else if (contains(rec2, rec1)) {
    const relDimension = relativeDim(rec2, rec1);
    return { ...rec2, children: [relDimension] };
  } else {
    return { ...rec1 };
  }
}
function contains(recA, recB) {
  const rec1 = normalise(recA);
  const rec2 = normalise(recB);
  if (
    rec1.x1 <= rec2.x1 &&
    rec1.x2 <= rec2.x2 &&
    rec1.x3 >= rec2.x3 &&
    rec1.x4 >= rec2.x4
  )
    return true;
  return false;
}
function relativeDim(recA, recB) {
  const rec1 = normalise(recA);
  const rec2 = normalise(recB);
  const rec = {
    children: recB.children
  };

  if (recB.top) {
    rec.top = `${rec2.x1 - rec1.x1}px`;
  }
  if (recB.left) {
    rec.left = `${rec2.x2 - rec1.x2}px`;
  }
  if (recB.height) {
    rec.height = recB.height;
  }
  if (recB.width) {
    rec.width = recB.width;
  }
  if (recB.bottom) {
    rec.bottom = `${rec1.x3 - rec2.x3}px`;
  }
  if (recB.right) {
    rec.right = `${rec1.x4 - rec2.x4}px`;
  }
  return rec;
}
function normalise(rec) {
  return {
    x1: rec.top
      ? parseInt(rec.top)
      : -(parseInt(rec.height) + parseInt(rec.bottom)),
    x2: rec.left
      ? parseInt(rec.left)
      : -(parseInt(rec.width) + parseInt(rec.right)),
    x3: rec.bottom
      ? -parseInt(rec.bottom)
      : parseInt(rec.height) + parseInt(rec.top),
    x4: rec.right
      ? -parseInt(rec.right)
      : parseInt(rec.width) + parseInt(rec.left),
  };
}

module.exports = updateStructure;

