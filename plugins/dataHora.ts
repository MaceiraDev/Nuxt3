export default defineNuxtPlugin(({ vueApp }) => {
    vueApp.directive('data-hora', {
        mounted(el, binding) {
            const dataFormadata = new Date(el.innerText);
            el.innerText = formataData(dataFormadata, binding.value)
        }
    })
});

const formataData = (data: Date, tipo: string = "") => {
    switch (tipo) {
        case "dd/mm/yyyy":
            return data.toLocaleDateString("pt-br");
        case "hh/mm":
            return data.toLocaleTimeString("pt-br");
        default:
            return data.toLocaleString("pt-br");
    }
}