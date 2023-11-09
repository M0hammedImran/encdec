import { randomBytes, createCipheriv, createDecipheriv } from "crypto";

const algorithm = "aes-256-cbc";
/**
 * Encrypts the given text using the provided key.
 *
 * Uses AES-256-CBC encryption.
 * @param {string} text - The text to encrypt.
 * @param {string} key - The encryption key. Key must be 32 characters long.
 * @returns {string} The encrypted text in the format of "iv:encrypted".
 */
function encrypt(text: string, key: string): string {
	const _key = key.slice(0, 32).padEnd(32, "0");
	const iv = randomBytes(16);
	const cipher = createCipheriv(algorithm, Buffer.from(_key), iv);
	let encrypted = cipher.update(text);
	encrypted = Buffer.concat([encrypted, cipher.final()]);
	return `${iv.toString("hex")}:${encrypted.toString("hex")}`;
}

/**
 * Decrypts the given text using the provided key.
 *
 *
 * Uses AES-256-CBC encryption.
 * @param {string} text - The text to be decrypted in the format of "iv:encrypted".
 * @param {string} key - The key to use for decryption.
 * @returns {string} The decrypted text.
 */
function decrypt(text: string, key: string): string {
	const _key = key.slice(0, 32).padEnd(32, "0");
	const [ivHex, encryptedHex] = text.split(":");
	const iv = Buffer.from(ivHex, "hex");
	const encrypted = Buffer.from(encryptedHex, "hex");
	const decipher = createDecipheriv(algorithm, Buffer.from(_key), iv);
	const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
	return decrypted.toString();
}

export { encrypt, decrypt };

