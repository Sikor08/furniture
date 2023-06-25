class Param{
    constructor(element) {
        this.name = element.value;
        this.price = +element.dataset['price'];
        this.calories = +element.dataset['calories']
    }
}

class Burger{
    constructor(size, add, toping){
        this.size = new Param(this._select(size));
        this.add = new Param(this._select(add));
        this.toping = this._getToppings(toping)
    }

    _getToppings(name){
        let result = [];
        this._selectAll(name).forEach(el => {
            let obj = new Param(el);
            result.push(obj)
        });
        console.log(result)
        return result
    }

    _select(name){
        return document.querySelector(`input[name=${name}]:checked`);
    }
    
    _selectAll(name){
        return [...document.querySelectorAll(`input[name=${name}]:checked`)]
    }
}




    const btn = document.getElementById('check')
    btn.addEventListener('click', (e) => {
        let burger = new Burger('size', 'add', 'toping')
        console.log(burger)
    })

