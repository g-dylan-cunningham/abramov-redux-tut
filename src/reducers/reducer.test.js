import { counter, todos } from './reducer';
import deepFreeze from 'deep-freeze';


describe("todos", () => {
    test("takes ADD_TODO action & updates state", () => {
        const stateBefore= [];
        let action = {
            id: 0,
            type: "ADD_TODO",
            text: "learn redux"
        }
        const stateAfter = {
            id: 0,
            text: "learn redux",
            completed: false
        };
        
        deepFreeze(stateBefore);
        deepFreeze(action);

        expect(todos(stateBefore, action)).toEqual([stateAfter]);
    })

    test("takes TOGGLE_TODO action and returns state", () => {
        const stateBefore = [
            {
                id: 0,
                completed: false,
                text: "practice"
            },
            {
                id: 1,
                completed: false,
                text: "learn"
            }
        ];
        const action = {
            type: "TOGGLE_TODO",
            id: 1
        }
        const stateAfter = [
            {
                id: 0,
                completed: false,
                text: "practice"
            },
            {
                id: 1,
                completed: true,
                text: "learn"
            }
        ];
        deepFreeze(stateBefore);
        deepFreeze(action);
        
        expect(todos(stateBefore, action)).toEqual(stateAfter);
    })



})

describe("counter", () => {
    test("inc", () => {
        expect(counter(0, {type: "INCREMENT"})).toEqual(1)
    });

    test("inc1", () => {
        expect(counter(1, {type: "INCREMENT"})).toEqual(2)
    });

    test("dec", () => {
        expect(counter(2, {type: "DECREMENT"})).toEqual(1)
    });

    test("dec1", () => {
        expect(counter(1, {type: "DECREMENT"})).toEqual(0)
    });

    test("unknown acton", () => {
        expect(counter(0, {type: "OTHER"})).toEqual(0)
    });

    test("unspecified state", () => {
        expect(counter(undefined, {type: "DECREMENT"})).toEqual(-1)
    });
});
