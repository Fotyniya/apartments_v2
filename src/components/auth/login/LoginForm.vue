<script>
/*eslint-disable*/
</script>

<template>
<AuthContainer class="login" >
    <MainTitle class="login__title" >Login</MainTitle>
    <Form ref="form" class="login__form" @submit.prevent="handleSubmit" >
        <CustomInput 
            v-model="formData.email" 
            name="email" 
            :rules="emailRules" 
            class="login__input"
            placeholder="Email"
            autocomplete="email" 
        />
        <CustomInput 
            v-model="formData.password" 
            name="password" 
            type="password"
            :rules="passwordRules" 
            class="login__input" 
            placeholder="Password"
            autocomplete="current-password"
        />
        <Button_submit type="submit" class="login__btn" :loading="loading" >Вход</Button_submit>
    </Form>
</AuthContainer>
</template>

<script>
import Form from '../../shared/form/indexForm';
import CustomInput from '../../shared/CustomInput.vue';
import Button_submit from '../../shared/Button_submit.vue';
import { emailValidation, passwordValidation, isRequired } from '../../../utils/validationRules';
import AuthContainer from '../AuthContainer.vue';
import MainTitle from '../../shared/MainTitle';
import { mapActions } from 'vuex';

    export default {
        name: 'LoginForm',
        components: {
            Form,
            CustomInput,
            Button_submit,
            AuthContainer,
            MainTitle
        },
        data() {
            return {
                loading: false,
                formData: {
                    email: '',
                    password: ''
                }
            }
        },
        computed: {
            rules() {
                return {
                    emailValidation,
                    passwordValidation,
                    isRequired,
                };
            },
            emailRules() {
                return [this.rules.isRequired, this.rules.emailValidation];
            },
            passwordRules() {
                return [this.rules.isRequired];
            },
        },
        methods: {
            ...mapActions('auth', ['login']),
            async handleSubmit() {
                const { form } = this.$refs;
                const isFormValid = form.validate();
                if (isFormValid) {
                    try {
                        this.loading = true;
                       
                        await this.login(this.formData);
                            this.$router.push({ name: 'homepage' })
                            form.reset();
                    } catch(error){
                        this.$notify({
                            type: 'error',
                            title: 'Произошла ошибка',
                            text: error.message,
                            });
                    } finally {
                        this.loading = false;
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.login {
  &__form {
    display: block;
    flex-direction: column;
  }

  &__title {
    text-align: center;
  }

  &__input {
    margin-bottom: 20px;
    width: 100%;
  }

  &__btn {
    margin-top: 15px;
    width: 100%;
  }
}
</style>