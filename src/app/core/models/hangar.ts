import { Adapter } from './adapter';

export class Hangar {

  constructor(
    public id: number,
    public name: string,
    public address: string,
    public owner: string,
    public ownerEmail: string,
    public phoneNumber: number,
    public isActive: boolean
  ) {}

}

export class HangarAdapter implements Adapter<Hangar> {

  adapt(item: any) {
    return new Hangar(
      item.id,
      item.name,
      item.address,
      item.owner,
      item.ownerEmail,
      item.phoneNumber,
      item.isActive
    );
  }
}
