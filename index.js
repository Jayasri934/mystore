
      const products = [
        { id: 1, name: "P1", price: 34 },
        { id: 2, name: "P2", price: 50 },
        { id: 3, name: "P3", price: 40 },
      ];
      const cart = {};
      const addToCart = (id) => {
        cart[id] = 1;
        showCart();
      };
      const increment=(id)=>{
        cart[id]=cart[id]+1;
        showCart();
      };
      const decrement=(id)=>{
        cart[id]=cart[id]-1;
        showCart();
      };
      const showCart = () => {
        let str = "";
        products.map((value) => {
          if (cart[value.id]) {
            str += `<div>${value.id}-${value.name}-${value.price}-<button>-</button>${cart[value.id]}<button>+</button>-${value.price*cart[value.id]}</div>`;
          }
        });
        divCart.innerHTML = str;
      };
      const showProducts = () => {
        let str = "";
        products.map((value) => {
          str += `<div>${value.id}-${value.name}-${value.price}-<button onclick='addToCart(${value.id})'>Add to Cart</button></div>`;
        });
        divProducts.innerHTML = str;
      };
    