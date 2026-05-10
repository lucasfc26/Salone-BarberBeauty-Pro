import { createStartHandler, defaultStreamHandler } from "@tanstack/react-start/server";
import { renderErrorPage } from "./lib/error-page";

const handler = createStartHandler(defaultStreamHandler);

export default {
  async fetch(request: Request) {
    try {
      return await handler(request);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
