<template>
    <header>
        <div class="header-content">
            <p class="logoIGN">
                <a href="/index.html">
                    <img src="/images/logoIGN.png" alt="IGN" width="94" height="100">
                </a>
            </p>
            <h1>{{ title }}</h1>
        </div>
    </header>
</template>

<script>
export default {
  name: "TheHeader",
  props: {
    title: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    text-align: center;
}
</style>
