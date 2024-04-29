
<script>
	import Button from "$lib/components/ui/button/button.svelte";
    import textStyle from "../styles/text";
    import { IconLogin } from '@tabler/icons-svelte';

</script>

<main>
   <div class="w-screen h-screen bg-[url('./assets/bg-auth.svg')] bg-cover">
    <div class="w-full h-full backdrop-blur-[80px] flex items-center justify-center flex-col">
        <h1 class={textStyle.heading}>Des<span class="text-transparent bg-gradient-to-br from-blue-500 to-cyan-600 bg-clip-text">Note</span></h1>
        <h3 class={textStyle.subHeading}>Meeting Collaboration and Digital Minutes</h3>
        <div class="w-3/4 rounded-md bg-white bg-opacity-40 mt-2 {textStyle.body} p-4 border-gray-100 border-[1px] xl:w-1/2">
            <p>Get easy to your meeting minutes and scheduling your meeting by DesNote, a powerfull app that can help boost your productivity</p>
            <Button class="mt-2" href="/login">
                <IconLogin class="w-5 h-5 mr-2" />
                Log In</Button>
        </div>
        
    </div>
   </div>
</main>
