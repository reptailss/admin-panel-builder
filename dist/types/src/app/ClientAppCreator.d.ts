import { IApp } from "./interfaces";
export declare class ClientAppCreator {
    private readonly element;
    private readonly app;
    constructor(element: HTMLElement | null, app: IApp);
    init(): void;
}
