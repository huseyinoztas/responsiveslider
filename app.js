(function () {
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')

    const btn = document.querySelectorAll('.btn')
    let index = 0;
    const customers = [];

    function Customer(img, name, text) {
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(img, name, text) {
        let Img = `./img/${img}.jpg`;
        let customer = new Customer(Img, name, text)

        customers.push(customer)
    }

    createCustomer(0, 'John', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae obcaecati magni illum inventore ea dolores autem quibusdam quidem corporis aperiam? Nihil, aliquid atque. Modi, ad!')
    createCustomer(1, 'Black', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae obcaecati magni illum inventore ea dolores autem quibusdam quidem corporis aperiam? Nihil, aliquid atque. Modi, ad!')
    createCustomer(2, 'Sandy', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae obcaecati magni illum inventore ea dolores autem quibusdam quidem corporis aperiam? Nihil, aliquid atque. Modi, ad!')
    createCustomer(3, 'Wanda', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae obcaecati magni illum inventore ea dolores autem quibusdam quidem corporis aperiam? Nihil, aliquid atque. Modi, ad!')

    btn.forEach(function(button){
        button.addEventListener('click', function(e) {
            if(e.target.parentElement.classList.contains('prevBtn')) {
                if(index===0) {
                    index = customers.length
                }
                index--
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
            if(e.target.parentElement.classList.contains('nextBtn')) {
                index++
                if(index===customers.length) {
                    index = 0
                }
                
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
        })
    })

})();