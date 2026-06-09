"use client";

import { Agentation } from "agentation";

export function AgentationInit() {
  return (
    <Agentation
      webhookUrl="http://localhost:3000/api/webhooks/agentation?projectId=dc4e39b7-a199-4d1d-a1d1-5d428cbcdaec"
    />
  );
}
