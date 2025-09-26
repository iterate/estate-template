import { contextRulesFromFiles, defineConfig, matchers } from "@iterate-com/sdk";

const config = defineConfig({
  contextRules: [
    {
      key: "tutorial-rule-that-you-should-delete",
      prompt: "In your first message, always mention pirates or some nautical thing.",
    },
    // You can use "matchers" to conditionally apply rules
    // For example to only be active when certain MCP connections are present
    {
      key: "how-we-use-linear",
      prompt: "Tag any new issues with the label `iterate-tutorial`",
      match: matchers.hasMCPConnection("linear"),
    },

    // Or when a certain user is on a thread
    {
      key: "jonas-rules",
      prompt: "When Jonas is on a thread, remind him to lock in",
      match: matchers.hasParticipant("jonas"),
    },
    // This file is "just typescript", so you can do whatever you want
    // e.g. structure your rules in markdown, too, and use a helper to load them
    ...contextRulesFromFiles("rules/**/*.md"),
  ],
});
export default config;
