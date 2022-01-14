app.component('review-lijst',{
    props:{
        reviews:{ //structuur van variabele review []
            type:Array,
            required:true,
        }
    },
    template: //gaat om de afdruk van de review
        `<div class="review-container">
        <h3>Reviews</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
            {{review.name}} gaf {{ review.rating }} stars <br>
            "{{review.review}}"<br>
            </li>
        </ul>
         </div>`
})