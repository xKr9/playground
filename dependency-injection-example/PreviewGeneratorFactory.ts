export interface PreviewGenerator {
  register(type: string, generator: PreviewGenerator): void;
  generate(type: string, filename: string): Promise<string>;
}

export class PreviewGeneratorFactory {
  private readonly generators: Map<string, PreviewGenerator> = new Map();

  register(type: string, generator: PreviewGenerator) {
    this.generators.set(type, generator);
  }

  async generate(type: string, filename: string): Promise<string> {
    const generator = this.generators.get(type);
    if (!generator) {
      throw Error(`No generator for type ${type}`);
    }
    return generator.generate(type, filename);
  }
}
