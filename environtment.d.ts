declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URI: string;
      SECRET_KEY: string;
      SECRET_IV: string;
      ENCRYPTION_ALGORITHM:
        | "aes-128-ccm"
        | "aes-192-ccm"
        | "aes-256-ccm"
        | "aes-256-cbc"
        | "chacha20-poly1305";
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
      NEXTAUTH_SECRET: string;
      NEXTAUTH_URL: string;
      [key: string]: string | undefined;
    }
  }
}

export {};
