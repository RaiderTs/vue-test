import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/pages/HomePage.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/cats/new",
        component: () => import("./pages/UploadPage.vue"),
    },
    {
        path: "/cats/my",
        component: () => import("./pages/ViewPage.vue"),
    },
];

export default new VueRouter({
    mode: "history",
    routes,
});
