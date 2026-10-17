declare namespace Cloudflare {
  interface Env {
    DB?: D1Database;
    SMSRU_API_ID?: string;
    SMSRU_SENDER?: string;
    OTP_HMAC_SECRET?: string;
    TURNSTILE_SECRET_KEY?: string;
    TURNSTILE_SITE_KEY?: string;
    BUCKET?: R2Bucket;
  }
}
