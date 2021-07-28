import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import { api } from './api.module'
import { alert } from './alert.module'
import { assignment } from './assignment.module'
import { assessment } from './assessment.module'
import { experiment } from './experiment.module'
import { condition } from './condition.module'
import { consent } from './consent.module'
import { exposures } from './exposures.module';
import { participants } from './participants.module';
import { outcome } from './outcome.module';
import { treatment } from './treatment.module';

Vue.use(Vuex)

const store = new Vuex.Store({
    plugins: [createPersistedState({
        key: 'terracotta'
    })],
    modules: {
        api,
        alert,
        assignment,
        assessment,
        experiment,
        condition,
        consent,
        exposures,
        participants,
        outcome,
        treatment
    }
})

export default store