import { shallowMount } from "@vue/test-utils";
import { mount } from "@vue/test-utils";

import ProductItem from "@/components/ProductItem.vue";
import OrderForm from "@/components/OrderForm";

describe("ProductItem.vue", () => {
  it("renders props when passed", () => {
    const data = {
      name: "Surface",
      image: "https://placekitten.com/500/500",
      price: {
        amount: 12,
        currency: "EUR"
      }
    };
    const wrapper = shallowMount(ProductItem, {
      props: { data }
    });
    expect(wrapper.find(".card__title").text()).toMatch(data.name);
    expect(wrapper.find(".card__image").exists()).toBe(true);
    expect(wrapper.find(".card__price").text()).toMatch(
      `${data.price.amount} ${data.price.currency}`
    );
  });
});
describe("OrderForm.vue", () => {
  it("set value of inputs", async () => {
    const wrapper = mount(OrderForm, {
      data() {
        return {
          errors: [],
          givenNames: "Michael",
          surname: "Kong",
          email: "test@test.test",
          phoneNumber: "0412345678",
          shippingName: "Michael Kong",
          shippingAddress: "Crown Street",
          shippingSuburb: "Wollongong",
          shippingPostcode: "2500",
          shippingCountryCode: "AU",
          shippingPhoneNumber: "0412345678"
        };
      }
    });
    expect(wrapper.find("#phone").element.value).toBe("0412345678");
    expect(wrapper.find("#given-names").element.value).toBe("Michael");
    expect(wrapper.find("#email").element.value).toBe("test@test.test");
    // await wrapper.find(".order-form__submit").trigger("click");
    // expect(wrapper.emitted()).toHaveProperty("form-submitted");
    // await wrapper.vm.$emit("form-submitted");
    // expect(wrapper.find(".order-form__errors").exists()).toBe(true);
    // expect(wrapper.text()).toContain("Valid phone number required");
  });
});

// describe("Cart.vue", () => {
//   it("renders props when passed", () => {
//     const cart = [
//       {
//         id: 2,
//         name: "Surface",
//         category: "Computers",
//         subcategory: ["Tablet"],
//         brand: "Microsoft",
//         gtin: "725272730701",
//         sku: "12341",
//         price: {
//           amount: "1200",
//           currency: "EUR"
//         },
//         description:
//           "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
//         image: "http://placeimg.com/500/500/tech",
//         quantity: 1
//       }
//     ];
//     const config = {
//       isLoading: false,
//       data: {
//         type: "PAY_BY_INSTALLMENT",
//         description: "'Pay over time'",
//         minimumAmount: {
//           amount: "4.00",
//           currency: "EUR"
//         },
//         maximumAmount: {
//           amount: "600.00",
//           currency: "EUR"
//         },
//         numberOfPayments: 3,
//         promotionUrl: "https://promotion.scalapay.it/popup/600/",
//         locales: ["en", "fr", "it"]
//       }
//     };
//     const wrapper = shallowMount(Cart, {
//       props: {
//         cart,
//         config
//       }
//     });
//     expect(wrapper.find(".card__list").exists()).toBe(true);
//   });
// });
