
<script>
    import * as Card from "$lib/components/ui/card";
    import * as Form from "$lib/components/ui/form";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import { IconUser, IconFingerprint, IconLogin } from '@tabler/icons-svelte';
    const formValues = {
        email: "",
        password: "",
    }

    async function submitForm() {
       
    }
</script>
<main>
    <div class="w-screen h-screen bg-[url('./assets/bg-auth.svg')] bg-cover">
     <div class="w-full h-full backdrop-blur-[80px] flex items-center justify-center flex-col">
        <Card.Root>
            <Card.Header>
              <Card.Title>Log in</Card.Title>
              <Card.Description>Enter your account and be productivie today</Card.Description>
            </Card.Header>
            <Card.Content>
                <form on:submit|preventDefault={submitForm} method="POST" class="space-y-6">
                    <div >
                    <Label for="email">Email</Label>
                    <IconUser class="absolute w-5 h-5 mt-2.5 ml-2 text-gray-400"/>
                    <Input
                    class="w-full pl-9"
                    bind:value={formValues.email}
                    type="email"
                    placeholder="Enter your email"
                    required/>
                    <!-- <p class="text-sm text-red-500 invisible">Please enter valid email</p> -->
                    </div>
                    <div class="mt-[0px]">
                        <Label for="password">Password</Label>
                        <IconFingerprint class="absolute w-5 h-5 mt-2.5 ml-2 text-gray-400"/>
                        <Input
                        class="w-full pl-9"
                        bind:value={formValues.password}
                        type="password"
                        placeholder="Enter your password"
                        required/>
                        <!-- <p class="text-sm text-red-500 invisible">Please enter valid email</p> -->
                        </div>
                    <Form.Button class="w-full items-center">
                        <IconLogin class="w-5 h-5 mr-2"/>
                        Log In</Form.Button>
                  </form>
            </Card.Content>
            <Card.Footer>
            </Card.Footer>
          </Card.Root>
     </div>
    </div>
 </main>
 