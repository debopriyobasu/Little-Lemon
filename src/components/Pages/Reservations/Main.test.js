import { updateTimes, initializeTimes } from "./Main";
import { fetchAPI } from "../../../utils/api";
jest.mock("../../../utils/api");

// test("initializeTimes returns the correct value", () => {
//   const mockTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
//   fetchAPI.mockReturnValue(mockTimes);

//   expect(initializeTimes()).toEqual(mockTimes);
// });

// test("updateTimes returns the correct value", () => {
//   const mockTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
//   fetchAPI.mockReturnValue(mockTimes);

//   const state = [];
//   const action = { type: "update", date: "2023-12-07" };

//   expect(updateTimes(state, action)).toEqual(mockTimes);
// });

test("initializeTimes returns the correct value", async () => {
  const mockTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
  fetchAPI.mockResolvedValue(mockTimes);

  const result = await initializeTimes();
  expect(result).toEqual(mockTimes);
});

test("updateTimes returns the correct value", async () => {
  const mockTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
  fetchAPI.mockResolvedValue(mockTimes);

  const state = [];
  const action = { type: "update", date: "2023-12-07" };

  const result = await updateTimes(state, action);
  expect(result).toEqual(mockTimes);
});
