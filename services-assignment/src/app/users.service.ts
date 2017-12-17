import { EventEmitter, Injectable} from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UsersService {
    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];

    inactiveUser = new EventEmitter<string>();
    activeUser = new EventEmitter<string>();

    constructor(private counterService: CounterService) {}

    setToActive(id: number) {
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id, 1);
        this.counterService.activeCount();
    }

    setToInactive(id: number) {
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id, 1);
        this.counterService.inactiveCount();
    }

}
