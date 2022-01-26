import { OrderChoice } from "./enums";
import { sortColorNames } from "./misc";
// I usually use the Arrange, Act and Assert pattern for tests

// Jest is not actually working since Jest requires babel to run and I did not want to spend more time on this

test("sorts colors correctly", () => {
  // Arrange
  const colors = ["white", "black", "red"];

  // Act
  const sortedColors = sortColorNames(colors, OrderChoice.alphabetical);

  // Assert
  expect(sortedColors[0]).toBe(["black"]);
  expect(sortedColors[2]).toBe(["white"]);
});
