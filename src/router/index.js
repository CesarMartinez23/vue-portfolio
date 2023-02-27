import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SumarioView from "../views/SumarioView.vue";
import JornalizacionView from "../views/JornalizacionView.vue";
import CalendarizacionView from "../views/CalendarizacionView.vue";
import ApuntesView from "../views/ApuntesView.vue";
import TareaView from "../views/TareaView.vue";
import InvestigacionView from "../views/InvestigacionView.vue";
import EvaluacionesView from "../views/EvaluacionesView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Inicio",
      component: HomeView,
    },
    {
      path: "/sumario",
      name: "Sumario",
      component: SumarioView,
    },
    {
      path: "/jornalizacion",
      name: "Jornalizacion",
      component: JornalizacionView,
    },
    {
      path: "/calendarizacion",
      name: "Calendarizacion",
      component: CalendarizacionView,
    },
    {
      path: "/apuntes",
      name: "Apuntes",
      component: ApuntesView,
    },
    {
      path: "/tarea",
      name: "Tarea",
      component: TareaView,
    },
    {
      path: "/investigacion",
      name: "Investigacion",
      component: InvestigacionView,
    },
    {
      path: "/evaluaciones",
      name: "Evaluaciones",
      component: EvaluacionesView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
