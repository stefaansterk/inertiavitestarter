import { defineConfig } from "laravel-vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig().withLaragonCertificates().withPlugin(vue);
