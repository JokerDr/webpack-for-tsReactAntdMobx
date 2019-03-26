import { GlobalStore } from './globalStore'  //这里如果导入的 globalStore没有 export default class xxx d的写法，则会报错cl   

const globalStore = new GlobalStore();

export { globalStore };
