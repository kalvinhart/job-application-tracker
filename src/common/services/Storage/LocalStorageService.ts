import { StorageService } from "./StorageService";

export class LocalStorageService extends StorageService {
  setItem(key: string, value: unknown): void {
    if (typeof value === "string") {
      localStorage.setItem(key, value);
      return;
    }

    const stringifiedValue = JSON.stringify(value);
    localStorage.setItem(key, stringifiedValue);
  }

  getItem<T>(key: string): T | null {
    const item = localStorage.getItem(key);

    if (!item) return null;

    return JSON.parse(item) as T;
  }
}
