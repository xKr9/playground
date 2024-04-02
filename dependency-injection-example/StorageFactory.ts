import { AwsStorage, SftpStorage, WebDavStorage } from "./StorageService";

export class StorageFactory {
  static create(companyId: number) {
    if (companyId === 1) {
      return new AwsStorage("", "");
    }
    if (companyId === 2) {
      return new SftpStorage("", 1234, "", "");
    }
    if (companyId === 3) {
      return new WebDavStorage("", "", "");
    }
    return new AwsStorage("", "");
  }
}
