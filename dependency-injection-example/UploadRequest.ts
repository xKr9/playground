import { PreviewGeneratorFactory } from "./PreviewGeneratorFactory";
import { ImageScaler } from "./ImageService";
import { Attachment, Storage } from "./interfaces/Storage";
import { Scanner } from "./ScannerService";

export class UploadRequest {
  private readonly previewFactory: PreviewGeneratorFactory;
  private readonly storage: Storage;
  private readonly scanner: Scanner;
  private readonly scaler: ImageScaler;

  private readonly IMAGE_MAX_WIDTH = 800;

  constructor(
    storage: Storage,
    scanner: Scanner,
    scaler: ImageScaler,
    preview: PreviewGeneratorFactory
  ) {
    this.storage = storage;
    this.scanner = scanner;
    this.scaler = scaler;
    this.previewFactory = preview;
  }

  async upload(attachment: Attachment, mime: string) {
    if (await this.scanner.scan(attachment.localPath)) {
      throw Error("Virus detected");
    }
    if (this.scaler.supported(mime)) {
      attachment.localPath = await this.scaler.scale(
        attachment.localPath,
        this.IMAGE_MAX_WIDTH
      );
    }
    return await this.storage.upload(attachment);
  }
}
