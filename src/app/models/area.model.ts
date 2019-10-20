import { Store } from './store.model';

export class Area  {
    public id: number;
    public floor: number;
    public name: String;
    public createdDate: String;
    public updatedDate: String;
    public status: String;
    public updatedBy: String;
    public stoID: number;
    public store: Store;
}
