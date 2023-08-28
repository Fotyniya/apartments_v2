<script>
/*eslint-disable*/
</script>

<template>
    <AuthContainer class="registration" >
        <MainTitle class="registration__title" >Registration</MainTitle>
        <Form ref="form" class="registration__form" @submit.prevent="handleSubmit" >
            <CustomInput 
                v-model="formData.name" 
                name="name" 
                :rules="nameRules" 
                class="registration__input"
                placeholder="Name"
                autocomplete="userName" 
            />
            <CustomInput 
                v-model="formData.email" 
                name="email" 
                :rules="emailRules" 
                class="registration__input"
                placeholder="Email"
                autocomplete="email" 
            />
            <CustomInput 
                v-model="formData.password" 
                name="password" 
                type="password"
                :rules="passwordRules" 
                class="registration__input" 
                placeholder="Password"
                autocomplete="current-password"
            />
            <CustomInput
                v-model="formData.confirmPassword"
                placeholder="Confirm password"
                autocomplete="current-password"
                type="password"
                name="password"
                :rules="confirmPassword"
                class="registration__input"
            />
            <Button_submit type="submit" class="registration__btn" :loading="loading" >Вход</Button_submit>
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
            name: 'RegistrationForm',
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
                        name: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
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
                nameRules() {
                    return [this.rules.isRequired];
                },
                emailRules() {
                    return [this.rules.isRequired, this.rules.emailValidation];
                },
                passwordRules() {
                    return [this.rules.isRequired, this.rules.passwordValidation];
                },
                confirmPassword() {
                    return [
                        (val) => ({
                            hasPassed: val === this.formData.password,
                            message: 'Пароли не совпадают',
                        }),
                    ];
                },
            },
            methods: {
                ...mapActions('auth', ['registerUser']),
                async handleSubmit() {
                    const { name, password, email } = this.formData;
                    const { form } = this.$refs;
                    
                    const isFormValid = form.validate();
                    
                    if (isFormValid) {
                        try {
                            this.loading = true;
                           
                            await this.registerUser( { name, password, email } );
                            
                            console.log(this.$store.state)
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
    .registration {
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