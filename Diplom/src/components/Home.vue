<template>

    <div class="header__content center">
        <div class="header__content_info">
            <h1 class="header__title">Clothes for every day</h1>
            <p class="header__parag">There are many variations of the passages of
                lorem Ipsum fromavailable, majority.</p>
            <button class="header__btn"><router-link to="/Catalog">Get Started </router-link></button>
        </div>

        <div>
        </div>
    </div>
    <div class="top__content center">
        <div class="top__content__info">
            <h2 class="top__content_title">Your clothes are in the best store</h2>
            <p class="top__content_parag">It is a long established fact that a reader will be distracted by the of
                readable content
                of page lookings at its
                layouts points.</p>
        </div>
        <div class="top__content__numb">
            <div class="top__content__numb_1">
                <img src="/src/assets/images/men.jpg" alt="">
                <div class="top__content__numb__info">
                    <div>
                        <h2 class="top__content__title__small">Men</h2>
                        <p class="top__content__parag__small">Clothes</p>
                    </div>
                    <div><router-link to="/Catalog"><button class="top__content__numb__btn"><img
                                    src="/public/assets/btn.png" alt=""></button></router-link>
                    </div>
                </div>
            </div>

            <div class="top__content__numb_2">
                <img src="/src/assets/images/wome.jpg" alt="">
                <div class="top__content__numb__info">
                    <div>
                        <h2 class="top__content__title__small">Women</h2>
                        <p class="top__content__parag__small">Clothes</p>
                    </div>
                    <div><router-link to="/Catalog"><button class="top__content__numb__btn"><img
                                    src="/public/assets/btn.png" alt=""></button></router-link>
                    </div>
                </div>
            </div>

            <div class="top__content__numb_3">
                <img src="/src/assets/images/kids.jpg" alt="">
                <div class="top__content__numb__info">
                    <div>
                        <h2 class="top__content__title__small">Kids</h2>
                        <p class="top__content__parag__small">Clothes</p>
                    </div>
                    <div><router-link to="/Catalog"><button class="top__content__numb__btn"><img
                                    src="/public/assets/btn.png" alt=""></button></router-link>
                    </div>
                </div>
            </div>

            <div class="top__content__numb_4">
                <img src="/src/assets/images/shoes.jpg" alt="">
                <div class="top__content__numb__info">
                    <div>
                        <h2 class="top__content__title__small">Shoes</h2>
                        <p class="top__content__parag__small">All</p>
                    </div>
                    <div><router-link to="/Catalog"><button class="top__content__numb__btn"><img
                                    src="/public/assets/btn.png" alt=""></button></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="top__stats">
        <div>
            <h2 class="top__stats__title">12</h2>
            <p class="top__stats__parag">Years Of Experiance</p>
        </div>
        <div>
            <h2 class="top__stats__title">85</h2>
            <p class="top__stats__parag">Stores</p>
        </div>
        <div>
            <h2 class="top__stats__title">15</h2>
            <p class="top__stats__parag"> Countries</p>
        </div>
        <div>
            <h2 class="top__stats__title">95</h2>
            <p class="top__stats__parag">Millions Happy Customers</p>
        </div>
    </div>

</template>

<style scoped>


.header__content {
    width: 1200px;
    height: 758px;
    background: url('src/assets/images/background_cloth.jpg');
    background-size: cover;
    width: 100%;
    border-radius: 40px;

}

.header__content_info {
    width: 434px;
    padding-top: 330px;
    padding-left: 30px;
}

.header__title {
    font-size: 55px;
    font-family: "DM Serif Display", serif;
    font-weight: 400;
    font-style: normal;
    color:#CDA274
}

.header__parag {
    padding-top: 10px;
    padding-bottom: 15px;
    font-family: "Jost", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    color: #CDA274
}

.header__btn {
    font-size: 18px;
    font-family: "Jost", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    width: 200px;
    height: 70px;
    background-color: #CDA274;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 25px;
}

.header__btn:after {
    content: '→';
    margin-left: 15px;
    color: white;
}

.top__content__info {
    text-align: center;
    -webkit-text-stroke-width: thick;
}

.top__content_title {
    font-size: 55px;
    font-family: "DM Serif Display", serif;
    font-weight: 400;
    font-style: normal;
    padding-top: 35px;
}

.top__content_parag {
    font-family: "Jost", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    white-space: pre-line;
    padding-bottom: 35px;

}

.top__content__numb {
    margin-left: 10px;
    width: 1200px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:5px;
}


.top__content__numb__info {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 50px;
}

.top__content__numb_1>img {
    width: 560px;
}
.top__content__numb_2>img {
    width: 560px;
    height: 843px;
}

.top__content__numb_3>img {
    width: 560px;
}
.top__content__numb_4>img {
    width: 560px;
    height: 843px;
}

.top__content__title__small {
    font-size: 20px;
    font-family: "DM Serif Display", serif;
    font-weight: 400;
    font-style: normal;
    padding-top: 35px;
}

.top__content__parag__small {
    font-family: "Jost", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
}

.top__content__numb__btn {
    border: none;
    background-color: white;
}

.top__stats {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 457px;
    text-align: center;
    
    margin-top: 25px;
    background-image: url('src/assets/images/world.jpg');
    background-size: cover;
    width: 100%;
}

.top__stats__title {
    font-size: 65px;
    font-family: "DM Serif Display", serif;
    font-weight: 400;
    font-style: normal;
    color: white;

}

.top__stats__parag {
    font-family: "Jost", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    color: white;

}

.top__info {
    width: 1200px;
    text-align: center;
    padding-top: 30px;
}

.top__info__title__hi {
    font-size: 45px;
    font-family: "DM Serif Display", serif;
    font-weight: 400;
    font-style: normal;
}

.top__info__title {
    font-size: 25px;
    font-family: "DM Serif Display", serif;
    font-weight: 400;
    font-style: normal;
    padding-left: 10px;
    text-align: left;

}

.top__info__parag {
    font-family: "Jost", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    white-space: pre-line
}

.top__info__block__img {
    border: 1px solid #fff;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px
}

.top__info__all {
    padding-top: 35px;
    display: flex;
}

.top__info__block__1 {
    border: 1px solid #E7E7E7;
    border-radius: 40px;
}

.top__info__block__2 {
    border: 1px solid #E7E7E7;
    background-color: #F4F0EC;
    border-radius: 40px;
}

.top__info__block__3 {
    border: 1px solid #E7E7E7;
    border-radius: 40px;
}

.top__info__small {
    padding-left: 35px;
    padding-right: 25px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

}

.top__info__numb__btn {
    border: none;
    background-color: white;
    text-decoration: none;
}

.top__info__numb__btn__2 {
    border: none;
    background-color: #F4F0EC;
    text-decoration: none;
}

ul {
    font-family: "Jost", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    list-style: none;
}
</style>