<template>
    <form class="form" @submit.prevent="handleSubmit">
        <CustomSelect :items="citiesList" v-model="city" class="form__select" />
        <CustomInput
            v-model="price"
            placeholder="Price, from"
            error-message="The field must not be empty" 
           :rules="rules"
        />
        <SubmitButton class="form__submit" type="submit">
          Selection
        </SubmitButton>
    </form>
</template>

<script>
import CustomSelect from '../components/shared/CustomSelect.vue'
import CustomInput from '../components/shared/CustomInput.vue'
import SubmitButton from '../components/shared/Button_submit';
import { isRequired, charLimit } from '../../src/utils/validationRules';
import { getCityList } from '../services/info.service'

export default {
  components: {
    CustomSelect,
    CustomInput,
    SubmitButton
  },
  data() {
    return {
      citiesList: [],
      price: '',
      city: '',
    };
  },
  computed: {
    rules() {
      return [isRequired, charLimit(10)];
    },
    // cities() {
    //   return [
    //     { value: '', label: 'City', selected: true },
        
        // 'Kyiv',
        // 'Odesa',
        // 'Poltava',
        // 'Kharkiv',
        // 'Dnipro',
        // 'Lviv',
        // 'Kherson',
        // 'Mariupol',
    //   ];
    // }, 
  },
  async created(){
    try {
      const { data } = await getCityList();
      this.citiesList = [{ value: '', label: 'City', selected: true }, ...data];
      console.log(data)
    } catch(error) {
      console.error(error)
    }
  },      
  methods: {
    handleSubmit() {
      this.$emit('submit', {
        city: this.city,
        price: this.price,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;

  &__select {
    margin-right: 30px;
  }

  &__submit {
    margin-left: auto;
  }
}
</style>