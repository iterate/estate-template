import { defineConfig } from "@iterate-com/sdk";

const config = defineConfig({
  contextRules: [
    {
      key: "sample",
      prompt: "In your first message, always mention pirates or some nautical thing.",
    },
  ],
});
export default config;
