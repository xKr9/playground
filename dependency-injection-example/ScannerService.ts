export type IssueDetected = boolean;

export interface Scanner {
  scan(filename: string): Promise<IssueDetected>;
}

export class ThreadProtectScanner implements Scanner {
  async scan(filename: string): Promise<IssueDetected> {
    return Promise.resolve(false);
  }
}

export class SynergySecurityScanner implements Scanner {
  async scan(filename: string): Promise<IssueDetected> {
    return Promise.resolve(false);
  }
}
