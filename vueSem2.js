new Vue({
  el: "#app",
  data: {
    flag: false,
    products: [
      {
        name: "туфли",
        price: 25000,
      },
      {
        name: "рубашка",
        price: 7000,
      },
      {
        name: "носки",
        price: 1500,
      },
      {
        name: "шапка",
        price: 1560,
      },
      {
        name: "очки",
        price: 80000,
      },
      {
        name: "часы",
        price: 4560000,
      },
      {
        name: "попрыгунчик",
        price: 50,
      },
    ],
  },
  methods: {},
  computed: {
    arrSort() {
      if (this.flag === "по возрастанию") {
        return this.products.sort((a, b) => a.price - b.price);
      } else if (this.flag == "по убыванию") {
        return this.products.sort((a, b) => b.price - a.price);
      } else {
        return this.products;
      }
    },
  },
});
