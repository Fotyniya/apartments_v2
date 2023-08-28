<template>
    <form class="form" @submit.prevent="handleSubmit">
        <CustomSelect :items="cities" v-model="city" class="form__select" />
        <CustomInput
            v-model="price"
            placeholder="Цена, от"
            error-message="Не должно быть пустым" 
           :rules="rules"
        />
        <SubmitButton class="form__submit" type="submit">
            Подбор жилья
        </SubmitButton>
    </form>
</template>

<script>
import CustomSelect from '../components/shared/CustomSelect.vue'
import CustomInput from '../components/shared/CustomInput.vue'
import SubmitButton from '../components/shared/Button_submit';
import { isRequired, charLimit } from '../../src/utils/validationRules';

    export default {
        components: {
            CustomSelect,
            CustomInput,
            SubmitButton
        },
        data() {
            return {
            price: '',
            city: '',
            };
        },
        computed: {
          rules() {
            return [isRequired, charLimit(10)];
          },
          cities() {
            return [
              { value: '', label: 'Город', selected: true },
              'Kyiv',
              'Odesa',
              'Poltava',
              'Kharkiv',
              'Dnipro',
              'Lviv',
              'Kherson',
              'Mariupol',
            ];
          }, 
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