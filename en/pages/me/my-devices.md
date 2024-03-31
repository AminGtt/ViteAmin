<script setup>
    import DeviceCard from "../../../components/DeviceCard.vue"
</script>

# My devices <Badge type="tip" text="WIP" />

<section class="devices">
    <DeviceCard deviceName='mbp' />
    <DeviceCard deviceName='iphone' />
    <DeviceCard deviceName='pc' />
    <DeviceCard deviceName='steamdeck' />
</section>


<style scoped lang="sass">

    .devices 
     display: flex
     flex-wrap: wrap

</style>