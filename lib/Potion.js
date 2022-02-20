
function Potion(name) {
    this.types = ['strength', 'agility', 'health'];
    this.name = name;
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)]; 

    switch (this.name) {
        case 'health': 
            this.value = Math.floor(Math.random() * 10 + 30);
            break;
        default: this.value = Math.floor(Math.random() * 5 + 7);
    }
}

module.exports = Potion;