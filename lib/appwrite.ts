import "server-only";

import { Client, Databases } from "node-appwrite";

function getRequiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export function getAppwriteDownloads() {
  const client = new Client()
    .setEndpoint(getRequiredEnv("APPWRITE_ENDPOINT"))
    .setProject(getRequiredEnv("APPWRITE_PROJECT_ID"))
    .setKey(getRequiredEnv("APPWRITE_API_KEY"));

  return {
    databases: new Databases(client),
    databaseId: getRequiredEnv("APPWRITE_DATABASE_ID"),
    collectionId: getRequiredEnv("APPWRITE_DOWNLOADS_COLLECTION_ID"),
  };
}
