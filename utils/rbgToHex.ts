export const rgbToHex = (r: number, g: number, b: number): string =>
  "#" +
  [r, g, b]
    .map((x) => {
      const hex = x.toString(16); // Convert each RGB value to hexadecimal
      return hex.length === 1 ? "0" + hex : hex; // Ensure 2-digit format for each component
    })
    .join("");
