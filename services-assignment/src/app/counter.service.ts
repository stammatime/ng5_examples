export class CounterService {
    aCount = 0;
    iCount = 0;

    activeCount() {
        this.aCount++;
        console.log('Active count is ' + this.aCount);
    }

    inactiveCount() {
        this.iCount++;
        console.log('Inactive count is ' + this.iCount);
    }
}

