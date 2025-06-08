import {dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filname = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});
{/* Navigation Buttons */}
const eslintCongif = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;