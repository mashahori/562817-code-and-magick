'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var GISTOGRAM_HEIGHT = 150;
var GISTOGRAM_WIDTH = 400;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var GAP_TITLE = 50;
var GAP_BAR = 50;
var FONT_GAP_TITLE = 16;
var FONT_GAP = 15;
var BAR_WIDTH = 40;
var barHeight = GISTOGRAM_HEIGHT - GAP * 2 - 2 * FONT_GAP;
var GISTOGRAM_X = CLOUD_X + GAP;
var GISTOGRAM_Y = CLOUD_Y + 3 * GAP + 2 * FONT_GAP_TITLE;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');
  ctx.fillStyle = '#000';

  ctx.font = '16px Tahoma';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP_TITLE, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP_TITLE, CLOUD_Y + GAP + FONT_GAP_TITLE);

  ctx.fillStyle = '#fff';
  ctx.fillRect(GISTOGRAM_X, GISTOGRAM_Y, GISTOGRAM_WIDTH, GISTOGRAM_HEIGHT);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var n = Math.floor(Math.random() * 100);
      ctx.fillStyle = 'hsl(240, ' + n + '%, 50%)';
    }
    ctx.fillRect(GISTOGRAM_X + GAP + (GAP_BAR + BAR_WIDTH) * i, GISTOGRAM_Y + GISTOGRAM_HEIGHT - GAP - FONT_GAP,
        BAR_WIDTH, -(barHeight * times[i]) / maxTime);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], GISTOGRAM_X + GAP + (GAP_BAR + BAR_WIDTH) * i,
        GISTOGRAM_Y + GISTOGRAM_HEIGHT - FONT_GAP);
    ctx.fillText(Math.round(times[i]), GISTOGRAM_X + GAP + (GAP_BAR + BAR_WIDTH) * i,
        GISTOGRAM_Y + GISTOGRAM_HEIGHT - 2 * GAP - 2 * FONT_GAP - (barHeight * times[i]) / maxTime);
  }
};
