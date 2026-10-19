# V2 integration

Replace your existing:
- index.html
- style.css
- script.js

with the versions in this package.

Then add these seven new files to assets/ (or change ASSET_PATHS in script.js
to match the filenames you actually used):

    STRAVA_TEMPLATE_AMOUNT.png
    BOTTLE_GLASS.png
    BOTTLE_LIQUID.png
    GUINNESS_GLASS.png
    GUINNESS_LIQUID.png
    SILVA_BUMPA_GLASS.png
    SILVA_BUMPA_LIQUID.png

Your existing files remain:

    STRAVA_TEMPLATE.png
    WINE_GLASS.png
    WINE_LIQUID.png
    PINT_GLASS.png
    PINT_LIQUID.png

## The main thing to edit

All per-type settings are at the top of script.js inside MODES.

For each type you can independently change:

    unitSize
    unitName
    defaultValue
    defaultTime

    valueSlider.normalMax
    valueSlider.bigMax
    timeSlider.normalMax
    timeSlider.bigMax

    graphicY
    graphicXOffset
    backYOffset
    liquidXOffset
    liquidBottomOffset
    spacing

Bottle is currently assumed to be 330 ml.
Guinness is currently assumed to be 568 ml.

Silva Bumpa is deliberately left generic:
- main label = Amount
- 1 complete graphic = 1.0 amount
- slider = 0.1 to 10 normally, 100 after More

Change unitSize / step / suffix / decimals if your intended "amount" unit is different.

## Testing

From this folder:

    python3 -m http.server 8000

Then open:

    http://localhost:8000

Tune the new graphic offsets directly in MODES and refresh the page.
