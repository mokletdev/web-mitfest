export const serviceAccountConfig = {
  type: "service_account",
  project_id: "mit-fest",
  private_key_id: "1fe040f88415eea8dd50a8869134bd77af2b0563",
  private_key: process.env.PRIVATE_KEY_SERVICE,
  client_email: "system@mit-fest.iam.gserviceaccount.com",
  client_id: "106213602081324630840",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/system%40mit-fest.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};
