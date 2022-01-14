app.component('product-weergave',{
    props:{
        member:{
            type:Boolean,
            required:true,
        }
    },
    template:
        ` <div class="col-lg-6">
            <img class="img-fluid" v-bind:src="image" alt="{{product}}">
        </div>
        <div class="col-lg-6">
            <h1>{{title}}</h1>
            <h2>{{merk}}</h2>
            <h2>&euro; {{prijs}}</h2>
            <p>{{beschrijving}}</p>
            <p>Voorraad:{{inVoorraad}}</p>
            <p>Verzendkosten:{{verzendkosten}}</p>
            <p v-if="inVoorraad > 9">In Voorraad: </p>
            <p v-else-if="inVoorraad > 0 && inVoorraad <= 9">Laatste stuks</p>
            <p v-else>Niet in voorraad</p>
            <ul>
                <li v-for="productDetail in productDetails">{{productDetail}}</li>
            </ul>
            <div class="kleurvak d-inline-block mx-2" v-for="(soort, index) in soorten" :key="soort.soortId"
                 @mouseover="updateImageandVoorraad(index)" :style="{background:soort.kleur}"></div>
<!--            <div>Aantal:{{winkelwagen}}</div>-->
            <button v-on:click="addToCart" class="btn btn-outline-danger" :disabled="!inVoorraad">Koop</button>
            <review-lijst :reviews="reviews"></review-lijst>
            <review-form @toevoegenReview="toevoegenReview"></review-form> 
<!--          @toevreview komt uit reviewform en heeft alle data = groene toev-->
        </div>`,
    data(){
        return{
            product: 'Gsm oplader',
            merk:'White Label',
            prijs: 50,
            //image:'./images/product.jpg',
            beschrijving:'lorem ipsum',
            //inVoorraad: 1,
            selectedProduct: 0,
            productDetails:["universeel", "smartphone", "1 aansluiting", "inclusief kabel", "draadloos"],
            soorten:[
                {
                    soortId:1,
                    kleur: "black",
                    image: "./images/product.jpg",
                    aantal: 20,
                },
                {
                    soortId:2,
                    kleur: "green",
                    image: "./images/productgroen.jpg",
                    aantal:0,
                },
            ],
            reviews: [], //in deze array komt naam, rating, review
            /*winkelwagen:0,*/
        }
    },
    methods:{
        addToCart(){
            //this.winkelwagen +=1;
            this.$emit('toevoegen-winkelwagen',this.soorten[this.selectedProduct].soortId);
        },
        updateImageandVoorraad(index){
            this.selectedProduct = index;
        },
        toevoegenReview(review){ //in review zit volledige productweergave en daarbij w die review gepushed
            this.reviews.push(review);
        }
    },
    computed:{
        title(){
            //return this.product + ' ' + this.merk
            return `${this.product} ${this.merk}`
        },
        image(){
            return this.soorten[this.selectedProduct].image
        },
        inVoorraad(){
            return this.soorten[this.selectedProduct].aantal
        },
        verzendkosten(){
            if(this.member){
                return 'Gratis verzending'
            }
            return 9.99
        }
    }
})