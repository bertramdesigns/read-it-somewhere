# Segment displays

Inspiration for segment displays and LCDs
- Posy (Michiel de Boer) YouTube channel - [Tech playlist](https://www.youtube.com/watch?v=1qIHCUWAgh4&list=PLRHvp3qQOkrKuW0IfeC-pJ2FNQc7cmbNi)
- Posy YouTube (start here) - [Segment Displays](https://www.youtube.com/watch?v=RTB5XhjbgZA)
- Posy website - [Segment fonts as SVG](https://www.michieldb.nl/other/segments/)
- Underware Type Foundry - [Unibody fonts](https://underware.nl/fonts_in_use/Unibody)
- Underware Type Foundry - [Kone Elevator type](https://www.underware.nl/custom_type/kone/)


### Notes on fluid crystal displays (LCDs) with segmented displays.
- Contrast ratios lower the more distant the temp from standard operating temp. For example, a TN display with transmissive polarizer at 22C is 135-150:1, but at 80C it is 8.9-12:1.
- At lower temperatures, the switching speed is slower.
- Plate size is 14"x 16" (setting max dimensions)
- Multiplexed means driving multiple segments with less pins, but temp range and contrast ratio are affected.
- Static drive means each segment has its own pin.
- TN (twisted nematic) displays actually are a Chiral + a Nematic liquid crystal mixed. TN twists 90 degrees, while STN (super twisted nematic) twists 180 - 270 degrees. 
- Transmittance percentage is how much light is blocked by the display. Illustratively, If the display has a transmissive polarizer and the background was white, if the T% is the grey scale applied to the background. In terms of light, this is the reduction of brightness as the light passes through the LCD. High transmittance = High brightness. [Detailed explanation](https://sot.com.sg/lcd-optical-characteristics/)
    - while this is the most important information to determine the amount of light that can be passed through the display, it is not often provided by manufacturers. The polarizers and light treating layers have the highest impact on this value.

### General resources

[LCD Journal](https://focuslcds.com/journals/) - Focus LCDs
A collection of articles on power consumption, thickness, and other cause/effect relationships in LCDs.

[LCD Design basics](https://www.pacificdisplay.com/design_lcd.htm) - Pacific Display Devices
A very in depth guide with resources about everything you need to know about designing an LCD.

[All around guide](https://circuitdigest.com/article/everything-you-need-to-know-to-design-and-build-your-own-custom-custom-lcd-displays) - Circuit Digest
Includes everything from comparison of technologies to cost and design considerations.

### Design Resources

[Minimum Spacing for a Segmented LCD Display](https://focuslcds.com/journals/minimum-spacing-for-a-segmented-lcd-display/?utm_source=chatgpt.com) - Focus LCDs
A visual layout guide of the minimum spacing required for a segmented LCD display.

- min distance between segments is .03mm, but .05mm is recommended
- min distance to edge of glass is 1.3mm, but 1.5mm - 2.0mm is recommended

### Costing & Pricing

Typically MoQ is 1000 units, but low-quantity is possible for testing purposes.
Tooling prices can be anywhere from $160 to $20000+ depending on the complexity of the design and supplier.

### Comparison Chart

Not included technologies are DSTN (Double Layer STN/FFSTN), CSTN (Color STN), and TFT (Thin Film Transistor) displays.

IN PROGRESS... (CHATGPT GENERATED WITH A LOT OF ISSUES)/
an X is placed next to any field not double checked

Note: Transmittance will never be that accurate as it is not often provided by manufacturers unless there is a specific display to be asked about. The values are rough estimates and depend on backlight wavelength, polarizer efficiency, and other factors.

| **Display Type** | **Estimated Unit Price (USD) for 10,000 Units** | **Estimated Tooling Cost (USD)** | **Contrast Ratio** | **T% (Transmittance Percentage)** | **Notes** |
|------------------|-----------------------------------------------|----------------------------------|--------------------|--------------------------|-----------|
| **TN (Twisted Nematic)** | X $0.50 – $3.00 | X $500 – $5,000 | ~150:1 to 1000:1 | ~40–60% | Lowest cost; limited viewing angles. |
| **HTN (High Twisted Nematic)** | X $0.75 – $5.00 | X $750 – $7,500 | ~1000:1 to 3000:1 | ~30-50% | Improved contrast and viewing angles over TN. Typically blue for negative displays. |
| **STN (Super Twisted Nematic)** | X $1.00 – $7.00 | X $800 – $10,000 | ~1000:1 to 5000:1 | ~15-30% | Better contrast; suitable for higher multiplexing. |
| **FSTN (Film Compensated STN)** | X $1.50 – $10.00 | X $1,500 – $15,000 | ~2000:1 to 6000:1 | ~20–35% | Enhanced contrast with film compensation. |
| **VA (Vertical Alignment)** | X $3.00 – $20.00+ | X $2,000 – $20,000+ | ~3000:1 to 10000+:1 | ~20–50% | Highest contrast; superior black levels. |



:::note

These are very rough estimates for the comparison of the technologies. Assuming transmissive polarizer with a size of roughly 3cm x 8cm. 

Temp: Standard temp range, multiplexed. 
- Static drive would -10 to +60°C for a TN display.
- Wider temp range options at increased prices are typically -20 to +70°C, -30 to +80

:::