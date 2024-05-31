import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      selectedTag: null,
      products: [
        {
          id: 1,
          name: "Мужская одежда 1",
          price: 10,
          quantity: 0,
          category: 'Мужская одежда',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis laborum, ducimus perspiciatis harum nihil amet exercitationem quod necessitatibus sequi cum facilis',
          src: "src/assets/images/male_1.png",
          liked: "no"
        },
        {
          id: 2,
          name: "Мужская одежда 2",
          price: 20,
          quantity: 0,
          category: 'Мужская одежда',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis laborum, ducimus perspiciatis harum nihil amet exercitationem quod necessitatibus sequi cum facilis',
          src: "src/assets/images/male_2.png",
          liked: "no"
        },
        {
          id: 3,
          name: "Мужская одежда 3",
          price: 30,
          quantity: 0,
          category: 'Мужская одежда',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis laborum, ducimus perspiciatis harum nihil amet exercitationem quod necessitatibus sequi cum facilis',
          src: "src/assets/images/male_1.png",
          liked: "no"
        },
        {
          id: 4,
          name: "Мужская одежда 4",
          price: 40,
          quantity: 0,
          category: 'Мужская одежда',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis laborum, ducimus perspiciatis harum nihil amet exercitationem quod necessitatibus sequi cum facilis',
          src: "src/assets/images/male_1.png",
          liked: "no"
        },
        {
          id: 5,
          name: "Мужская одежда 5",
          price: 50,
          quantity: 0,
          category: 'Мужская одежда',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis laborum, ducimus perspiciatis harum nihil amet exercitationem quod necessitatibus sequi cum facilis',
          src: "src/assets/images/male_2.png",
          liked: "no"
        },
        {
          id: 6,
          name: "Мужская одежда 6",
          price: 60,
          quantity: 0,
          category: 'Мужская одежда',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis laborum, ducimus perspiciatis harum nihil amet exercitationem quod necessitatibus sequi cum facilis',
          src: "src/assets/images/male_1.png",
          liked: "no"
        },
        {
          id: 7,
          name: "Женская одежда 1",
          price: 10,
          quantity: 0,
          category: 'Женская одежда',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis laborum, ducimus perspiciatis harum nihil amet exercitationem quod necessitatibus sequi cum facilis',
          src: "src/assets/images/women_3.png",
          liked: "no"
        },
        {
          id: 8,
          name: "Женская одежда 2",
          price: 20,
          quantity: 0,
          category: 'Женская одежда',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis laborum, ducimus perspiciatis harum nihil amet exercitationem quod necessitatibus sequi cum facilis',
          src: "src/assets/images/women_4.png",
          liked: "no"
        },
        {
          id: 9,
          name: "Женская одежда 3",
          price: 30,
          quantity: 0,
          category: 'Женская одежда',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis laborum, ducimus perspiciatis harum nihil amet exercitationem quod necessitatibus sequi cum facilis',
          src: "src/assets/images/women_3.png",
          liked: "no"
        },
        {
          id: 10,
          name: "Женская одежда 4",
          price: 40,
          quantity: 0,
          category: 'Женская одежда',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis laborum, ducimus perspiciatis harum nihil amet exercitationem quod necessitatibus sequi cum facilis',
          src: "src/assets/images/women_4.png",
          liked: "no"
        },
        {
          id: 11,
          name: "Женская одежда 5",
          price: 50,
          quantity: 0,
          category: 'Женская одежда',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis laborum, ducimus perspiciatis harum nihil amet exercitationem quod necessitatibus sequi cum facilis',
          src: "src/assets/images/women_3.png",
          liked: "no"
        },
        {
          id: 12,
          name: "Женская одежда 6",
          price: 60,
          quantity: 0,
          category: 'Женская одежда',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis laborum, ducimus perspiciatis harum nihil amet exercitationem quod necessitatibus sequi cum facilis',
          src: "src/assets/images/women_4.png",
          liked: "no"
        },
        {
          id: 13,
          name: "Детская одежда 1",
          price: 10,
          quantity: 0,
          category: 'Детская одежда',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis laborum, ducimus perspiciatis harum nihil amet exercitationem quod necessitatibus sequi cum facilis',
          src: "src/assets/images/kids_1.png",
          liked: "no"
        },
        {
          id: 14,
          name: "Детская одежда 2",
          price: 20,
          quantity: 0,
          category: 'Детская одежда',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis laborum, ducimus perspiciatis harum nihil amet exercitationem quod necessitatibus sequi cum facilis',
          src: "src/assets/images/kids_2.png",
          liked: "no"
        },
        {
          id: 15,
          name: "Детская одежда 3",
          price: 30,
          quantity: 0,
          category: 'Детская одежда',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis laborum, ducimus perspiciatis harum nihil amet exercitationem quod necessitatibus sequi cum facilis',
          src: "src/assets/images/kids_1.png",
          liked: "no"
        },
        {
          id: 16,
          name: "Верхняя одежда 1",
          price: 10,
          quantity: 0,
          category: 'Верхняя одежда',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis laborum, ducimus perspiciatis harum nihil amet exercitationem quod necessitatibus sequi cum facilis',
          src: "src/assets/images/outerwear_2.png",
          liked: "no"
        },
        {
          id: 17,
          name: "Верхняя одежда 2",
          price: 20,
          quantity: 0,
          category: 'Верхняя одежда',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis laborum, ducimus perspiciatis harum nihil amet exercitationem quod necessitatibus sequi cum facilis',
          src: "src/assets/images/outerwear_3.png",
          liked: "no"
        },{
          id: 18,
          name: "Верхняя одежда 3",
          price: 30,
          quantity: 0,
          category: 'Верхняя одежда',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis laborum, ducimus perspiciatis harum nihil amet exercitationem quod necessitatibus sequi cum facilis',
          src: "src/assets/images/outerwear_2.png",
          liked: "no"
        },
        {
          id: 19,
          name: "Брюки 1",
          price: 10,
          quantity: 0,
          category: 'Брюки',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis laborum, ducimus perspiciatis harum nihil amet exercitationem quod necessitatibus sequi cum facilis',
          src: "src/assets/images/pants_1.png",
          liked: "no"
        },
        {
          id: 20,
          name: "Брюки 2",
          price: 20,
          quantity: 0,
          category: 'Брюки',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis laborum, ducimus perspiciatis harum nihil amet exercitationem quod necessitatibus sequi cum facilis',
          src: "src/assets/images/pants_3.png",
          liked: "no"
        },
        {
          id: 21,
          name: "Брюки 3",
          price: 30,
          quantity: 0,
          category: 'Брюки',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis laborum, ducimus perspiciatis harum nihil amet exercitationem quod necessitatibus sequi cum facilis',
          src: "src/assets/images/pants_3.png",
          liked: "no"
        },
        {
          id: 22,
          name: "Обувь 1",
          price: 10,
          quantity: 0,
          category: 'Обувь',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis laborum, ducimus perspiciatis harum nihil amet exercitationem quod necessitatibus sequi cum facilis',
          src: "src/assets/images/shoe_1.png",
          liked: "no"
        },
         {
          id: 23,
          name: "Обувь 2",
          price: 15,
          quantity: 0,
           category: 'Обувь',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis laborum, ducimus perspiciatis harum nihil amet exercitationem quod necessitatibus sequi cum facilis',
          src: "src/assets/images/shoe_2.png",
          liked: "no"
        },
         {
          id: 24,
          name: "Обувь 3",
          price: 20,
          quantity: 0,
           category: 'Обувь',
          description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis laborum, ducimus perspiciatis harum nihil amet exercitationem quod necessitatibus sequi cum facilis',
          src: "src/assets/images/shoe_1.png",
          liked: "no"
        },
      ],
      categories: [
        { id: 1, name: "Мужская одежда" },
        { id: 2, name: "Женская одежда" },
        { id: 3, name: "Детская одежда" },
        { id: 4, name: "Верхняя одежда" },
        { id: 5, name: "Брюки" },
        { id: 6, name: "Обувь" },
      ],
      images: [],
    }
  },
  getters: {
    total(state, getters) {
      return getters.cartProducts.reduce((total, p) => {
        return total + p.price * p.quantity;
      }, 0);
    },
    cartProducts: (state) => {
      return state.products.filter((p) => p.quantity!== 0);
    },
    likedProducts: (state) => {
      return state.products.filter((p) => p.liked === "yes");
    },
    itemsInCart: (state, getters) => {
      return getters.cartProducts.reduce(
        (accum, item) => accum + item.quantity,
        0
      );
    },
    itemsInLiked(state, getters) {
      return getters.likedProducts.length;
    },
  },
  mutations: {
    allProducts: (state, payload) => {
      payload.forEach((el) => {
        el.price = Math.floor(Math.random() * 5 + 10);
        el.quantity = 0;
        let rand = Math.floor(Math.random() * state.images.length);
        el.src = "images/" + state.images[rand] + ".webp";
        el.liked = "no";
      });
      state.products = payload;
      localStorage.setItem("products", JSON.stringify(state.products));
    },

    addToCart: (state, product) => {
      const item = state.products.find((p) => p.id === product.id);
      item.quantity++;
      localStorage.setItem("products", JSON.stringify(state.products));
    },

    removeFromCart: (state, product) => {
      const item = state.products.find((p) => p.id === product.id);
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        item.quantity = 0;
      }
      localStorage.setItem("products", JSON.stringify(state.products));
    },

    addToLiked: (state, product) => {
      const item = state.products.find((p) => p.id === product.id);
      if (item) {
        item.liked = "yes";
      }
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    
    removeFromLiked: (state, product) => {
      const item = state.products.find((p) => p.id === product.id);
      item.liked = "no";
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    selectTag(state, tag) {
      state.selectedTag = tag;
    },
  },
});

export default store;