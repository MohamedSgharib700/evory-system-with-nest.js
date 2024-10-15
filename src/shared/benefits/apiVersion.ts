export class ApiVersion {
    static apiVersion: string = 'v1';

    static setApiVersion(version: string): void {
        ApiVersion.apiVersion = version;
    }

    static getApiVersion(): string {
        return ApiVersion.apiVersion;
    }
}