<script>
  import Header from "./components/Header.svelte";
  import List from "./components/List.svelte";
  
  export let title;
</script>

<div class="container">
  <Header {title}/>
  <List />
</div>

<style>
  .container {
    width: 550px;
    background-image: linear-gradient(to right, #3ec2b7, rgb(90, 184, 145));
    padding: 0;
    border-radius: 8px;
  }

  @media only screen and (max-width: 600px) {
    .container {
      width: 410px;
    }
  }

  :global(.container *) {
    font-family: sans-serif;
  }
</style>
