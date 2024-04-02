import sharp from "sharp";

export interface ImageScaler {
  scale(filename: string, maxWidth: number): Promise<string>;
  supported(mimeType: string): boolean;
}

export class SharpImageScaler implements ImageScaler {
  async scale(filename: string, maxWidth: number): Promise<string> {
    const scaledFilename = `${filename}.resized.jpg`;
    await sharp(filename).resize(maxWidth).toFile(scaledFilename);
    return scaledFilename;
  }
  supported(mimeType: string): boolean {
    return (
      mimeType === "image/jpeg" ||
      mimeType === "image/png" ||
      mimeType === "image/webp" ||
      mimeType === "image/tiff"
    );
  }
}
