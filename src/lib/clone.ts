function clone<X>(data: X): X { //data是什么类型就返回什么类型
    return JSON.parse(JSON.stringify(data));
}

export default clone;