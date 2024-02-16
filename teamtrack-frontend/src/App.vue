<template>
        <nav>
            <ul>
                <li><a href="http://localhost:5173/">Home Page</a></li>
                <li><a href="/coachEvents">Coach</a></li>
                <li><a href="/athleteEvents">Athlete</a></li>
            </ul>
        </nav>

        <router-view />
</template>

<script setup lang="ts">
    import {defineProps} from "vue";
    defineProps<{ isAthlete: Boolean, hasChosen: Boolean}>();

</script>




