import { Attachment, Storage } from "./interfaces/Storage";

export class AwsStorage implements Storage {
  private readonly s3: any;

  constructor(accessKey: string, secretKey: string) {
    this.s3 = null;
  }

  upload(attachment: Attachment): Promise<string> {
    return Promise.resolve("");
  }

  download(attachmentId: string): Promise<Attachment> {
    return Promise.resolve({
      localPath: "",
      userId: 1,
      messageId: 1,
    });
  }
}

export class SftpStorage implements Storage {
  private readonly sftp: any;

  constructor(host: string, port: number, username: string, password: string) {
    this.sftp = null;
  }

  upload(attachment: Attachment): Promise<string> {
    return Promise.resolve("");
  }

  download(attachmentId: string): Promise<Attachment> {
    return Promise.resolve({
      localPath: "",
      userId: 1,
      messageId: 1,
    });
  }
}

export class WebDavStorage implements Storage {
  private readonly webDav: any;

  constructor(url: string, username: string, password: string) {
    this.webDav = null;
  }

  upload(attachment: Attachment): Promise<string> {
    return Promise.resolve("");
  }

  download(attachmentId: string): Promise<Attachment> {
    return Promise.resolve({
      localPath: "",
      userId: 1,
      messageId: 1,
    });
  }
}
