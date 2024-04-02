import { SharpImageScaler } from "./ImageService";
import { Attachment } from "./interfaces/Storage";
import { PreviewGeneratorFactory } from "./PreviewGeneratorFactory";
import { SynergySecurityScanner, ThreadProtectScanner } from "./ScannerService";
import { StorageFactory } from "./StorageFactory";
import { UploadRequest } from "./UploadRequest";

const previewFactory = new PreviewGeneratorFactory();

const imageScaler = new SharpImageScaler();

const virusScanner =
  process.env.NODE_ENV === "production"
    ? new ThreadProtectScanner()
    : new SynergySecurityScanner();

const req = {
  file: {
    mimeType: "application/pdf",
  },
};
const storage = StorageFactory.create(1);

const { file } = req;

try {
  const attachment: Attachment = {
    localPath: "path/to/file",
    userId: 1,
    messageId: 1,
  };
  const request = new UploadRequest(
    storage,
    virusScanner,
    imageScaler,
    previewFactory
  );
  const attachmentId = request.upload(attachment, file.mimeType);
} catch (error) {
  console.error(error);
}
