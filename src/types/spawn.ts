import { MyVolumesQuery, MyHostsQuery } from "gql/generated/types";

export type MyVolume = MyVolumesQuery["myVolumes"][0];
export interface TableVolume extends MyVolume {}
export type MyHost = MyHostsQuery["myHosts"][0];
