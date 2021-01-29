<template>
    <header>
        <div class="header-content">
            <p class="logoIGN">
                <a href="https://www.ign.fr">
                    <img src="./../assets/logoIGN.png" alt="IGN" width="94" height="100">
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
    header {
        background-image: url("./../assets/entete.png");
        height : 120px ;
        margin-bottom: 10px;
        box-shadow: 0 0 10px #71767A;
    }

    .header-content {
        position: relative;
        max-width: 1200px;
        margin: auto;
    }

    header .header-content {
        display: -webkit-flex;
        display: flex;
        -webkit-align-items: center;
        align-items: center;
    }

    .logoIGN {
        display: inline-block;
        width: 94px ;
        height: 100px;
        margin: 10px;
        margin-left: 20px;
    }

    .logoIGN img {
        width: 100%;
        height: 100%;
    }

    header h1 {
        -webkit-flex: 1;
        flex: 1;
        font-family: OpenSansLight, Arial, sans-serif;
        font-size: 25px;
        font-weight: bold;
        line-height: 1em;
        color: #71767A;
        margin: 0 50px;
        margin-bottom: 20px;
        text-indent: -15px;
    }
</style>
