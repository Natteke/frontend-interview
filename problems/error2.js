// реализовать debounce
function debounce(func, wait) {

}

function fn(...args) {
    console.log(`${this.name} ${args}`);
}

const debouncedFn = debounce(fn, 1000);
const obj = {name: "Andrey"};

obj.func = debouncedFn;

obj.func("working", "1");
obj.func("working", "2");
obj.func("working", "3");
