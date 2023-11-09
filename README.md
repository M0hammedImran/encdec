# ENCDEC (Encryption and Decryption)

## Installation

```bash
npm install @moonstack/encdec
```

## Usage

```ts
import * as encdec from "@moonstack/encdec";

const key = "mysecretkeymysecretkey1234567890";
const plaintext = "hello world";
const encrypted = encdec.encrypt(plaintext, key);

const decrypted = encdec.decrypt(encrypted, key);
console.log(decrypted);
```

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](./LICENSE) file for details

