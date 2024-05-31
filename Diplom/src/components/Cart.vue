<template>
  <div class="cart_head center">
    <h3>Cart</h3>
    <div v-show="!products.length">
      <p>Your cart is empty!</p>
      <router-link to="/">Continue shopping</router-link>
    </div>

    <div v-show="products.length">
      <div class="cart_list">
        <div v-for="product in products" :key="product.uid">
          <div class="cart_item">
            <span><img :src="product.src" class="item_image" /></span>
            <span>{{ product.name }}</span>
            <span>Quantity: {{ product.quantity }}</span>
            <span> {{ product.price * product.quantity }} $ </span>
            <div class="btn_box">
              <button type="button" class="button item_button cart_button" @click="addToCart(product)">
                +
              </button>
              <button type="button" class="button item_button remove_button" @click="removeFromCart(product)">
                &minus;
              </button>
            </div>
          </div>
        </div>
      </div>
      <span class="total">Total amount:
        {{ new Intl.NumberFormat("ru-RU").format(total) }} $</span>
    </div>
    <button v-show="products.length" @click="pay" class="pay">
      Pay
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters({
      products: "cartProducts",
      total: "total",
    }),
  },
  methods: {
    ...mapMutations(["addToCart", "removeFromCart"]),
    pay() {
      const string = this.products
        .map((item) => {
          return item.name + " " + item.quantity + " шт.";
        })
        .join("\n");

      alert(string + "\nОбщая стоимость " + this.total + " $.");
    },
  },
};
</script>

<style scoped>
.cart_head{
  text-align: center;
}
.cart_list {
  margin-bottom: 20px;
}
.cart_item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  border-bottom: 1px solid gray;
}
.cart_item > span {
  width: 300px;
}
.button {
  background: #fff;
  border: 1px solid #35a2c7;
  border-radius: 4px;
}
.button:hover {
  background: #35a2c7;
  color: #fff;
  border: none;
  cursor: pointer;
}
.item_button {
  margin-right: 10px;
}
.cart_button,
.remove_button {
  width: 30px;
  height: 30px;
}
.pay {
  margin-top: 30px;
  padding: 10px;
  border-radius: 4px;

  background: #35a2c7;
  color: #fff;
  border: none;
  cursor: pointer;
}
.total {
  font-weight: bold;
}

.item_image{
  width: 20%;
  box-sizing: border-box;
}

.btn_box{
  display: flex;
 
}

</style>
