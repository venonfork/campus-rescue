<template lang="html">
  <div id="products">
    <ul id="list">
      <li v-for="p in products" class="item">
        <span class="name">{{ p.name }}</span>
        <span class="price">{{ p.price }} &euro;</span>
        <img :src="'./static/img/shop/' + p.img"
          alt="" class="img">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {id: 1, name: "a", brand: "obey", img:"obey-hypnofrog.jpeg", price: 30, color: ""},
        {id: 2, name: "a", brand: "adidas", img:"obey-hypnofrog.jpeg", price: 30, color: ""},
        {id: 3, name: "a", brand: "nike sb", img:"obey-hypnofrog.jpeg", price: 30, color: ""},
        {id: 4, name: "a", brand: "patagonia", img:"obey-hypnofrog.jpeg", price: 30, color: ""},
        {id: 5, name: "a", brand: "unkut", img:"obey-hypnofrog.jpeg", price: 30, color: ""},
        {id: 6, name: "a", brand: "lrg", img:"obey-hypnofrog.jpeg", price: 30, color: ""},
        {id: 7, name: "a", brand: "suit", img:"obey-hypnofrog.jpeg", price: 30, color: ""},
        {id: 8, name: "a", brand: "element", img:"obey-hypnofrog.jpeg", price: 30, color: ""},
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#list {
  display: grid;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-template-rows: auto;
}
#list .item {
  position: relative;
}
#list .img {
  display: block;
  width: 100%;
}
</style>
