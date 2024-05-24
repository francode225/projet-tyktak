import { createRouter, createWebHistory } from 'vue-router'

// Importation des composants
import PageAccueil from '@/views/view_tilo/PageAccueil.vue';
import tableau_bordVue from '@/views/view_yeo/tableau_bord.vue';
import dashboardVue from '@/components/admin/tableau_bord/contenu/dashboard/dashboard.vue';
import personnelVue from '@/views/view_yeo/personnel.vue';
import gestion_personnelVue from '@/components/admin/gestion_personnel/gestion_personnel.vue';
import droit_accesVue from '@/components/admin/gestion_personnel/droit_d\'acces.vue';
import candidatVue from '@/views/view_yeo/candidat.vue';
import test from '@/views/view_yeo/test.vue';
import creer_test from '@/components/admin/test_psycho/creer_test.vue';
import enregister_test from '@/components/admin/test_psycho/enregister_test.vue';
import parametre from '@/views/view_yeo/parametre.vue';
import para_appli from '@/components/admin/parametre/para_appli.vue';
import para_generaux from '@/components/admin/parametre/para_generaux.vue';
import comptabiliteVue from '@/views/view_yeo/comptabilite.vue';
import payementVue from '@/components/admin/gestion_comptable/payement.vue';
import suivie_debit_creditVue from '@/components/admin/gestion_comptable/suivie_debit_credit.vue';
import editionsVue from '@/views/view_yeo/editions.vue';
import sauvegardes_restaurationsVue from '@/views/view_yeo/sauvegardes_restaurations.vue';
import clientsVue from '@/views/view_yeo/clients.vue';
import gestion_clientsVue from '@/components/admin/gestion_client/gestion_clients.vue';
import appel_offreVue from '@/components/admin/gestion_client/appel_offre.vue';
import piste_auditVue from '@/views/view_yeo/piste_audit.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/tableau_bord',
      name: 'tableau de bord',
      component: tableau_bordVue,
      children: [
        // Tableau de bord
        { name: 'dashboard', path: 'dashboard', component: dashboardVue },

        // Personnel
        { name: 'personnel', path: 'personnel', component: personnelVue },
        { name: 'gestion_personnel', path: 'gestion_personnel', component: gestion_personnelVue },
        { name: 'droit_acces', path: 'droit_acces', component: droit_accesVue },

        // candidat
        { name: 'candidat', path: 'candidat', component: candidatVue },
        

        // Test
        { name: 'test', path: 'test', component: test },
        { name: 'creer_test', path: 'creer_test', component: creer_test },
        { name: 'enregister_test', path: 'enregister_test', component: enregister_test },

        // Paramètres
        { name: 'parametre', path: 'parametre', component: parametre },
        { name: 'parametre_generaux', path: 'parametre_generaux', component: para_generaux },
        { name: 'parametre_application', path: 'parametre_application', component: para_appli },

        // Comptabilité
        { name: 'comptabilite', path: 'comptabilite', component: comptabiliteVue },
        { name: 'payement', path: 'payement', component: payementVue },
        { name: 'suivie_debit_credit', path: 'suivie_debit_credit', component: suivie_debit_creditVue },

        // Clients
        { name: 'clients', path: 'clients', component: clientsVue },
        { name: 'gestion_clients', path: 'gestion_clients', component: gestion_clientsVue },
        { name: 'appel_offre', path: 'appel_offre', component: appel_offreVue },

        // Autres
        { name: 'editions', path: 'editions', component: editionsVue },
        { name: 'sauvegardes_restaurations', path: 'sauvegardes_restaurations', component: sauvegardes_restaurationsVue },
        { name: 'piste_audit', path: 'piste_audit', component: piste_auditVue },
      ],
    },
    {
      path: '/',
      name: 'home',
      component: PageAccueil,
    },
  ],
});

export default router;
