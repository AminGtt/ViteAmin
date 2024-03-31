<script setup>
    import DeviceCard from "../../components/DeviceCard.vue"
</script>

# My devices <Badge type="tip" text="WIP" />


<!-- ## Apple -->

<section class="devices">
    <DeviceCard deviceName='mbp' />
    <DeviceCard deviceName='iphone' />
    <DeviceCard deviceName='pc' />
    <DeviceCard deviceName='steamdeck' />
    <!-- <DeviceCard deviceName='ipad5' />
    <DeviceCard deviceName='ipad3' />
    <DeviceCard deviceName='nano' /> -->
</section>

<!-- ## Windows -->

<!-- <section class="devices">
</section> -->

<!-- ## Linux -->

<!-- <section class="devices">
</section> -->

<!-- ## Servers

<section class="devices">
    <DeviceCard deviceName='mbp_serv' />
</section>

## Others -->

<!-- <section class="devices">
    <DeviceCard deviceName='xbox' />
    <DeviceCard deviceName='camc200' />
    <DeviceCard deviceName='tabm10' />
    <DeviceCard deviceName='ps2' />
</section> -->


<style scoped lang="sass">

    .devices 
     display: flex
     flex-wrap: wrap

</style>