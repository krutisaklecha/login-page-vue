import Dashboard from "@/components/Dashboard";
import Vue from "vue";
import {shallowMount, createLocalVue,} from "@vue/test-utils";
import VueRouter from 'vue-router';
const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();
describe('Dashboard Account',()=>{
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Dashboard, {
            router,
            localVue,
        });
    })
    it('Renders Vue instance', () => {
        expect(wrapper.isVueInstance()).toBe(true)
    });
})
