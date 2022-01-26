import {
  showColors,
  getFormatChoice,
  getOrderChoice,
  getSyncChoice,
  sortColorNames,
} from "./misc";

async function main() {
  const colorNames: string[] = process.argv.slice(5);
  const formatChoice = getFormatChoice(process.argv[2]);
  const syncChoice = getSyncChoice(process.argv[3]);
  const orderChoice = getOrderChoice(process.argv[4]);
  const sortedColorNames = sortColorNames(colorNames, orderChoice);
  await showColors(sortedColorNames, syncChoice, formatChoice);
}

main();
