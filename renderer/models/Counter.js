import { types } from 'mobx-state-tree';

const Counter = types
    .model("Counter", {
        value: types.optional(types.number, 0)
    })
    .actions(self => ({
        increment() {
            self.value += 1;
        },
        decrement() {
            self.value -= 1;
        }
    }));

export const counterStore = Counter.create();