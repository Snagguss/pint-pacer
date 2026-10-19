// -----------------------------------------------------------------------------
// GLOBAL LAYOUT
// -----------------------------------------------------------------------------

const CONFIG = {
  FONT_SIZE: 140,
  Y_VOLUME: 188,   // 263 - 75
  Y_PACE: 490,     // 565 - 75
  Y_TIME: 798,     // 873 - 75
  Y_GRAPHIC: 1025, // 1025 - 75
  FONT_FAMILY: "Arial",
  FONT_WEIGHT: "700",
  DEFAULT_SPACING: 10,
  ROW_MARGIN_X: 40,
  MIN_GRAPHIC_SCALE: 0.50,
  ROW_GAP: 15,
  ROW_MARGIN_X: 40,
  HEADING_FONT_SIZE: 60,
  HEADING_OFFSET: 110
};

// -----------------------------------------------------------------------------
// MODE CONFIG
// -----------------------------------------------------------------------------
// Everything that differs between Pint / Wine / Bottle / Guinness / Silva Bumpa
// lives here. Tune these values rather than adding mode-specific rendering code.
//
// liquidBottomOffset is now a FULL-RESOLUTION value.
// Your old preview values were:
//   Pint: 14px at 40% -> 35 full-res
//   Wine: 68px at 40% -> 170 full-res
//
// New mode offsets below are starter values only. Adjust them while viewing the
// local site until each new graphic sits correctly.
//
// slider.normalMax = range shown normally
// slider.bigMax    = range after clicking More

const MODES = {
  beer: {
    displayName: "Pint",
    heading: "Volume",
    valueLabel: "Volume",
    valueSuffix: " ml",
    valueDecimals: 0,
    unitSize: 568,
    unitName: "pint",
    template: "template",
    back: "pintGlass",
    liquid: "pintLiquid",

    defaultTime: 300,
    valueSlider: { min: 0, normalMax: 3000, bigMax: 15000, increment: 3000, step: 1 },
    timeSlider:  { min: 0, normalMax: 1800, bigMax: 14400, increment: 1800, step: 1 },

    graphicY: 1025,
    graphicXOffset: 0,
    backYOffset: 0,
    liquidXOffset: 0,
    liquidBottomOffset: 35,
    spacing: 10
  },

  wine: {
    displayName: "Wine",
    heading: "Volume",
    valueLabel: "Volume",
    valueSuffix: " ml",
    valueDecimals: 0,
    unitSize: 175,
    unitName: "glass",
    template: "template",
    back: "wineGlass",
    liquid: "wineLiquid",

    defaultTime: 900,
    valueSlider: { min: 0, normalMax: 1500, bigMax: 8000, increment: 3000, step: 1 },
    timeSlider:  { min: 0, normalMax: 1800, bigMax: 14400, increment: 1800, step: 1 },

    graphicY: 1025,
    graphicXOffset: 0,
    backYOffset: 0,
    liquidXOffset: 0,
    liquidBottomOffset: 170,
    spacing: 10
  },

  bottle: {
    displayName: "Bottle",
    heading: "Volume",
    valueLabel: "Volume",
    valueSuffix: " ml",
    valueDecimals: 0,

    unitSize: 750,
    unitName: "bottle",

    template: "template",
    back: "bottleBack",
    liquid: "bottleLiquid",

    defaultTime: 600,
    valueSlider: { min: 0, normalMax: 2000, bigMax: 10000, increment: 3000, step: 1 },
    timeSlider:  { min: 0, normalMax: 1800, bigMax: 14400, increment: 1800, step: 1 },
    
    graphicY: 1025,
    graphicXOffset: 0,
    backYOffset: -5,
    liquidXOffset: 0,
    liquidBottomOffset: 12,
    spacing: 10
  },

  shot: {
    displayName: "Shot",
    heading: "Volume",
    valueLabel: "Volume",
    valueSuffix: " ml",
    valueDecimals: 0,

    unitSize: 750,
    unitName: "shot",

    template: "template",
    back: "shotBack",
    liquid: "shotLiquid",

    defaultTime: 600,
    valueSlider: { min: 0, normalMax: 2000, bigMax: 10000, increment: 3000, step: 1 },
    timeSlider:  { min: 0, normalMax: 1800, bigMax: 14400, increment: 1800, step: 1 },

    graphicY: 1025,
    graphicXOffset: 0,
    backYOffset: -5,
    liquidXOffset: 0,
    liquidBottomOffset: 80,
    spacing: 10
  },

  guinness: {
    displayName: "Guinness",
    heading: "Volume",
    valueLabel: "Volume",
    valueSuffix: " ml",
    valueDecimals: 0,
    unitSize: 568,
    unitName: "G",
    template: "template",
    back: "guinnessBack",
    liquid: "guinnessLiquid",

    defaultTime: 900,
    valueSlider: { min: 0, normalMax: 3000, bigMax: 15000, increment: 3000, step: 1 },
    timeSlider:  { min: 0, normalMax: 1800, bigMax: 14400, increment: 1800, step: 1 },

    graphicY: 1025,
    graphicXOffset: 0,
    backYOffset: 0,
    liquidXOffset: 0,
    liquidBottomOffset: 40,
    spacing: 10
  },

  silva: {
    displayName: "Silva Bumpa",
    heading: "Silva Bumpas",
    valueLabel: "Amount",
    valueSuffix: "",
    valueDecimals: 1,

    unitSize: 1,
    unitName: "Bumpa",

    template: "amountTemplate",
    back: "silvaBack",
    liquid: "silvaLiquid",

    defaultTime: 600,
    valueSlider: { min: 0, normalMax: 10, bigMax: 30, increment: 5, step: 0.05 },
    timeSlider:  { min: 0, normalMax: 1800, bigMax: 14400, increment: 1800, step: 1 },

    graphicY: 1015,
    graphicXOffset: 0,
    backYOffset: 0,
    liquidXOffset: 0,
    liquidBottomOffset: 0,
    spacing: 10,
    liquidOnTop: true
  },

  girl: {
    displayName: "Girl",
    heading: "Girls Spoken To",
    valueLabel: "Amount",
    valueSuffix: "",
    valueDecimals: 1,

    unitSize: 1,
    unitName: "Girl",

    template: "amountTemplate",
    back: "girlBack",
    liquid: "girlLiquid",

    defaultTime: 600,
    valueSlider: { min: 0, normalMax: 10, bigMax: 30, increment: 5, step: 0.05 },
    timeSlider:  { min: 0, normalMax: 1800, bigMax: 14400, increment: 1800, step: 1 },

    graphicY: 1015,
    graphicXOffset: 0,
    backYOffset: 0,
    liquidXOffset: 0,
    liquidBottomOffset: 0,
    spacing: 10,
    liquidOnTop: true
  },
  boy: {
    displayName: "Boys",
    heading: "Boys Spoken To",
    valueLabel: "Amount",
    valueSuffix: "",
    valueDecimals: 1,

    unitSize: 1,
    unitName: "Boy",

    template: "amountTemplate",
    back: "boyBack",
    liquid: "boyLiquid",

    defaultTime: 600,
    valueSlider: { min: 0, normalMax: 10, bigMax: 30, increment: 5, step: 0.05 },
    timeSlider:  { min: 0, normalMax: 1800, bigMax: 14400, increment: 1800, step: 1 },

    graphicY: 1015,
    graphicXOffset: 0,
    backYOffset: 0,
    liquidXOffset: 0,
    liquidBottomOffset: 0,
    spacing: 10,
    liquidOnTop: true
  }
};

// -----------------------------------------------------------------------------
// ASSETS
// -----------------------------------------------------------------------------
// Rename these paths if your new files have different names.

const ASSET_PATHS = {
  template: "assets/TEMPLATE_S.png",
  amountTemplate: "assets/TEMPLATE_S.png",

  wineGlass: "assets/WINE_GLASS.png",
  wineLiquid: "assets/WINE_LIQUID.png",

  pintGlass: "assets/PINT_GLASS.png",
  pintLiquid: "assets/PINT_LIQUID.png",

  bottleBack: "assets/BOTTLE_GLASS.png",
  bottleLiquid: "assets/BOTTLE_LIQUID.png",

  shotBack: "assets/SHOT_GLASS.png",
  shotLiquid: "assets/SHOT_LIQUID.png",

  guinnessBack: "assets/GUINNESS_GLASS.png",
  guinnessLiquid: "assets/GUINNESS_LIQUID.png",

  silvaBack: "assets/BUMPA_BACK.png",
  silvaLiquid: "assets/BUMPA_TOP.png",

  girlBack: "assets/GIRL_BACK.png",
  girlLiquid: "assets/GIRL_TOP.png",

  boyBack: "assets/BOY_BACK.png",
  boyLiquid: "assets/BOY_TOP.png"
};

// -----------------------------------------------------------------------------
// DOM
// -----------------------------------------------------------------------------

const canvas = document.getElementById("preview");
const ctx = canvas.getContext("2d");

const volumeSlider = document.getElementById("volume");
const timeSlider = document.getElementById("time");
const volumeValue = document.getElementById("volumeValue");
const timeValue = document.getElementById("timeValue");
const valueLabel = document.getElementById("valueLabel");

const lessVolumeButton = document.getElementById("lessVolume");
const moreVolumeButton = document.getElementById("moreVolume");

const lessTimeButton = document.getElementById("lessTime");
const moreTimeButton = document.getElementById("moreTime");

const downloadButton = document.getElementById("downloadButton");
const status = document.getElementById("status");

downloadButton.disabled = true;

let assets = null;
let previousMode = null;

// Remember each mode's current values while switching between modes.
const modeState = {};

// -----------------------------------------------------------------------------
// ASSET LOADING
// -----------------------------------------------------------------------------

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Could not load ${src}`));
    img.src = src;
  });
}

async function loadAssets() {
  const entries = await Promise.all(
    Object.entries(ASSET_PATHS).map(async ([key, src]) => [key, await loadImage(src)])
  );

  assets = Object.fromEntries(entries);

  const template = assets[MODES[getMode()].template];
  canvas.width = template.naturalWidth;
  canvas.height = template.naturalHeight;

  downloadButton.disabled = false;
  status.textContent = "";

  applyMode(getMode(), true);
  render();
  requestAnimationFrame(() => {
  resetMobilePreviewMetrics();
});
}

// -----------------------------------------------------------------------------
// MODE + SLIDER MANAGEMENT
// -----------------------------------------------------------------------------

const modeSelect = document.getElementById("modeSelect");

function getMode() {
  return modeSelect.value;
}

function getModeConfig() {
  return MODES[getMode()];
}

function saveCurrentModeState() {
  if (!previousMode) return;

  modeState[previousMode] = {
    value: Number(volumeSlider.value),
    time: Number(timeSlider.value)
  };
}

function drawCenteredHeading(text, y) {
  ctx.font = `400 ${CONFIG.HEADING_FONT_SIZE}px Arial`;
  ctx.fillStyle = "white";
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  ctx.lineJoin = "round";
  ctx.textBaseline = "top";

  const width = ctx.measureText(text).width;
  const x = (canvas.width - width) / 2;

  ctx.strokeText(text, x, y);
  ctx.fillText(text, x, y);
}

function setSliderRange(slider, settings, expanded = false) {
  slider.min = settings.min;
  slider.max = expanded ? settings.bigMax : settings.normalMax;
  slider.step = settings.step;
}

function resetMoreButton(button) {
  button.disabled = false;
  button.textContent = "+";
}

function applyMode(mode, firstLoad = false) {
  if (!firstLoad) saveCurrentModeState();

  const cfg = MODES[mode];
  const saved = modeState[mode];

  setSliderRange(volumeSlider, cfg.valueSlider);
  setSliderRange(timeSlider, cfg.timeSlider);

  resetMoreButton(moreVolumeButton);
  resetMoreButton(moreTimeButton);

  const desiredValue = saved?.value ?? cfg.unitSize;
  const desiredTime = saved?.time ?? cfg.defaultTime;

  volumeSlider.value = Math.min(desiredValue, cfg.valueSlider.normalMax);
  timeSlider.value = Math.min(desiredTime, cfg.timeSlider.normalMax);

  valueLabel.textContent = cfg.valueLabel;
  previousMode = mode;

  updateValueStepButtons();
  updateTimeStepButtons();

  render();
}

function expandSlider(slider, settings, button) {
  const currentMax = Number(slider.max);

  const newMax = Math.min(
    currentMax + settings.increment,
    settings.bigMax
  );

  slider.max = newMax;

  if (newMax >= settings.bigMax) {
    button.disabled = true;
  }

  render();
}

function stepValueWhole(direction) {
  const cfg = getModeConfig();
  const settings = cfg.valueSlider;

  const current = Number(volumeSlider.value);
  const unit = cfg.unitSize;

  const currentUnits = current / unit;
  const epsilon = 1e-9;

  let targetUnits;

  if (direction > 0) {
    targetUnits =
      Math.abs(currentUnits - Math.round(currentUnits)) < epsilon
        ? Math.round(currentUnits) + 1
        : Math.ceil(currentUnits);
  } else {
    targetUnits =
      Math.abs(currentUnits - Math.round(currentUnits)) < epsilon
        ? Math.round(currentUnits) - 1
        : Math.floor(currentUnits);
  }

  targetUnits = Math.max(0, targetUnits);

  let targetValue = targetUnits * unit;

  // -----------------------------------------
  // + MAY NEED TO EXPAND THE SLIDER RANGE
  // -----------------------------------------

  if (direction > 0 && targetValue > Number(volumeSlider.max)) {
    let newMax = Number(volumeSlider.max);

    while (
      newMax < targetValue &&
      newMax < settings.bigMax
    ) {
      newMax = Math.min(
        newMax + settings.increment,
        settings.bigMax
      );
    }

    volumeSlider.max = newMax;
  }

  // Don't let + go beyond the configured absolute max.
  if (targetValue > settings.bigMax) {
    targetValue = Number(volumeSlider.value);
  }

  volumeSlider.value = Math.max(
    Number(volumeSlider.min),
    targetValue
  );

  updateValueStepButtons();
  render();
}

function stepTimeWhole(direction) {
  const cfg = getModeConfig();
  const settings = cfg.timeSlider;

  const current = Number(timeSlider.value);

  // Time slider is stored in seconds.
  const unit = 60;

  const currentUnits = current / unit;
  const epsilon = 1e-9;

  let targetUnits;

  if (direction > 0) {
    // 0:30 -> 1:00
    // 1:00 -> 2:00
    // 1:25 -> 2:00
    targetUnits =
      Math.abs(currentUnits - Math.round(currentUnits)) < epsilon
        ? Math.round(currentUnits) + 1
        : Math.ceil(currentUnits);
  } else {
    // 1:25 -> 1:00
    // 1:00 -> 0:00
    targetUnits =
      Math.abs(currentUnits - Math.round(currentUnits)) < epsilon
        ? Math.round(currentUnits) - 1
        : Math.floor(currentUnits);
  }

  targetUnits = Math.max(0, targetUnits);

  let targetValue = targetUnits * unit;

  // Expand slider if necessary.
  if (direction > 0 && targetValue > Number(timeSlider.max)) {
    let newMax = Number(timeSlider.max);

    while (
      newMax < targetValue &&
      newMax < settings.bigMax
    ) {
      newMax = Math.min(
        newMax + settings.increment,
        settings.bigMax
      );
    }

    timeSlider.max = newMax;
  }

  // Don't exceed absolute configured maximum.
  if (targetValue > settings.bigMax) {
    targetValue = Number(timeSlider.value);
  }

  timeSlider.value = Math.max(
    Number(timeSlider.min),
    targetValue
  );

  updateTimeStepButtons();
  render();
}

function updateValueStepButtons() {
  const cfg = getModeConfig();

  const current = Number(volumeSlider.value);
  const unit = cfg.unitSize;

  // Previous whole value exists unless we're already at zero.
  lessVolumeButton.disabled = current <= 0;

  // Largest complete unit allowed by bigMax.
  const maxWholeValue =
    Math.floor(cfg.valueSlider.bigMax / unit) * unit;

  moreVolumeButton.disabled =
    current >= maxWholeValue;
}

function updateTimeStepButtons() {
  const cfg = getModeConfig();

  const current = Number(timeSlider.value);

  lessTimeButton.disabled = current <= 0;

  const maxWholeValue =
    Math.floor(cfg.timeSlider.bigMax / 60) * 60;

  moreTimeButton.disabled =
    current >= maxWholeValue;
}

// -----------------------------------------------------------------------------
// FORMAT HELPERS
// -----------------------------------------------------------------------------

function formatElapsed(totalSeconds) {
  const total = Math.max(0, Math.floor(Number(totalSeconds)));
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;
  return `${minutes}m ${String(seconds).padStart(2, "0")}s`;
}

function formatValue(value, cfg) {
  const n = Number(value);
  const decimals = cfg.valueDecimals ?? 0;
  return `${n.toFixed(decimals)}${cfg.valueSuffix}`;
}

function formatPace(value, elapsedSeconds, unitSize, unitName) {
  const units = value / unitSize;
  if (units <= 0) return `0:00 /${unitName}`;

  const secondsPerUnit = elapsedSeconds / units;
  const total = Math.max(0, Math.floor(secondsPerUnit));
  const minutes = Math.floor(total / 60);
  const seconds = total % 60;

  return `${minutes}:${String(seconds).padStart(2, "0")} /${unitName}`;
}

function drawCenteredText(text, y) {
  ctx.font = `${CONFIG.FONT_WEIGHT} ${CONFIG.FONT_SIZE}px ${CONFIG.FONT_FAMILY}`;
  ctx.fillStyle = "rgba(255,255,255,1)";
  ctx.textBaseline = "top";

  const width = ctx.measureText(text).width;
  const x = (canvas.width - width) / 2;

  ctx.fillText(text, x, y - 10);
}

// -----------------------------------------------------------------------------
// GRAPHICS
// -----------------------------------------------------------------------------
function renderGraphicRow(value, cfg, back, liquid) {
  const units = value / cfg.unitSize;
  const count = Math.max(1, Math.ceil(units));

  const full = Math.floor(units);
  const partial = units - full;

  const baseBW = back.naturalWidth;
  const baseBH = back.naturalHeight;
  const baseLW = liquid.naturalWidth;
  const baseLH = liquid.naturalHeight;

  const baseSpacing = cfg.spacing ?? CONFIG.DEFAULT_SPACING;
  const availableWidth = canvas.width - CONFIG.ROW_MARGIN_X * 2;
  const minScale = CONFIG.MIN_GRAPHIC_SCALE;

  // ---------------------------------------------------------
  // DECIDE WHETHER WE NEED 1 OR 2 ROWS
  // ---------------------------------------------------------

  const singleRowWidth =
    count * baseBW +
    (count - 1) * baseSpacing;

  const singleRowScale =
    Math.min(1, availableWidth / singleRowWidth);

  let rowCounts;
  let rowScale;

  if (singleRowScale >= minScale) {

    // One row still fits without dropping below minimum size.
    rowCounts = [count];
    rowScale = singleRowScale;

  } else {

    // Once we move to two rows, KEEP them at minimum scale.
    rowCounts = [
      Math.ceil(count / 2),
      Math.floor(count / 2)
    ];

    rowScale = minScale;
  }

  const bw = baseBW * rowScale;
  const bh = baseBH * rowScale;
  const lw = baseLW * rowScale;
  const lh = baseLH * rowScale;

  const spacing = baseSpacing * rowScale;
  const normalStep = bw + spacing;

  const baseY =
    (cfg.graphicY ?? CONFIG.Y_GRAPHIC) +
    (cfg.backYOffset ?? 0);

  const rowGap =
    (cfg.rowGap ?? CONFIG.ROW_GAP) * rowScale;

  const liquidOnTop = cfg.liquidOnTop ?? false;

  // ---------------------------------------------------------
  // DRAW
  // ---------------------------------------------------------

  let globalIndex = 0;

  rowCounts.forEach((rowCount, rowIndex) => {
    if (rowCount <= 0) return;

    // -------------------------------------------------------
    // HORIZONTAL SPACING
    // -------------------------------------------------------

    const normalRowWidth =
      rowCount * bw +
      (rowCount - 1) * spacing;

    let step;

    if (normalRowWidth <= availableWidth || rowCount === 1) {
      step = normalStep;
    } else {
      /*
       * Two rows are already at minimum scale.
       *
       * Instead of shrinking more, reduce the distance between
       * each graphic. Once step < bw they begin overlapping.
       */
      step =
        (availableWidth - bw) /
        Math.max(1, rowCount - 1);
    }

    const actualRowWidth =
      bw +
      (rowCount - 1) * step;

    const startX =
      (canvas.width - actualRowWidth) / 2 +
      (cfg.graphicXOffset ?? 0);

    // -------------------------------------------------------
    // VERTICAL POSITION
    //
    // Bottom row stays at the original Y position.
    // Additional row is placed above it.
    // -------------------------------------------------------

    const rowsBelow = rowCounts.length - 1 - rowIndex;

    const rowY =
      baseY +
      rowsBelow * (bh + rowGap);

    // -------------------------------------------------------
    // DRAW EACH GRAPHIC
    // -------------------------------------------------------

    for (let i = 0; i < rowCount; i++) {
      let fill = 0;

      if (globalIndex < full) {
        fill = 1;
      } else if (globalIndex === full) {
        fill = partial;
      }

      globalIndex++;

      fill = Math.max(0, Math.min(1, fill));

      const x = startX + i * step;

      // Crop the TOP of the liquid sprite.
      const sourceVisibleHeight =
        Math.max(1, Math.round(baseLH * fill));

      const sourceCropY =
        baseLH - sourceVisibleHeight;

      const visibleHeight =
        lh * fill;

      const xLiquid =
        x +
        (bw - lw) / 2 +
        (cfg.liquidXOffset ?? 0) * rowScale;

      const yLiquid =
        rowY +
        bh -
        visibleHeight -
        (cfg.liquidBottomOffset ?? 0) * rowScale;

      // -----------------------------------------------
      // LIQUID DRAW FUNCTION
      // -----------------------------------------------

      const drawLiquid = () => {
        ctx.save();

        ctx.beginPath();
        ctx.rect(x, rowY, bw, bh);
        ctx.clip();

        ctx.drawImage(
          liquid,

          // source
          0,
          sourceCropY,
          baseLW,
          sourceVisibleHeight,

          // destination
          xLiquid,
          yLiquid,
          lw,
          visibleHeight
        );

        ctx.restore();
      };

      // -----------------------------------------------
      // DRAW ORDER
      // -----------------------------------------------

      if (liquidOnTop) {
        // Always draw empty glass/background
        ctx.drawImage(back, x, rowY, bw, bh);

        // Only add liquid if there is some
        if (fill > 0) {drawLiquid();}

      } else {
        // Only add liquid if there is some
        if (fill > 0) {drawLiquid();}

        // Always draw glass/background
        ctx.drawImage(back, x, rowY, bw, bh);
      }
    }
  });
}

// -----------------------------------------------------------------------------
// MAIN RENDER
// -----------------------------------------------------------------------------

function render() {
  if (!assets) return;

  const cfg = getModeConfig();
  const value = Number(volumeSlider.value);
  const elapsed = Number(timeSlider.value);

  const template = assets[cfg.template];
  const back = assets[cfg.back];
  const liquid = assets[cfg.liquid];

  // Allows the amount template to have a different resolution if necessary.
  if (canvas.width !== template.naturalWidth || canvas.height !== template.naturalHeight) {
    canvas.width = template.naturalWidth;
    canvas.height = template.naturalHeight;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(template, 0, 0);

  const valueText = formatValue(value, cfg);
  const timeText = formatElapsed(elapsed);
  const paceText = formatPace(value, elapsed, cfg.unitSize, cfg.unitName);

  drawCenteredHeading(cfg.heading,CONFIG.Y_VOLUME - CONFIG.HEADING_OFFSET);
  drawCenteredHeading("Pace",CONFIG.Y_PACE - CONFIG.HEADING_OFFSET);
  drawCenteredHeading("Time",CONFIG.Y_TIME - CONFIG.HEADING_OFFSET);

  drawCenteredText(valueText, CONFIG.Y_VOLUME);
  drawCenteredText(paceText, CONFIG.Y_PACE);
  drawCenteredText(timeText, CONFIG.Y_TIME);

  renderGraphicRow(value, cfg, back, liquid);

  volumeValue.textContent = valueText;
  timeValue.textContent = timeText;
}

// -----------------------------------------------------------------------------
// DOWNLOAD
// -----------------------------------------------------------------------------

function downloadPng() {
  if (!assets) return;

  render();

  const cfg = getModeConfig();
  const value = Number(volumeSlider.value);
  const mode = getMode();
  const safeValue = String(value).replace(".", "-");
  const filename = `strava_parody_${mode}_${safeValue}.png`;

  canvas.toBlob((blob) => {
    if (!blob) {
      status.textContent = "Could not create PNG.";
      status.classList.add("error");
      return;
    }

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = filename;
    document.body.appendChild(link);

    window.umami?.track("png-download", {
      type: cfg.displayName
    });

    link.click();
    link.remove();

    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }, "image/png");
}

// -----------------------------------------------------------------------------
// EVENTS
// -----------------------------------------------------------------------------

volumeSlider.addEventListener("input", () => {updateValueStepButtons();render();});
timeSlider.addEventListener("input", () => {updateTimeStepButtons();render();});
modeSelect.addEventListener("change", () => {applyMode(modeSelect.value);});

lessVolumeButton.addEventListener("click", () => {stepValueWhole(-1);});
moreVolumeButton.addEventListener("click", () => {stepValueWhole(1);});

lessTimeButton.addEventListener("click", () => {stepTimeWhole(-1);});
moreTimeButton.addEventListener("click", () => {stepTimeWhole(1);});

downloadButton.addEventListener("click", downloadPng);

// -----------------------------------------------------------------------------
// START
// -----------------------------------------------------------------------------

loadAssets().catch((error) => {
  console.error(error);
  status.textContent =
    "Asset loading failed. Check the filenames in ASSET_PATHS and your assets folder.";
  status.classList.add("error");
});

let mobilePreviewStart = null;
let mobileFullPreviewHeight = null;
let mobilePreviewFrameHeight = null;
let mobilePreviewPadding = 0;
let mobileScrollRAF = null;

function updateMobilePreviewSize() {
  if (mobileScrollRAF !== null) return;

  mobileScrollRAF = requestAnimationFrame(() => {
    mobileScrollRAF = null;

    const root = document.documentElement;
    const header = document.querySelector(".mobile-header");
    const previewPanel = document.querySelector(".preview-panel");
    const previewFrame = document.querySelector(".preview-frame");

    if (window.innerWidth > 780 || !assets || !header || !previewPanel || !previewFrame) return;

    const shrinkDistance = 150;
    const minScale = 0.65;

    // MEASURE STARTING POSITION ONCE
    if (mobilePreviewStart === null) {
      previewFrame.style.transform = "scale(1)";
      previewPanel.style.height = "auto";

      const panelStyle = getComputedStyle(previewPanel);
      const headerHeight = header.offsetHeight;

      mobilePreviewStart = previewPanel.offsetTop - headerHeight;
      mobileFullPreviewHeight = previewPanel.offsetHeight;
      mobilePreviewFrameHeight = previewFrame.offsetHeight;
      mobilePreviewPadding = parseFloat(panelStyle.paddingTop) + parseFloat(panelStyle.paddingBottom);

      root.style.setProperty("--mobile-header-height", `${headerHeight}px`);
    }

    // HOW FAR INTO COLLAPSE ARE WE?
    const collapseScroll = Math.max(0, window.scrollY - mobilePreviewStart);
    const consumedScroll = Math.min(collapseScroll, shrinkDistance);
    const progress = consumedScroll / shrinkDistance;

    // SHRINK PREVIEW
    const scale = 1 - (1 - minScale) * progress;
    previewFrame.style.transform = `scale(${scale})`;

    // SHRINK THE SPACE THE PREVIEW OCCUPIES TOO
    const currentPreviewHeight = mobilePreviewPadding + mobilePreviewFrameHeight * scale;
    previewPanel.style.height = `${currentPreviewHeight}px`;

    root.style.setProperty("--mobile-preview-height", `${currentPreviewHeight}px`);

    // KEEP CONTROLS FOLLOWING PREVIEW
    const heightReduction = Math.max(0, mobileFullPreviewHeight - currentPreviewHeight);
    const controlsDelay = Math.max(0, consumedScroll - heightReduction);

    root.style.setProperty("--mobile-controls-delay", `${controlsDelay}px`);
  });
}

function resetMobilePreviewMetrics() {
  const root = document.documentElement;
  const previewPanel = document.querySelector(".preview-panel");
  const previewFrame = document.querySelector(".preview-frame");

  mobilePreviewStart = null;
  mobileFullPreviewHeight = null;
  mobilePreviewFrameHeight = null;
  mobilePreviewPadding = 0;

  previewFrame?.style.removeProperty("transform");
  previewPanel?.style.removeProperty("height");
  root.style.removeProperty("--mobile-controls-delay");

  updateMobilePreviewSize();
}

window.addEventListener("scroll", updateMobilePreviewSize, { passive: true });
window.addEventListener("resize", resetMobilePreviewMetrics);

function resetMobilePreviewMetrics() {
  mobilePreviewStart = null;
  mobileFullPreviewHeight = null;

  updateMobilePreviewSize();
}

window.addEventListener("scroll",updateMobilePreviewSize,{ passive: true });
window.addEventListener("resize",resetMobilePreviewMetrics);

  // MEASURE ACTUAL NEW HEIGHT
  const currentPreviewHeight =
    previewPanel.getBoundingClientRect().height;

  const heightReduction = Math.max( 0, mobileFullPreviewHeight - currentPreviewHeight);
  const controlsDelay = Math.max(0,consumedScroll -heightReduction);

  root.style.setProperty( "--mobile-controls-delay", `${controlsDelay}px`);

function resetMobilePreviewMetrics() {
  mobileFullPreviewHeight = null;
  updateMobilePreviewSize();
}

window.addEventListener(
  "scroll",
  updateMobilePreviewSize,
  { passive: true }
);

window.addEventListener(
  "resize",
  resetMobilePreviewMetrics
);

window.addEventListener("scroll", updateMobilePreviewSize, {
  passive: true
});

window.addEventListener("resize", updateMobilePreviewSize);
