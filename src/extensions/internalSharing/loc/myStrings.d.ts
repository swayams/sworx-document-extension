declare interface IInternalSharingCommandSetStrings {
  Command1: string;
  Command2: string;
}

declare module 'InternalSharingCommandSetStrings' {
  const strings: IInternalSharingCommandSetStrings;
  export = strings;
}
