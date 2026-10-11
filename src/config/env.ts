function requiredEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function portEnv(name: string, fallback: number): number {
  const value = process.env[name];

  if (value === undefined || value === "") {
    return fallback;
  }

  const port = Number(value);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    throw new Error(`Environment variable ${name} must be a valid port`);
  }

  return port;
}

export const env = {
  port: portEnv("PORT", 3000),
  database: {
    host: requiredEnv("DB_HOST"),
    port: portEnv("DB_PORT", 3306),
    user: requiredEnv("DB_USER"),
    password: process.env.DB_PASSWORD ?? "",
    name: requiredEnv("DB_NAME"),
  },
};
