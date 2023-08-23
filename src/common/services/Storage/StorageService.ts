export abstract class StorageService {
  abstract setItem(key: string, value: unknown): void;
  abstract getItem<T>(key: string): T | null;
}
