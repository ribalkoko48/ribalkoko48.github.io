declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare const API_ROOT: InitialData;
declare const WS_API_ROOT_V1: InitialData;
declare const VERSION: InitialData;
declare const describe: InitialData;
declare const test: InitialData;
declare const expect: InitialData;

declare module '*.module.scss' {
    const content: { [key: string]: string };
    export = content;
}

declare global {
    interface Window {
        _____APP_STATE_____: any;
    }
}
