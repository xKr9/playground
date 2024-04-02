import { ImageScaler } from "./ImageService";

export interface PreviewGenerator {
  generate(filename: string): Promise<string>;
}

export class DocumentPreviewGenerator implements PreviewGenerator {
  async generate(filename: string): Promise<string> {
    return `preview-${filename}`;
  }
}

export class VideoPreviewGenerator implements PreviewGenerator {
  async generate(filename: string): Promise<string> {
    return `preview-${filename}`;
  }
}

export class ImagePreviewGenerator implements PreviewGenerator {
  private readonly scaler: ImageScaler;
  private readonly MAX_WIDTH = 250;

  constructor(scaler: ImageScaler) {
    this.scaler = scaler;
  }

  async generate(filename: string): Promise<string> {
    return this.scaler.scale(filename, this.MAX_WIDTH);
  }
}
