// Note: This project is from Udemy course by stephen grider.
// This is created only for sake of understanding.

const Redux = require('redux');

// People dropping off the form (Action Creators)

const createPolicy = (name, amount) => {
    return {
      // Action
      type: "CREATE_POLICY",
      payload: {
        name: name,
        amount: amount
      }
    };
  };
  
  const deletePolicy = (name) => {
    return {
      // Action
      type: "DELETE_POLICY",
      payload: {
        name: name
      }
    };
  };
  
  const createClaim = (name, amountOfMoneyToCollect) => {
    return {
      // Action
      type: "CREATE_CLAIM",
      payload: {
        name: name,
        amountOfMoneyToCollect: amountOfMoneyToCollect
      }
    };
  };
  
  // Reducers (Departments)
  const claimsHistory = (oldListOfClaims = [], action) => {
    if (action.type === "CREATE_CLAIM") {
      return [...oldListOfClaims, action.payload];
    }
    return oldListOfClaims;
  };
  
  const accounting = (bagOfMoney = 100, action) => {
    if (action.type === "CREATE_CLAIM") {
      return bagOfMoney - action.payload.amountOfMoneyToCollect;
    } else if (action.type === "CREATE_POLICY") {
      return bagOfMoney + action.payload.amount;
    }
    return bagOfMoney;
  };
  
  const policies = (listOfPolicies = [], action) => {
    if (action.type === "CREATE_POLICY") {
      return [...listOfPolicies, action.payload.name];
    } else if (action.type === "DELETE_POLICY") {
      return listOfPolicies.filter((policy) => policy !== action.payload.name);
    }
    return listOfPolicies;
  };
  
  const { createStore, combineReducers } = Redux;
  
  const ourDepartments = combineReducers({
    accounting: accounting,
    claimsHistory: claimsHistory,
    policies: policies
  });
  
  const store = createStore(ourDepartments);
  
  store.dispatch(createPolicy("Alex", 20));
  store.dispatch(createPolicy("Jack", 50));
  store.dispatch(createPolicy("Dojo", 40));
  store.dispatch(createClaim("Dojo", 20));
  store.dispatch(deletePolicy("Dojo"));
  
  console.log(store.getState());