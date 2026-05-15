import { Database } from "bun:sqlite";

const db = new Database("database.sqlite");
const query = db.query("select 'Hello world' as message;");
query.get();

//class item_ {
//    public title : string
//    constructor(title : string) {
//        this.title = title
//    }
// }

class Item{
    constructor(public title : string){}
}

class TodoList {
    private items: Item [] = []

    addItem(item: Item) {
        this.items.push(item)
    }

    removeItem(index: number) {
        this.items.splice(index,1)
    }

    getItems(){
        return [ ...this.items]
    }

}