app.component('review-form', {
    template:
        `<form class="review-form" @submit.prevent="onSubmit"> 
        <h3>Laat een review achter</h3>
        <label class="form-label" for="name">Naam:</label>
        <input class="form-control" id="name" v-model="name">
        
        <label class="form-label" for="review">Review:</label>
        <textarea id="review" class="form-control" v-model="review"></textarea>
        
        <label class="form-check-label" for="rating">Rating:</label>
        <select id="rating" class="form-select" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>
        <input class="btn btn-primary" type="submit" value="submit">
    </form>`,
    data(){
        return{ // om data op te vangen uit formulier
            name:'', //zijn de id's van de forms die hier staan
            review: '',
            rating: null
        }
    },
    methods:{
        onSubmit(){
            let productReview={
                name: this.name,
                review : this.review,
                rating: this.rating,
            }
            this.$emit('toevoegenReview', productReview) // na ingeven en klik w alle info in productReview gestoken gaat naar productweergave want de review hoort bij produt
            this.name= ''  //productReview geplakt als rugzak aan eventhandler: toevoegenReview
            this.review=''     //die w dan toegevoegd op niveau productweergave
            this.rating= null
        }
    }
})