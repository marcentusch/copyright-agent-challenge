import { getColor } from "./apiMock/index";
import { FormatChoice, OrderChoice, SyncChoice } from "./enums";
/* NOTES
Would like to just do `await colorNames.map(async (name) => await getColor(name))` instead of the custom forEach,
but could not get it working.

Code for asyncForEach() is copied from this article https://codeburst.io/javascript-async-await-with-foreach-b6ba62bbf404
Actually never encountered this issue with combination of forEach + async/await, super interesting!
*/

export const showColors = async (
  colorNames: string[],
  syncChoice: SyncChoice,
  formatChoice: FormatChoice
): Promise<void> => {
  if (syncChoice === SyncChoice.sync) {
    await asyncForEach(colorNames, async (colorName) =>
      logFormattedColor(formatChoice, colorName)
    );
  } else {
    colorNames.forEach(async (colorName) =>
      logFormattedColor(formatChoice, colorName)
    );
  }
};

export const sortColorNames = (
  colorNames: string[],
  orderChoice: OrderChoice
): string[] => {
  switch (orderChoice) {
    case OrderChoice.alphabetical:
      return colorNames.sort();
    case OrderChoice.reverse:
      return colorNames.reverse();
    default:
      return colorNames;
  }
};

export const getFormatChoice = (choice: string): FormatChoice => {
  switch (choice) {
    case "rgb":
      return FormatChoice.rgb;
    default:
      return FormatChoice.hex;
  }
};

export const getSyncChoice = (choice: string): SyncChoice => {
  switch (choice) {
    case "sync":
      return SyncChoice.sync;
    default:
      return SyncChoice.async;
  }
};

export const getOrderChoice = (choice: string): OrderChoice => {
  switch (choice) {
    case "alphabetical":
      return OrderChoice.alphabetical;
    case "reverse":
      return OrderChoice.reverse;
    default:
      return OrderChoice.default;
  }
};

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

async function logFormattedColor(
  formatChoice: FormatChoice,
  colorName: string
) {
  if (formatChoice === FormatChoice.hex) {
    console.log(await (await getColor(colorName)).HEX);
  } else {
    console.log(await (await getColor(colorName)).RGB);
  }
}
