interface Downloadable {
  download(file: File): void;
}

class JsonDownloadable implements Downloadable {
  download(file: File): void {
    console.log(`Downloading JSON file: ${file.name}`);
  }
}

class PdfDownloadable implements Downloadable {
  download(file: File): void {
    console.log(`Downloading PDF file: ${file.name}`);
  }
}

class CSVDownloadable implements Downloadable {
  download(file: File): void {
    console.log(`Downloading image file: ${file.name}`);
  }
}

const run = () => {
  let downloadable: Downloadable;
};
