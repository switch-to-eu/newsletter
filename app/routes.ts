import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("newsletter/:id", "routes/newsletter.tsx"),
] satisfies RouteConfig;
