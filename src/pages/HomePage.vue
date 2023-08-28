<script>
/*eslint-disable*/
</script>

<template>
    <main class="homepage">
      <SectionWithHeaderSpacer>
        <Container>
          <ApartmentFilterForm 
            class="apartments-filter"
            @submit="filter"
          />
        </Container>
        <Container>
        <p v-if="!filteredApartments.length" >Ничего не найдено</p>
        <ApartmentsList v-else :items="filteredApartments">
          <template v-slot:title>New title</template>
          <template v-slot:apartment="{ apartment }">
            <ApatmentsItem 
              :key="apartment.id"
              :id="apartment.id"
              :descr="apartment.descr"
              :rating="apartment.rating"
              :imgSrc="apartment.imgUrl"
              :price="apartment.price"
            />
          </template>
        </ApartmentsList>
      </Container>
    </SectionWithHeaderSpacer>
    </main>
</template> 
  
  <script>
  import ApartmentsList from '../components/Apartments/ApartmentsList'
  import ApatmentsItem from '../components/Apartments/ApartmentsItem'
  import ApartmentFilterForm from '../components/ApartmentFilterForm.vue';
  import Container from '../components/shared/Container.vue';
  import { getApartmentsList } from '../services/apartments.service';
  import SectionWithHeaderSpacer from "../components/shared/SectionWithHeaderSpacer";

  export default {
    name: "App",
    components: {
      ApartmentsList,
      ApatmentsItem,
      ApartmentFilterForm,
      Container,
      SectionWithHeaderSpacer
    },
    data() {
      return {
        apartments: [],
        text: '',
        filters: {
          city:'',
          price:0,
        }
      };
    },
    computed: {
      filteredApartments(){
        return this.filterByCityName(this.filterByPrice(this.apartments))
      }
    },
    async created() {
        try {
            const { data } = await getApartmentsList();
            console.log(data)
            this.apartments = data;
        } catch (error) {
            console.error(error);
        }
    },
    methods: {
      filter({city, price}){
        this.filters.city = city;
        this.filters.price = price;
      },
      filterByCityName(apartments){
        if(!this.filters.city) return apartments
        return apartments.filter(apartment => {
          return apartment.location.city === this.filters.city
        })
      },
      filterByPrice(apartments){
        if(!this.filters.price) return apartments
        return apartments.filter(apartment => {
          return apartment.price >= this.filters.price
        })
      }, 
    }
  };
  </script>
  
  <style>
  .apartments-filter {
    margin-bottom: 40px;
  }
  </style>
  