import { observable, action, runInAction, computed, configure} from 'mobx'
// 启用严格模式
// configure({
//     enforceActions: 'observed'
// })

export class GlobalStore {
    @observable public num: number = 0;

    // @computed
    // public get getNum(): number {
    //   return this.num;
    // }

    // public set getNum(x: number) {
    //   this.num += 1;
    // }
    
    @action
    public increase = (): void => {
      this.num += 1;
    }

    @action
    public decrease = (num: any) =>{
      this.num -= 1;
    }

   
    // @action
    // public getData =  async () =>{
    //     // const data = await this.Data('xx');
    //     // runInAction('初始化数据',{
    //     //     this.data = data
    //     // })
    // }
}

