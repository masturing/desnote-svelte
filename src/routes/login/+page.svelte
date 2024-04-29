<script>
    import * as Card from "$lib/components/ui/card";
    import * as Form from "$lib/components/ui/form";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { IconUser, IconFingerprint, IconLogin, IconAlertTriangle } from '@tabler/icons-svelte';
	import RsAPI from "../../services/api_services";
	import { Validation } from "../../configs/validations";
	import { Toaster, toast } from 'svelte-sonner'
    let emailError = false
    let passwordError = false
    const formValues = {
        identifier: "",
        password: "",
    }
    async function submitForm() {
        const res = await RsAPI.post({
            url: '/login',
            data: formValues,
        })
        if(res.statusCode == 401) {
            toast.error(res.message)
        } else {
            toast.success(res.message)
            window.location.href = '/dashboard'
        }
    }
    function validateEmail() {
        if(Validation.email(formValues.identifier)) {
            emailError = false
        } else {
            emailError = true
        }
    }
    function validatePassword() {
        if(Validation.password(formValues.password)) {
            passwordError = false
        } else {
            passwordError = true
        }
    
    }
</script>
<main>
    <Toaster />
    <div class="w-screen h-screen bg-[url('./assets/bg-auth.svg')] bg-cover">
     <div class="w-full h-full backdrop-blur-[80px] flex items-center justify-center flex-col">
        <img src="ic_logo.png"  alt="logo" class="scale-75"/>
        <Card.Root>
            <Card.Header>
              <Card.Title>Log in</Card.Title>
              <Card.Description>Enter your account and be productivie today</Card.Description>
            </Card.Header>
            <Card.Content>
                <form on:submit|preventDefault={submitForm} method="POST" class="space-y-6">
                    <div>
                    <Label for="email">Email</Label>
                    <IconUser class="absolute w-5 h-5 mt-3.5 ml-2 text-gray-400"/>
                    <Input
                    class="w-full pl-9 mt-1"
                    bind:value={formValues.identifier}
                    type="email"
                    placeholder="Enter your email"
                    on:change={validateEmail}
                    required/>
                    {#if emailError}
                    <div class="flex flex-row items-center p-2 bg-red-100 rounded-sm mt-2">
                        <IconAlertTriangle class="w-4 h-4 text-red-500"/>
                        <p class="text-[12px] text-red-500 ml-2">Please enter valid email</p>
                    </div>
                    {/if}
                    </div>
                    <div style="margin-top: 8px;">
                        <Label for="password">Password</Label>
                        <IconFingerprint class="absolute w-5 h-5 mt-3.5 ml-2 text-gray-400"/>
                        <Input
                        class="w-full pl-9 mt-1"
                        bind:value={formValues.password}
                        on:keydown={validatePassword}
                        type="password"
                        placeholder="Enter your password"
                        required/>
                        {#if passwordError}
                        <div class="flex flex-row items-center p-2 bg-red-100 rounded-sm mt-2">
                            <IconAlertTriangle class="w-4 h-4 text-red-500"/>
                            <p class="text-[12px] text-red-500 ml-2">Password at least 4 characters</p>
                        </div>
                        {/if}
                        </div>
                    <Form.Button class="w-full items-center mt-3" >
                        <IconLogin class="w-5 h-5 mr-2"/>
                        Log In</Form.Button>
                  </form>
            </Card.Content>
            <Card.Footer class="items-center justify-center">
                <p class="text-sm text-gray-400 ">Created with ❤️ by RAN</p>
            </Card.Footer>
          </Card.Root>
     </div>
    </div>
 </main>
 