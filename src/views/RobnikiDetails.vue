<template>
  <div>
    <h1>hello{{ robnikiId }}</h1>
  </div>
</template>

<script>
export default {
  name: "RobnikiDetails",
  props: ["robnikiId"],
  setup(props) {
    console.log(props.robnikiId.id);
  },
};
</script>

<style></style>
