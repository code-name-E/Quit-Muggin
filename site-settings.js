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
  STRIPE_PUBLISHABLE_KEY: "pk_test_51UJNvy4bRx0PmTkPCbWACDfaMCTy8DjJP5yEvOV3ayj5XXp34ZHHvF2A7HVZIBWrg2QD5GnDOtDgGAM00JOVRLtz00z8Z0ombb",

  // Your Cloudflare Worker address. No trailing slash, nothing after .workers.dev
  WORKER_URL: "https://quit-muggin.eliannaf-ef.workers.dev",
};
