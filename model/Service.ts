import { ServiceUsage } from "./ServiceUsage";

export class Service {
  serviceID !: number;
  serviceName !: string;
  servicePrice !: number;
  description !: string;
  createdAt !: Date;
  
  serviceUsages !: ServiceUsage[];
}