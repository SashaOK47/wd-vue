import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import Footer from '@/components/organisms/Footer';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Footer.vue', () => {
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      getCompleted: () => [],
      getTasksCount: () => [],
    };

    store = new Vuex.Store({
      getters,
    });
  });

  it('calls getter getCompleted', () => {
    const wrapper = shallowMount(Footer, { store, localVue });
    const span = wrapper.find('span');
    expect(span).toBeTruthy();
  });

  it('calls getter getTasksCount', () => {
    const wrapper = shallowMount(Footer, { store, localVue });
    const span = wrapper.findAll('span').at(1);
    expect(span).toBeTruthy();
  });
});
