import { SSTConfig } from "sst";
import { Service } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "rag-pdf",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const service = new Service(stack, "service", {
        port: 3000,
        environment: {
          NEXT_PUBLIC_ELANOR_RAGBY_AWS_ACCESS_KEY_ID:
            process.env.NEXT_PUBLIC_ELANOR_RAGBY_AWS_ACCESS_KEY_ID!,
          NEXT_PUBLIC_ELANOR_RAGBY_AWS_SECRET_ACCESS_KEY:
            process.env.NEXT_PUBLIC_ELANOR_RAGBY_AWS_SECRET_ACCESS_KEY!,
        },
      });

      stack.addOutputs({
        ServiceUrl: service.url,
      });
    });
  },
} satisfies SSTConfig;
