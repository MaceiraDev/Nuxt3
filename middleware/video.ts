export default defineNuxtRouteMiddleware((to, from) => {
    const valueParams = +to.params.id;
    if (isNaN(valueParams) || valueParams < 0) {
        return navigateTo('/videos')
    }
})