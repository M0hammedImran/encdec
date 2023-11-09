import { expect, test } from "vitest";
import { decrypt, encrypt } from "./encdec.js";

test("should decrypt a string encrypted with the same key", () => {
	const key = "mysecretkeymysecretkey123456799999999999999999";
	const plaintext = "hello world";
	const encrypted = encrypt(plaintext, key);
	const decrypted = decrypt(encrypted, key);
	expect(decrypted).to.equal(plaintext);
});

test("should throw an error if the key is incorrect", () => {
	const key = "mysecretkeymysecretkey1234567890";
	const plaintext = "hello world";
	const encrypted = encrypt(plaintext, key);
	expect(() => decrypt(encrypted, "wrongkey")).to.throw();
});

test("should throw an error if the input is not in the correct format", () => {
	const key = "mysecretkeymysecretkey123456799999999999999999";
	expect(() => decrypt("invalidinput", key)).to.throw();
});

