import { mount } from "@vue/test-utils";
import App from "@/App";

test("left click", async () => {
  const wrapper = mount(App);
  await wrapper.find(".btn").trigger("click", { button: 0 });
  expect(wrapper.find(".btn").text()).toBe("left");
});

test("right click", async () => {
  const wrapper = mount(App);
  await wrapper.find(".btn").trigger("click", { button: 2 });
  expect(wrapper.find(".btn").text()).toBe("right");
});


test("right click with modifier", async () => {
  const wrapper = mount(App);
  await wrapper.find(".btn").trigger("click.right");
  expect(wrapper.find(".btn").text()).toBe("right");
});
