import { expect, test } from "bun:test";

import { htmlStatement, statement } from "./statement";
import exp from "constants";
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
  expect(received).toEqual(expected);
});

test("Should constains BigGo h1 tag", () => {
  const expected = `<h1>Statement for BigCo</h1>\n`;
  const received = htmlStatement(invoices, plays);
  expect(received).toContain(expected);
});

test("Should constains 55 seats", () => {
  const expected = `<td>55</td>`;
  const received = htmlStatement(invoices, plays);
  expect(received).toContain(expected);
});