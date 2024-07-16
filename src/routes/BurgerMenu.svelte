<script lang="ts">
    import { slide } from 'svelte/transition';
    import DropdownMenu from './DropdownMenu.svelte'
    let checked;
    let dropMenu = false;
    import SmallMenuModal from './SmallMenuModal.svelte';

    let burOpen= false
</script>

<SmallMenuModal showModal={burOpen}/>

<div class="barbar" on:click={(event)=>{burOpen = !burOpen;event.stopPropagation()}}>
    <label for="checkbox4" on:click={()=>{burOpen = !burOpen}}>
        <div class="hamburger hamburger4">
            <span class="bar bar1"></span>
            <span class="bar bar2"></span>
            <span class="bar bar3"></span>
            <span class="bar bar4"></span>
            <span class="bar bar5"></span>
            
        </div>
    </label>
</div>


<style lang="less">

    label{
        position: relative;
    }
    .visuallyHidden {
        position: absolute; 
        overflow: hidden; 
        clip: rect(0 0 0 0); 
        height: 1px; width: 1px; 
        margin: -1px; padding: 0; border: 0;
    }
    input{
        width: 100%;
    }
    .hamburger {
        margin: 0 auto;
        width: 40px;
        height: 30px;
        position: relative;
        cursor: pointer;
        display: flex;
        justify-content: center;
        @media (max-width:800px) {
            width: 30px;
            height: 30px;
        }
    }
    .disable{
        pointer-events: none;
    }

    .hamburger .bar {
        padding: 0;
        width: 70%;
        height: 1px;
        background-color: black;
        display: block;
        border-radius: 4px;
        transition: all 0.1s ease-in-out;
        position: absolute; 
        @media (max-width:480px) {
            height: 2px !important;
        }
    }
    .bar1 {
        top: 7px;
    }

    .bar2,
    .bar3 {
        top: 13.5px;
        opacity: 0;
        
    }

    .bar3 {
        right: 0;
    }

    .bar4 {
        bottom: 0;
        
    }

    .hamburger4 .bar4 {
        top: 13.5px;
        @media (max-width:800px) {
            top: 13.5px;
        }
        
    }

    .hamburger4 .bar5 {
        bottom: 7px;
    }

    .hamburger4 .bar {
        transition: all 0.25s ease-in-out, transform 0.25s ease-in-out 0.25s;
    }

    .hamburger4 .bar2 {
        width: 1px;
        transform: rotate(90deg);
        left: 15px;
    }

    .hamburger4 .bar3 {
        width: 1px;
        left: 15px;
       
        
    }

    .options{
        position: absolute;
        left: 0;
        height: 40px;
        display: flex;
        align-items: center;
        padding: 0 30px;
        column-gap: 25px;
        z-index: 9999;
        top: 0;
        width: 100%;
        @media (max-width:1290px) {
            column-gap: 10px;
        }
    }

    /* .options a{

    } */

    .hamburger_link{
        font-size: 32px !important;
        font-weight: 500;
        display: inline;
        text-wrap: nowrap;
        cursor: pointer;
        @media (max-width:1450px) {
            font-size: 24px !important;
        }
        
    }
    .barbar {
        padding: 0px 72px 0 20px;
        position:relative;
        height:100%;
        width: 48px;
        display:flex;
        justify-content: center;
        align-items:center;
        flex-grow:1;
        background: #E5E5E5;
        
        @media (max-width:800px) {
            padding: 0 !important;
        }
    }
</style>