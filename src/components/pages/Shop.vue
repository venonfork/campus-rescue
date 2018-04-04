<template lang="html">
  <!-- ./components/pages/Geographie.vue -->
  <main id="main" class="shop">
    <header>
      <h1 class="title">{{ title }}</h1>
    </header>
    <aside>
      <filter-price></filter-price>
      <filter-brand></filter-brand>
      <filter-color></filter-color>
    </aside>
    <product-list></product-list>
  </main>
</template>

<script>
import FilterBrand from "./../shop/FilterBrand.vue";
import FilterColor from "./../shop/FilterColor.vue";
import FilterPrice from "./../shop/FilterPrice.vue";
import ProductList from "./../shop/ProductList.vue";

export default {
  components: {
    FilterBrand,
    FilterColor,
    FilterPrice,
    ProductList,
  },
  data() {
    return {
      title: "SHOP",
      hasDepartement: false
    }
  },
}
</script>

<style lang="scss" scoped>
#main {
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
}
#sidebar {
  display: grid;
}

</style>
