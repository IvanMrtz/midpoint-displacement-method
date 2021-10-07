const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let t = 1;
const h = 0.5;

const initialLength = 100;
const base = 16;
const amplifyAmount = 50;

ctx.lineWidth = 0.9;
ctx.translate(100, 100);
line(initialLength, 0, 0);

function line(length, y, xStart, yStart = { value: 0, amplify: false }) {
  if (length === -initialLength / base || length === initialLength / base)
    return;

  const { value, amplify } = yStart;
  let newY = Math.random() - t;

  ctx.moveTo(xStart, amplify ? value * amplifyAmount : value);
  ctx.lineTo(length, y * amplifyAmount);
  ctx.stroke();

  t *= h;

  line(length / 2, newY, xStart, { value: y, amplify: false });
  line(length / 2, newY, length, { value: y, amplify: true });
}
