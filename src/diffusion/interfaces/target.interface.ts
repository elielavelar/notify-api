export interface ITarget {
  name: string;
  url: string;
  token: string;
}
export interface ITargets {
  [key: string]: ITarget;
}
