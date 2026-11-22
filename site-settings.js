// ============================================================================
// QUIT MUGGIN' - your private-ish settings (keep this file next to index.html)
// Fill these in ONCE. When you get a new index.html from me, you never have to
// retype them, because they live here instead of inside index.html.
//
// Only put the PUBLISHABLE key here (starts with pk_test_ or pk_live_).
// NEVER put a secret key (sk_...) or the whsec_ webhook secret in this file.
// ============================================================================
window.QM_SETTINGS = {
  // Stripe publishable key (Stripe -> Developers -> API keys). Safe to be public.
  STRIPE_PUBLISHABLE_KEY: "pk_live_51UJNuk6Fj8Emzg6I9ybBbxiR1Dpfh7JiNG5Qq2xVYztjtY8lUGuPdJzLXf3i0vSP3FogzoaNVffb4b3NTRBSx1DV0058Iak0bK",

  // Your Cloudflare Worker address. No trailing slash, nothing after .workers.dev
  WORKER_URL: "https://quit-muggin.eliannaf-ef.workers.dev",
};
