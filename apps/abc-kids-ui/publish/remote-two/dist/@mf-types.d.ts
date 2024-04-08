
    export type RemoteKeys = 'REMOTE_ALIAS_IDENTIFIER/home';
    type PackageType<T> = T extends 'REMOTE_ALIAS_IDENTIFIER/home' ? typeof import('REMOTE_ALIAS_IDENTIFIER/home') :any;