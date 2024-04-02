export interface Storage {
  upload(attachment: Attachment): Promise<string>;

  download(attachmentId: string): Promise<Attachment>;
}

export type Attachment = {
  localPath: string;
  userId: number;
  messageId: number;
};
