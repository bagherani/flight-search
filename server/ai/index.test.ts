import { expect, test } from "bun:test";
import { extractFlightQuery } from "./index";

test("chat gpt command test", async () => {
  const resp = await extractFlightQuery(
    "flight from Tehran to Paris for September 8th for 1 adult and one way"
  );
  console.log(resp);

  expect(1).toBe(1);
});
