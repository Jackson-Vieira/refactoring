import { expect, test } from "bun:test";

import statement from "./statement";
const plays =  await Bun.file("/home/jackson/dev/refactoring/plays.json").json();
const invoices = await Bun.file("/home/jackson/dev/refactoring/invoices.json").json()

test("Should return the BigGo Statement", () => {
  const expected = `Statement for BigCo
Hamlet: $650.00 (55 seats)
As You Like It: $580.00 (35 seats)
Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`;
  const received = statement(invoices, plays);
  console.log(received);
  expect(received).toEqual(expected);
});
