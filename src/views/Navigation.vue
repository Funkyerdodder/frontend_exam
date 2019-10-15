<template>
    <div class="navigation">
        <router-link to="/">Currency Converter</router-link> |
        <router-link to="/weather-bulletin">Weather Bulletin</router-link> |
        <router-link to="/battle-of-numbers">Battle of Numbers</router-link>
    </div>
</template>

<style scoped>
    .navigation {
        background: #757373;
        color: #f7f7f7;
        text-align: center;
        padding: 10px;
    }

    .navigation a {
        padding: 5px;
        margin: 5px;
        text-decoration: none;
        color: #f7f7f7;
    }

    .navigation a:hover {
        border-bottom: 3px #cac4c4 solid;
    }
</style>