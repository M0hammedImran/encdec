import { defineConfig } from "vite";

export default defineConfig({
	build: {
		lib: {
			entry: "./src/encdec.ts",
			name: "encdec",
			fileName: "encdec",
			formats: ["es", "umd", "cjs"],
		},
	},
});

