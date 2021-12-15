<script>
  import { items } from "../stores";

  export let title;

  $: itemCount = $items.length;
  $: completedItemCount = $items.filter((item) => item.completed).length;
</script>

<div class="header">
  <span>{title}</span>
  <span>{completedItemCount}/{itemCount}</span>
</div>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    padding: 1rem 1rem;
    font-size: 1.7rem;
    background: rgba(0, 0, 0, 0.1);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
</style>
