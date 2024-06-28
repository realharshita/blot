const width = 200; 
const height = 200; 

setDocDimensions(width, height);

const hPolylines = [
  [[0, 0], [0, 100]],
  [[0, 50], [50, 50]],
  [[50, 0], [50, 100]]
];

const aPolylines = [
  [[0, 100], [25, 0]],
  [[25, 0], [50, 100]],
  [[12.5, 50], [37.5, 50]]
];

const rPolylines = [
  [[0, 0], [0, 100]],
  [[0, 50], [50, 50]],
  [[50, 50], [50, 75]],
  [[50, 75], [25, 100]]
];

const sPolylines = [
  [[0, 75], [50, 75]],
  [[0, 25], [50, 25]],
  [[0, 75], [0, 50]],
  [[50, 50], [50, 25]],
  [[50, 50], [0, 25]]
];

const tPolylines = [
  [[0, 100], [50, 100]],
  [[25, 100], [25, 0]]
];

const iPolylines = [
  [[25, 100], [25, 0]]
];
bt.translate(hPolylines, [0, 0]);
bt.translate(aPolylines, [60, 0]);
bt.translate(rPolylines, [120, 0]);
bt.translate(sPolylines, [180, 0]);
bt.translate(tPolylines, [240, 0]);
bt.translate(iPolylines, [280, 0]);


const harshitaPolylines = [
  ...hPolylines,
  ...aPolylines,
  ...rPolylines,
  ...sPolylines,
  ...tPolylines,
  ...iPolylines
];

drawLines(harshitaPolylines);
