
    export type RemoteKeys = 'remote_two/home';
    type PackageType<T> = T extends 'remote_two/home' ? typeof import('remote_two/home') :any;