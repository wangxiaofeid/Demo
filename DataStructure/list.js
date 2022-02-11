export class List {
    _data = undefined;
    _hand = undefined;
    add(value) {
        const newData = {
            value: value,
        };
        if (!this._data) {
            this._data = newData;
        } else {
            this._hand.next = newData;
        }
        this._hand = newData;
    }
    get() {
        if (!this._data) {
            throw "没数据";
        }
        const back = this._data.value;
        this._data = this._data.next;
        return back;
    }
}

export class Stack {}
