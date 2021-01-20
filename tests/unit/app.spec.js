import { shallowMount } from "@vue/test-utils";
import ProductItem from "@/components/ProductItem.vue";
import HomeHero from "@/components/HomeHero.vue";

describe("ProductItem.vue", () => {
  it("renders props.name and props.image when passed", () => {
    const data = {
      name: "Surface",
      image: "https://placekitten.com/500/500"
    };
    const wrapper = shallowMount(ProductItem, {
      props: { data }
    });
    expect(wrapper.find(".card__title").text()).toMatch(data.name);
    expect(wrapper.find(".card__image").attributes("src")).toMatch(data.image);
  });
});

jest.mock("axios", () => ({
  get: Promise.resolve("value")
}));

it("fetches async when a button is clicked", () => {
  const wrapper = shallowMount(HomeHero);
  wrapper.vm.$nextTick(() => {
    expect(wrapper.props().config.minimumAmount.amount).toMatch("4.00");
  });
});
