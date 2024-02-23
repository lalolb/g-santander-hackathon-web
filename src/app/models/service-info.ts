export class ServiceInfo {
    name: string;
    route: string;
    params: any;

    constructor(data: ServiceInfo) {
        this.name = data.name;
        this.route = data.route;
        this.params = data.params;
    }
}
